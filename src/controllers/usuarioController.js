var usuarioModel = require("../models/usuarioModel");


function autenticar(req, res) {
  var email = req.body.emailServer;
  var senha = req.body.senhaServer;

  if (email == undefined) {
    console.log("Seu email está undefined!")
    res.status(400).send("Seu email está undefined!");
  } else if (senha == undefined) {
    console.log("Sua senha está indefinida!")
    res.status(400).send("Sua senha está indefinida!");
  } else {
    usuarioModel
      .autenticar(email, senha)
      .then(function (resultadoAutenticar) {
        console.log(`\nResultados encontrados: ${resultadoAutenticar.length}`);
        console.log(`Resultados: ${JSON.stringify(resultadoAutenticar)}`); // transforma JSON em String

        if (resultadoAutenticar.length == 1) {
          console.log(resultadoAutenticar);
          res.json({
            id: resultadoAutenticar[0].idUsuario,
            email: resultadoAutenticar[0].email,
            nome: resultadoAutenticar[0].nome,
            senha: resultadoAutenticar[0].senha,
            foto: resultadoAutenticar[0].fotoPerfil,
            dobra: resultadoAutenticar[0].favDobra
          });
      
        } else if (resultadoAutenticar.length == 0) {
          res.status(403).send("Email e/ou senha inválido(s)");
        } else {
          res.status(403).send("Mais de um usuário com o mesmo login e senha!");
        }
      })
      .catch(function (erro) {
        console.log(erro);
        console.log(
          "\nHouve um erro ao realizar o login! Erro: ",
          erro.sqlMessage
        );
        res.status(500).json(erro.sqlMessage);
      });
  }
}

function cadastrar(req, res) {
  // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
  var nome = req.body.nomeServer;
  var email = req.body.emailServer;
  var senha = req.body.senhaServer;
  var dobra = req.body.dobraServer;

  // Faça as validações dos valores
  if (nome == undefined) {
    console.log("Seu nome está undefined!")
    res.status(400).send("Seu nome está undefined!");
  } else if (email == undefined) {
    console.log("Seu email está undefined!")
    res.status(400).send("Seu email está undefined!");
  } else if (senha == undefined) {
    console.log("Sua senha está undefined!")
    res.status(400).send("Sua senha está undefined!");
  } else if (dobra == undefined) {
    console.log("Sua Dobra Favorita está undefined!")
    res.status(400).send("Sua Dobra Favorita está undefined!");
  } else {
    // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
    usuarioModel.cadastrar(nome, email, senha, dobra)
      .then(function (resultado) {
        res.json(resultado);
      })
      .catch(function (erro) {
        console.log(erro);
        console.log(
          "\nHouve um erro ao realizar o cadastro! Erro: ",
          erro.sqlMessage
        );
        res.status(500).json(erro.sqlMessage);
      });
  }
}

function selectPicture(req, res) {
  var picture = req.body.pictureServer;
  var id = req.body.idServer;

  if (picture === undefined) {
    console.log("Seu avatar está undefined!");
    return res.status(400).send("Seu avatar está undefined!");
  } else if (id === undefined) {
    console.log("Seu ID está undefined!");
    return res.status(400).send("Seu ID está undefined!");
  }

  usuarioModel.selectPicture(picture, id)
    .then(function (resultado) {
      res.json(resultado);
    })
    .catch(function (erro) {
      console.error(erro);
      console.error("Houve um erro ao realizar a troca de avatar! Erro: ", erro.sqlMessage);
      res.status(500).json(erro.sqlMessage);
    });
}

function selectName(req, res) {
  var nome = req.body.nomeServer;
  var id = req.body.idServer;

  if (nome === undefined) {
    console.log("Seu nome está undefined!");
    return res.status(400).send("Seu nome está undefined!");
  } else if (id === undefined) {
    console.log("Seu ID está undefined!");
    return res.status(400).send("Seu ID está undefined!");
  }

  usuarioModel.selectName(nome, id)
    .then(function (resultado) {
      res.json(resultado);
    })
    .catch(function (erro) {
      console.error(erro);
      console.error("Houve um erro ao realizar a troca de nome! Erro: ", erro.sqlMessage);
      res.status(500).json(erro.sqlMessage);
    });
}

function selectDobra(req, res) {
  var dobra = req.body.dobraServer;
  var id = req.body.idServer;

  if (dobra === undefined) {
    console.log("Sua nova Dobra está undefined!");
    return res.status(400).send("Sua nova Dobra está undefined!");
  } else if (id === undefined) {
    console.log("Seu ID está undefined!");
    return res.status(400).send("Seu ID está undefined!");
  }

  usuarioModel.selectDobra(dobra, id)
    .then(function (resultado) {
      res.json(resultado);
    })
    .catch(function (erro) {
      console.error(erro);
      console.error("Houve um erro ao realizar a troca de nome! Erro: ", erro.sqlMessage);
      res.status(500).json(erro.sqlMessage);
    });
}


module.exports = {
  autenticar,
  cadastrar,
  selectPicture,
  selectName,
  selectDobra
};

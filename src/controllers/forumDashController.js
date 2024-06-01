var forumDashModel = require("../models/forumDashModel");

function enviarMsg(req, res) {
    var id = req.body.idServer;
    var texto = req.body.textoServer;
     if (id === undefined) {
      console.log("Seu ID está undefined!");
      return res.status(400).send("Seu ID está undefined!");
    }else if (texto === undefined) {
      console.log("Seu texto está undefined!");
      return res.status(400).send("Seu texto está undefined!");
    }
  
    forumDashModel.enviarMsg(id, texto)
      .then(function (resultado) {
        res.json(resultado);
      })
      .catch(function (erro) {
        console.error(erro);
        console.error("Houve um erro ao realizar o select (id) TophGame! Erro: ", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
      });
  }

function deletarMsg(req, res) {
    var forum = req.body.forumServer;
     if (forum === undefined) {
      console.log("Seu IdForum está undefined!");
      return res.status(400).send("Seu IdForum está undefined!");
    }
    forumDashModel.deletarMsg(forum)
      .then(function (resultado) {
        res.json(resultado);
      })
      .catch(function (erro) {
        console.error(erro);
        console.error("Houve um erro ao realizar o select (id) TophGame! Erro: ", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
      });
  }

function atualizarMsg(req, res) {
    var forum = req.body.forumServer;
    var texto = req.body.textoServer;
     if (forum === undefined) {
      console.log("Seu IdForum está undefined!");
      return res.status(400).send("Seu IdForum está undefined!");
    }else if (texto === undefined) {
      console.log("Seu texto está undefined!");
      return res.status(400).send("Seu texto está undefined!");
    }
    forumDashModel.atualizarMsg(forum, texto)
      .then(function (resultado) {
        res.json(resultado);
      })
      .catch(function (erro) {
        console.error(erro);
        console.error("Houve um erro ao atualizar a msg! Erro: ", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
      });
  }

function obterTodasMsgs(res) {
    forumDashModel.obterTodasMsgs()
      .then(function (mensagens) {
        res.json(mensagens);
      })
      .catch(function (erro) {
        console.error(erro);
        console.error("Houve um erro ao obter todas as mensagens do fórum! Erro: ", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
      });
}


module.exports = {
    enviarMsg,
    deletarMsg,
    atualizarMsg,
    obterTodasMsgs
  };
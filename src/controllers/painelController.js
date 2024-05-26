var painelModel = require("../models/painelModel");

function vitorias(req, res) {
  var email = req.body.emailServer;
  var senha = req.body.senhaServer;

  if (email == undefined) {
    var ponto = req.body.pontoServer;
    var id = req.body.idServer
    tophGameModel.pontuar(ponto, id)
      .then(function (resultado) {
        res.json(resultado);
      })
      .catch(function (erro) {
        console.log(erro);
        console.log(
          "\nHouve um erro ao realizar o ponto! Erro: ",
          erro.sqlMessage
        );
        res.status(500).json(erro.sqlMessage);
      });
}

    }
module.exports = {
vitorias
    }

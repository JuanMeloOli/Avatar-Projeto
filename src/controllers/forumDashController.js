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

module.exports = {
    enviarMsg
  };
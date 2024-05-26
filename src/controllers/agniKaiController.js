var agniKaiModel = require("../models/agniKaiModel");

function pontuar(req, res) {
    var ponto = req.body.pontoServer;
    var id = req.body.idServer
    agniKaiModel.pontuar(ponto, id)
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

module.exports = {
    pontuar
}
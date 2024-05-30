var dashboardModel = require("../models/dashboardModel");

function kpiFire(req, res) {
    var id = req.body.idServer;
     if (id === undefined) {
      console.log("Seu ID está undefined!");
      return res.status(400).send("Seu ID está undefined!");
    }
  
    dashboardModel.kpiFire(id)
      .then(function (resultado) {
        res.json(resultado);
      })
      .catch(function (erro) {
        console.error(erro);
        console.error("Houve um erro ao realizar o select (id) agniKai! Erro: ", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
      });
}

function kpiEarth(req, res) {
  var id = req.body.idServer;
   if (id === undefined) {
    console.log("Seu ID está undefined!");
    return res.status(400).send("Seu ID está undefined!");
  }

  dashboardModel.kpiEarth(id)
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
    kpiFire,
    kpiEarth
  };
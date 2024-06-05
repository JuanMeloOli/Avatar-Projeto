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


function kpiAir(req, res) {
  var id = req.body.idServer;
   if (id === undefined) {
    console.log("Seu ID está undefined!");
    return res.status(400).send("Seu ID está undefined!");
  }

  dashboardModel.kpiAir(id)
    .then(function (resultado) {
      res.json(resultado);
    })
    .catch(function (erro) {
      console.error(erro);
      console.error("Houve um erro ao realizar o select (id) TophGame! Erro: ", erro.sqlMessage);
      res.status(500).json(erro.sqlMessage);
    });
}


function kpiWater(req, res) {
  var id = req.body.idServer;
   if (id === undefined) {
    console.log("Seu ID está undefined!");
    return res.status(400).send("Seu ID está undefined!");
  }

  dashboardModel.kpiWater(id)
    .then(function (resultado) {
      res.json(resultado);
    })
    .catch(function (erro) {
      console.error(erro);
      console.error("Houve um erro ao realizar o select (id) TophGame! Erro: ", erro.sqlMessage);
      res.status(500).json(erro.sqlMessage);
    });
}

function obterVotosFogo(req, res) {
  dashboardModel.obterVotosFogo()
    .then(function (mensagens) {
      res.json(mensagens);
    })
    .catch(function (erro) {
      console.error(erro);
      console.error("Houve um erro ao obter os votos! Erro: ", erro.sqlMessage);
      res.status(500).json(erro.sqlMessage);
    });
}

function obterVotosAgua(req, res) {
  dashboardModel.obterVotosAgua()
    .then(function (mensagens) {
      res.json(mensagens);
    })
    .catch(function (erro) {
      console.error(erro);
      console.error("Houve um erro ao obter os votos! Erro: ", erro.sqlMessage);
      res.status(500).json(erro.sqlMessage);
    });
}

function obterVotosAr(req, res) {
  dashboardModel.obterVotosAr()
    .then(function (mensagens) {
      res.json(mensagens);
    })
    .catch(function (erro) {
      console.error(erro);
      console.error("Houve um erro ao obter os votos! Erro: ", erro.sqlMessage);
      res.status(500).json(erro.sqlMessage);
    });
}

function obterVotosTerra(req,res) {
  dashboardModel.obterVotosTerra()
    .then(function (mensagens) {
      res.json(mensagens);
    })
    .catch(function (erro) {
      console.error(erro);
      console.error("Houve um erro ao obter os votos! Erro: ", erro.sqlMessage);
      res.status(500).json(erro.sqlMessage);
    });
}

module.exports = {
    kpiFire,
    kpiEarth,
    kpiAir,
    kpiWater,
    obterVotosFogo,
    obterVotosAgua,
    obterVotosAr,
    obterVotosTerra
  };
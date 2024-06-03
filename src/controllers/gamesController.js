var gamesModel = require("../models/gamesModel");

function agniKai(req, res) {
    var ponto = req.body.pontoServer;
    var id = req.body.idServer
    gamesModel.agniKai(ponto, id)
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

function tophGame(req, res) {
  var ponto = req.body.pontoServer;
  var id = req.body.idServer
  gamesModel.tophGame(ponto, id)
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

function catchGame(req, res) {
  var score = req.body.scoreServer;
  var id = req.body.idServer
  gamesModel.catchGame(score, id)
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

function waterQuiz(req, res) {
  var corretas = req.body.corretasServer;
  var id = req.body.idServer
  gamesModel.waterQuiz(corretas, id)
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
    agniKai,
    tophGame,
    catchGame,
    waterQuiz
}
var rankingDashModel = require("../models/rankingDashModel");

function rankingAgniKai(res) {
    rankingDashModel.rankingAgniKai()
      .then(function (mensagens) {
        res.json(mensagens);
      })
      .catch(function (erro) {
        console.error(erro);
        console.error("Houve um erro ao obter todas as mensagens do fórum! Erro: ", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
      });
}

function rankingCatchGame(res) {
  rankingDashModel.rankingCatchGame()
    .then(function (mensagens) {
      res.json(mensagens);
    })
    .catch(function (erro) {
      console.error(erro);
      console.error("Houve um erro ao obter todas as mensagens do fórum! Erro: ", erro.sqlMessage);
      res.status(500).json(erro.sqlMessage);
    });
}

function rankingQuiz(res) {
  rankingDashModel.rankingQuiz()
    .then(function (mensagens) {
      res.json(mensagens);
    })
    .catch(function (erro) {
      console.error(erro);
      console.error("Houve um erro ao obter todas as mensagens do fórum! Erro: ", erro.sqlMessage);
      res.status(500).json(erro.sqlMessage);
    });
}

function rankingTophGame(res) {
  rankingDashModel.rankingTophGame()
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
    rankingAgniKai,
    rankingCatchGame,
    rankingQuiz,
    rankingTophGame
  };
var express = require("express");
var router = express.Router();

var gamesController = require("../controllers/gamesController");

router.post("/agniKai", function (req, res) {
    // função a ser chamada quando acessar /carros/cadastrar
    gamesController.agniKai(req, res);
});

router.post("/tophGame", function (req, res) {
    // função a ser chamada quando acessar /carros/cadastrar
    gamesController.tophGame(req, res);
});

router.post("/catchGame", function (req, res) {
    // função a ser chamada quando acessar /carros/cadastrar
    gamesController.catchGame(req, res);
});

router.post("/waterQuiz", function (req, res) {
    // função a ser chamada quando acessar /carros/cadastrar
    gamesController.waterQuiz(req, res);
});


module.exports = router;
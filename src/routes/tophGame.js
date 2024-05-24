var express = require("express");
var router = express.Router();

var tophGameController = require("../controllers/tophGameController");

router.post("/pontuar", function (req, res) {
    // função a ser chamada quando acessar /carros/cadastrar
    tophGameController.pontuar(req, res);
});


module.exports = router;
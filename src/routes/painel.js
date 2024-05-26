var express = require("express");
var router = express.Router();

var painelController = require("../controllers/painelController");


router.get("/vitorias", function (req, res) {
    // função a ser chamada quando acessar /carros/listar
    painelController.vitorias(req, res);
});


module.exports = router;
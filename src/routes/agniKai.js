var express = require("express");
var router = express.Router();

var agniKaiController = require("../controllers/agniKaiController");

router.put("/pontuar", function (req, res) {
    // função a ser chamada quando acessar /carros/cadastrar
    agniKaiController.pontuar(req, res);
});


module.exports = router;
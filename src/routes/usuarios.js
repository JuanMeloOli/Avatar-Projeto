var express = require("express");
var router = express.Router();

var usuarioController = require("../controllers/usuarioController");

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.post("/cadastrar", function (req, res) {
    usuarioController.cadastrar(req, res);
})

router.post("/autenticar", function (req, res) {
    usuarioController.autenticar(req, res);
});

router.put("/selectPicture", function (req, res) {
    usuarioController.selectPicture(req, res);
  });

router.put("/selectName", function (req, res) {
    usuarioController.selectName(req, res);
  });

router.put("/selectDobra", function (req, res) {
    usuarioController.selectDobra(req, res);
  });

module.exports = router;
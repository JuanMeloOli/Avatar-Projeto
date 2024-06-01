var express = require("express");
var router = express.Router();

var forumDashController = require("../controllers/forumDashController");


router.post("/enviarMsg", function (req, res) {
    forumDashController.enviarMsg(req, res);
})

router.post("/deletarMsg", function (req, res) {
    forumDashController.deletarMsg(req, res);
})
router.post("/atualizarMsg", function (req, res) {
    forumDashController.atualizarMsg(req, res);
})

router.get("/obterTodasMsgs", function (req, res) {
    forumDashController.obterTodasMsgs(res);
})


module.exports = router;
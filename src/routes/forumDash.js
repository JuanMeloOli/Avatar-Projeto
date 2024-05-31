var express = require("express");
var router = express.Router();

var forumDashController = require("../controllers/forumDashController");


router.post("/enviarMsg", function (req, res) {
    forumDashController.enviarMsg(req, res);
})

router.get("/obterTodasMsgs", function (req, res) {
    forumDashController.obterTodasMsgs(res);
})


module.exports = router;
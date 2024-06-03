var express = require("express");
var router = express.Router();

var rankingDashController = require("../controllers/rankingDashController");


router.get("/rankingAgniKai", function (req, res) {
    rankingDashController.rankingAgniKai(res);
})

router.get("/rankingCatchGame", function (req, res) {
    rankingDashController.rankingCatchGame(res);
})

router.get("/rankingQuiz", function (req, res) {
    rankingDashController.rankingQuiz(res);
})

router.get("/rankingTophGame", function (req, res) {
    rankingDashController.rankingTophGame(res);
})


module.exports = router;
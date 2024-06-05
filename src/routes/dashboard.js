var express = require("express");
var router = express.Router();

var dashboardController = require("../controllers/dashboardController");

router.post("/kpiFire", function (req, res) {
    dashboardController.kpiFire(req, res);
})

router.post("/kpiEarth", function (req, res) {
    dashboardController.kpiEarth(req, res);
})

router.post("/kpiAir", function (req, res) {
    dashboardController.kpiAir(req, res);
})

router.post("/kpiWater", function (req, res) {
    dashboardController.kpiWater(req, res);
})

router.get("/obterVotosFogo", function (req, res) {
    dashboardController.obterVotosFogo(req, res);
})

router.get("/obterVotosAr", function (req, res) {
    dashboardController.obterVotosAr(req, res);
})

router.get("/obterVotosAgua", function (req, res) {
    dashboardController.obterVotosAgua(req, res);
})

router.get("/obterVotosTerra", function (req, res) {
    dashboardController.obterVotosTerra(req, res);
})




module.exports = router;
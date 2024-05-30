var express = require("express");
var router = express.Router();

var dashboardController = require("../controllers/dashboardController");

router.post("/kpiFire", function (req, res) {
    dashboardController.kpiFire(req, res);
})

router.post("/kpiEarth", function (req, res) {
    dashboardController.kpiEarth(req, res);
})


module.exports = router;
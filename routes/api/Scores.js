"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var Score = require("../../models/score");
var router = express_1.Router();
router.get("/test", function (req, res) { return res.json({ msg: "Test worked!" }); });
router.post("/postScore/:password/:name/:score", function (req, res) {
    if (req.params.password == "5uYzUyq5oU6woz54l4KDZQ==") {
        var newScore = new Score({
            name: req.params.name,
            score: req.params.score,
            date: Date.now()
        });
        newScore
            .save()
            .then(function (score) { return res.json(score); })
            .catch(function (err) { return console.log(err); });
        return res.status(200);
    }
    else {
        return res.status(400).json({ err: "Unauthorized to post score!" });
    }
});
router.get("/", function (req, res) {
    Score.find()
        .then(function (scores) { return res.json(scores); })
        .catch(function (err) { return res.status(404).json({ error: "No scores found." }); });
});
router.get("/top/:count", function (req, res) {
    Score.find()
        .sort({ score: -1 })
        .limit(Number(req.params.count))
        .then(function (scores) { return res.json(scores); })
        .catch(function (err) { return res.status(404).json({ error: "No scores found." }); });
});
module.exports = router;
//# sourceMappingURL=Scores.js.map
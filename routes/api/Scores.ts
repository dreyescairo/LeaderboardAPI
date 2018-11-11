import { Router } from "express";

const Score = require("../../models/score");

const router = Router();

router.get("/test", (req, res) => res.json({ msg: "Test worked!" }));

router.post("/postScore", (req, res) => {
  if (req.body.password == "5uYzUyq5oU6woz54l4KDZQ==") {
    const newScore = new Score({
      name: req.body.name,
      score: req.body.score,
      date: Date.now()
    });
    newScore
      .save()
      .then(score => res.json(score))
      .catch(err => console.log(err));

    return res.status(200);
  } else {
    return res.status(400).json({ err: "Unauthorized to post score!" });
  }
});

router.get("/", (req, res) => {
  Score.find()
    .sort({ score: -1 })
    .then(scores => res.json(scores))
    .catch(err => res.status(404).json({ error: "No scores found." }));
});

router.get("/top/:count", (req, res) => {
  Score.find()
    .sort({ score: -1 })
    .limit(Number(req.params.count))
    .then(scores => res.json(scores))
    .catch(err => res.status(404).json({ error: "No scores found." }));
});

module.exports = router;

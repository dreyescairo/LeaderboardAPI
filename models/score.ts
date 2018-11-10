import { Schema, Document, model } from "mongoose";
import { IScore } from "../interfaces/IScore";

interface IScoreModel extends IScore, Document {}

const ScoreSchema: Schema = new Schema({
  name: {
    type: String,
    required: true
  },
  score: {
    type: Number,
    required: true
  },
  date: {
    type: Date,
    default: Date.now()
  }
});

const Score = model<IScoreModel>("Scores", ScoreSchema);
module.exports = Score;

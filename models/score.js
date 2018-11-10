"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var ScoreSchema = new mongoose_1.Schema({
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
var Score = mongoose_1.model("Scores", ScoreSchema);
module.exports = Score;
//# sourceMappingURL=score.js.map
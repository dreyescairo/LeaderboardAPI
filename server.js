"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var mongoose = require("mongoose");
// import Keys from "./config/keys";
var scores = require("./routes/api/Scores");
var app = express();
//*************************DATABASE************************* */
var connString = "";
// const keys = new Keys();
connString = process.env.MongoUri; // || keys.getMongoUri();
mongoose
    .connect(connString, { useNewUrlParser: true })
    .then(function () { return console.log("MongoDB Connected!"); })
    .catch(function (err) { return console.log("****ERROR****" + err); });
app.use("/api/scores", scores);
var port = process.env.PORT || 3000;
app.listen(port, function () {
    console.log("Listening at http://localhost:" + port + "/");
});
//# sourceMappingURL=server.js.map
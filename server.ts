import * as express from "express";
import * as mongoose from "mongoose";
import * as bodyParser from "body-parser";
import Keys from "./config/keys";

const scores: express.Router = require("./routes/api/Scores");

const app: express.Application = express();

//*************************BODY-PARSER************************* */

app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(bodyParser.json());

//*************************DATABASE************************* */

let connString: string = "";
const keys = new Keys();
connString = process.env.MongoUri || keys.getMongoUri();

mongoose
  .connect(
    connString,
    { useNewUrlParser: true }
  )
  .then(() => console.log("MongoDB Connected!"))
  .catch(err => console.log("****ERROR****" + err));

app.use("/api/scores", scores);

const port: any = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/`);
});

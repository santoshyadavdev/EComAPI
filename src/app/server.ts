import * as express from "express";
import { userRoute } from "./routes/userRoutes";
import * as bodyParser from "body-parser";
import * as dotenv from "dotenv";
import { MongoConnect } from "./db/db";

dotenv.load();
var app = express();

// app.get("/", (req, res) => res.send("This is get express API"));

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

app.use("/user", userRoute);

app.listen(3000, () => {
  MongoConnect.connect().then(res => console.log("DB connected"));
  console.log("Server running on port 3000");
});

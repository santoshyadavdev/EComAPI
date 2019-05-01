import * as express from "express";
import {
  userRoute, categoryRoute,
  productRoute, errorLogRoute,
  wishlistRoute, cartRoute,
  orderRoute
} from "./routes/index";
import * as bodyParser from "body-parser";
import * as dotenv from "dotenv";
import { MongoConnect } from "./db/db";
import * as helmet from 'helmet';
import * as compression from 'compression';

dotenv.load();
var app = express();
app.use(helmet());
app.use(compression());

// app.get("/", (req, res) => res.send("This is get express API"));

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, x-access-token");
  res.header("Access-Control-Allow-Methods", "GET,POST,PUT");
  next();
});


app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());


app.use("/user", userRoute);
app.use("/category", categoryRoute);
app.use("/product", productRoute);
app.use("/errorLog", errorLogRoute);
app.use("/wishlist", wishlistRoute);
app.use("/cart", cartRoute);
app.use("/order", orderRoute);

app.listen(process.env.PORT || 3000, () => {
  MongoConnect.connect().then(res => console.log("DB connected"));
  console.log("Server running on port 3000");
});

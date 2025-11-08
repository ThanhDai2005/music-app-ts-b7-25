import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
dotenv.config();
import { connect } from "./config/database";
import clientRoutes from "./routes/client/index.route";

connect();

const app: Express = express();
const port: number | string = process.env.PORT || 3000;

app.set("views", "./views");
app.set("view engine", "pug");

clientRoutes(app);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

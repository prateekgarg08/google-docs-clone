import express, { Request, Response } from "express";
import { connect } from "mongoose";
import * as dotenv from "dotenv";
const cors = require("cors");
require("express-async-errors");
// import cors from "cors";
// const errorHandlerMiddleware = require("./middlewares/error-handler");
import documentRouter from "./routes/document";
import authRouter from "./routes/auth";
// const mongoose = require("mongoose");
const authMW = require("./middlewares/authentication");
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/document", authMW, documentRouter);
// app.use(errorHandlerMiddleware);
const port = process.env.PORT || 5000;
app.get("/", (req: Request, res: Response) => {
  res.send("hello world");
});

app.listen(port, () => console.log(`Server is listening on port ${port}...`));
const start = async () => {
  try {
    await connect(process.env.MONGO_URI as string);
  } catch (error) {
    console.log(error);
  }
};

start();

import express from "express";
import dotenv from "dotenv";
dotenv.config();
import ejs from "ejs";
import cookieParser from "cookie-parser";

import authRouter from "./routes/authRouter.js";
import usersRouter from "./routes/usersRouter.js";

import MongoConnect from "./database/mongoose.js";

const PORT = process.env.PORT || 3000;

//basic express config

const app = express();
app.use(cookieParser());
app.set("view engine", "ejs");
app.set("views", "./views");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/auth", authRouter);
app.use("/users", usersRouter);

MongoConnect()
  .then(() => {
    app.listen(PORT, () => console.log(`We are Online port:${PORT}`));
  })
  .catch(() => console.log("Mongo did not connect"));

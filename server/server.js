import express from "express";

// import dotenv from "dotenv";
//dotenv configuration is in the supabaseClient for whatever reason

import ejs from "ejs";
import cookieParser from "cookie-parser";
import cors from "cors";

import authRouter from "./routes/authRouter.js";
import usersRouter from "./routes/usersRouter.js";
import calenderRouter from "./routes/calenderRouter.js";
import taskRouter from "./routes/taskRouter.js";
import MongoConnect from "./database/mongoose.js";
import debug from "debug";

const log = debug("app:server");
log.enabled = true; // enable logging

const PORT = process.env.PORT || 3000;

//basic express config

const app = express();
app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "http://localhost:4173",
      process.env.URL_ORIGIN,
    ], // your frontend
    credentials: true, // allow cookies/auth headers
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);
app.use(cookieParser());
app.set("view engine", "ejs");
app.set("views", "./views");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/auth", authRouter);
// app.use("/users", usersRouter);
// app.use("/calender", calenderRouter);
// app.use("/tasks", taskRouter);

app.get("/test", (req, res) => {
  res.send(process.env.PORT);
});

app.listen(PORT, () => log(`http://localhost:${PORT}`));

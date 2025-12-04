import express from "express";

import postTask from "../controllers/tasks/postTask.js";
import getTask from "../controllers/tasks/getTask.js";
import deleteTask from "../controllers/tasks/deleteTask.js";
import editTask from "../controllers/tasks/editTask.js";
import authMiddleware from "../middleware/authMiddeware.js";

const router = express.Router();

router.use(authMiddleware);

router
  .get("/all", getTask)
  .post("/add", postTask)
  .delete("/delete", deleteTask)
  .put("/edit", editTask);

export default router;

import express from "express";
import postTask from "../controllers/tasks/postTask.js";
import getTask from "../controllers/tasks/getTask.js";
import authMiddleware from "../middleware/authMiddeware.js";

const router = express.Router();

router.use(authMiddleware);

router.get("/all", getTask).post("/add", postTask);

export default router;

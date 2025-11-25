import express from "express";

import authMiddleware from "../middleware/authMiddeware.js";

import getCalenderData from "../controllers/calender/getCalenderData.js";

const router = express.Router();

// router.use(authMiddleware);

router.get("/data", getCalenderData);

export default router;

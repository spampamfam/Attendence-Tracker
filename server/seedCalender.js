import mongoose from "mongoose";
import dotenv from "dotenv";
import putCalendarData from "./controllers/calender/putCalenderData.js";

dotenv.config();

const DATABASE_URL = process.env.DATABASE_URL;

mongoose
  .connect(DATABASE_URL)
  .then(async () => {
    console.log("Connected to MongoDB");
    await putCalendarData(2025, 2026);
    mongoose.connection.close();
  })
  .catch((err) => console.error("MongoDB connection error:", err));

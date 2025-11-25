import mongoose from "mongoose";

const calenderSchema = new mongoose.Schema({
  date: { type: String, required: true, unique: true }, // "2025-10-31"
  day: { type: String, required: true },
  dayOfWeek: { type: Number, required: true },
  dayNumber: { type: Number, required: true },
  month: { type: String, required: true },
  monthNumber: { type: Number, required: true },
  year: { type: Number, required: true },
  week: { type: Number, required: true },
});

const CalenderData = mongoose.model("CalenderData", calenderSchema);

export default CalenderData;

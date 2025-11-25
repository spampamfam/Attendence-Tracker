import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
  title: { type: String, default: null },
  prof: { type: String, default: null },
  day: { type: Date, default: null },
  period: { type: Number, default: 1.5 },
  startPeriod: { type: Number, default: null },
  endPeriod: { type: Number, default: null },
  attend: { type: Number, default: null },
  abscent: { type: Number, default: null },
  profAbscent: { type: Number, default: null },
  total: { type: Number, default: null },
});

const userSchema = new mongoose.Schema({
  name: { type: String },
  email: { type: String, unique: true },
  password: { type: String },
  tasks: { type: [taskSchema], default: [{}] },
  created_at: { type: Date, default: Date.now },
});

const User = mongoose.model("User", userSchema);

export default User;

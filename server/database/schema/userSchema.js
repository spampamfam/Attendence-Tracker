import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
  title: { type: String },
  prof: { type: String },
  start: { type: Date },
  end: { type: Date },
  attend: { type: Number, default: null },
  abscent: { type: Number, default: null },
  profAbscent: { type: Number, default: null },
  total: { type: Number, default: null },
});

const userSchema = new mongoose.Schema({
  name: { type: String },
  email: { type: String },
  password: { type: String },
  tasks: [taskSchema],
  created_at: { type: Date, default: Date.now },
});

const User = mongoose.model("User", userSchema);

export default User;

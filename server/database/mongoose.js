import mongoose from "mongoose";

export default function MongoConnect() {
  return mongoose
    .connect(process.env.DATABASE_URL + "app")
    .then(() => console.log("MongoDB is connected successfully"))
    .catch((error) => console.log("err" + error));
}

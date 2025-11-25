import mongoose from "mongoose";

export default function MongoConnect() {
  return mongoose
    .connect(process.env.DATABASE_URL)
    .then(() =>
      console.log(`We are connected to : ${mongoose.connection.name}`)
    )
    .catch((error) => console.log("err" + error));
}

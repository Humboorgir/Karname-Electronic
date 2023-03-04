import mongoose from "mongoose";
export default function () {
  if (mongoose.connection.readyState >= 1) {
    // if it is not ready yet return
    return;
  }
  mongoose
    .connect(`${process.env.MONGODB_URI}`, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("Successfully connected to mongodb!");
    });
}

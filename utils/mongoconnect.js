import mongoose from "mongoose";
export default function () {
  if (mongoose.connection.readyState >= 1) {
    // if it is not ready yet return
    return;
  }
  mongoose
    .connect("mongodb://127.0.0.1/Data", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("Successfully connected to mongodb!");
    });
}

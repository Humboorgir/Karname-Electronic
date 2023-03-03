import mongoose from "mongoose";
export default function () {
  if (mongoose.connection.readyState >= 1) {
    // if it is not ready yet return
    return;
  }
  mongoose
    .connect(
      "mongodb+srv://karnameElectronic:k1fV6dbvDBU9sJJ8@karname-electronic.uwr8wdj.mongodb.net/Data",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    )
    .then(() => {
      console.log("Successfully connected to mongodb!");
    });
}

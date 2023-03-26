import mongoose from "mongoose";
const student = new mongoose.Schema({
  name: String,
  username: String,
  password: String,
  pfp: String,
});
export default mongoose.models.students || mongoose.model("students", student);

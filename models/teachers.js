import mongoose from "mongoose";
const teacher = new mongoose.Schema({
  name: String,
  username: String,
  password: String,
  pfp: String,
  role: String,
});
export default mongoose.models.teachers || mongoose.model("teachers", teacher);

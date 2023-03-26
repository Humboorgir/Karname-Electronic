import mongoose from "mongoose";
const teacher = new mongoose.Schema({
  id: String,
  name: String,
  username: String,
  password: String,
  pfp: String,
});
export default mongoose.models.teachers || mongoose.model("teachers", teacher);

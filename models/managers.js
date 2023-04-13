import mongoose from "mongoose";
const manager = new mongoose.Schema({
  name: String,
  username: String,
  password: String,
  pfp: String,
  role: String,
});
export default mongoose.models.managers || mongoose.model("managers", manager);

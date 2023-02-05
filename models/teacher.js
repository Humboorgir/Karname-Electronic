import mongoose from "mongoose";

const teacherSchema = new mongoose.Schema({
  username: reqString,
  password: reqString,
});
const reqString = {
  type: String,
  required: true,
};
const teacherModel = new mongoose.model("teachers", teacherSchema);

export default teacherModel;

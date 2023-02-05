import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
  username: reqString,
  password: reqString,
});
const reqString = {
  type: String,
  required: true,
};
const studentModel = new mongoose.model("students", studentSchema);

export default studentModel;

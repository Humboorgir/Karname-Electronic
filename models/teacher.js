import mongoose from "mongoose";

const teacherSchema = new mongoose.Schema({
  name: reqString,
  lastName: reqString,
  username: reqString,
  password: reqString,
});
const reqString = {
  type: String,
  required: true,
};
const teacherModel = new mongoose.model("teachers", teacherSchema);

export default teacherModel;

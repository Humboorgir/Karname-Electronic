// import mongoose from "mongoose";
// const reqString = {
//   type: String,
//   required: true,
// };
// const studentSchema = new mongoose.Schema({
//   name: reqString,
//   username: reqString,
//   password: reqString,
//   pfp: reqString,
// });
// const studentModel = new mongoose.model("students", studentSchema);

// export default studentModel;
import mongoose from "mongoose";
const student = new mongoose.Schema({
  name: String,
  username: String,
  password: String,
  pfp: String,
});
export default mongoose.models.students || mongoose.model("students", student);

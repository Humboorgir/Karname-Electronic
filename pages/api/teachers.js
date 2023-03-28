import teacherModel from "@/models/teachers";
import mongoConnect from "@/utils/mongoconnect";
export default async function handler(req, res) {
  if (req.method !== "GET") return res.send("only post requests are allowed");
  mongoConnect();
  let data = await teacherModel.find({});
  res.send(data);
}

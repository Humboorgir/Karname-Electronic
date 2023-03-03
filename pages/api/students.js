import studentModel from "@/models/students";
import mongoose from "mongoose";
import mongoConnect from "@/utils/mongoconnect";
export default async function handler(req, res) {
  console.log("test");
  if (req.method !== "POST") return;
  // connect to mongodb
  await mongoConnect();
  let data = await studentModel.find({});
  console.log(data);
  res.send(data);
}

import studentModel from "@/models/students";
import mongoose from "mongoose";
import mongoConnect from "@/utils/mongoconnect";
export default async function handler(req, res) {
  if (req.method !== "POST") return res.send("only post requests are allowed");
  mongoConnect();
  let data = await studentModel.find({});
  res.send(data);
}

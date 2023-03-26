import studentModel from "@/models/students";
import mongoose from "mongoose";
import mongoConnect from "@/utils/mongoconnect";
export default async function handler(req, res) {
  if (req.method !== "GET") return res.send("only GET requests are allowed");
  mongoConnect();
  let data = await studentModel.find({});
  res.send(data);
}

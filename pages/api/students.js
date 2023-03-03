import studentModel from "@/models/students";
import mongoose from "mongoose";
import mongoConnect from "@/utils/mongoconnect";
export default async function handler(req, res) {
  console.log("test");
  if (req.method !== "POST") return res.send("only post requests are allowed");
  let data = await studentModel.find({});

  console.log(data);
  res.send(data);
}

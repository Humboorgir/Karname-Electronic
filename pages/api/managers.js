import managerModel from "@/models/managers";
import mongoConnect from "@/utils/mongoconnect";
export default async function handler(req, res) {
  if (req.method !== "GET") return res.send("only get requests are allowed");
  mongoConnect();
  let data = await managerModel.find({});
  res.send(data);
}

import managerModel from "@/models/managers";
import mongoConnect from "@/utils/mongoconnect";
export default async function handler(req, res) {
  if (req.method !== "POST") return;
  const id = req.body;
  // connect to mongodb
  await mongoConnect();
  try {
    await managerModel.deleteOne({ _id: id });
  } catch (err) {
    console.log(err);
  }
  let response = {
    ok: true,
    text: `نماینده با موفقیت حذف شد`,
  };
  let Response = await JSON.stringify(response);
  res.status(200).send(Response);
}

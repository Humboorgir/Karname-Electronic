import managerModel from "@/models/managers";
import mongoConnect from "@/utils/mongoconnect";
export default async function handler(req, res) {
  if (req.method !== "POST") return;
  const { oldId, name, username } = req.body;
  // connect to mongodb
  await mongoConnect();
  try {
    await managerModel.updateOne({ _id: oldId }, { name, username });
  } catch (err) {
    console.log(err);
  }
  let response = {
    ok: true,
    text: `اطلاعات نماینده با موفقیت پردازش شد`,
  };
  let Response = await JSON.stringify(response);
  res.status(200).send(Response);
}
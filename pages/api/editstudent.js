import studentModel from "@/models/students";
import mongoConnect from "@/utils/mongoconnect";
export default async function handler(req, res) {
  if (req.method !== "POST") return;
  const { oldName, name, username } = req.body;
  // connect to mongodb
  await mongoConnect();
  try {
    await studentModel.updateOne({ name: oldName }, { name, username });
  } catch (err) {
    console.log(err);
  }
  let response = {
    ok: true,
    text: `اطلاعات دانش آموز با موفقیت پردازش شد`,
  };
  let Response = await JSON.stringify(response);
  res.status(200).send(Response);
}

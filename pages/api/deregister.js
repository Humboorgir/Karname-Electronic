import studentModel from "@/models/students";
import mongoConnect from "@/utils/mongoconnect";
export default async function handler(req, res) {
  if (req.method !== "POST") return;
  const name = req.body;
  // connect to mongodb
  await mongoConnect();
  try {
    await studentModel.deleteOne({ name: name });
  } catch (err) {
    console.log(err);
  }
  let response = {
    ok: true,
    text: `دانش آموز با موفقیت حذف شد `,
  };
  let Response = await JSON.stringify(response);
  res.status(200).send(Response);
}

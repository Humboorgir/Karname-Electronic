import teacherModel from "@/models/teachers";
import mongoConnect from "@/utils/mongoconnect";
export default async function handler(req, res) {
  const { name, username, pfp } = req.body;
  if (req.method !== "POST") return;
  if (!name || !username)
    return res.send({
      ok: false,
      text: "لطفا نام و کد ملی دانش آموز را وارد کنید",
    });
  // connect to mongodb
  await mongoConnect();
  let data = new teacherModel({
    name,
    username,
    password: username,
    pfp,
  });
  await data.save();
  let response = {
    ok: true,
    text: `دبیر ثبت شد`,
  };
  let Response = await JSON.stringify(response);
  res.status(200).send(Response);
}

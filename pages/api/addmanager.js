import managerModel from "@/models/managers";
import mongoConnect from "@/utils/mongoconnect";
export default async function handler(req, res) {
  const { name, username, pfp } = req.body;
  if (req.method !== "POST") return;
  if (!name || !username)
    return res.send({
      ok: false,
      text: "لطفا نام و کد ملی نماینده را وارد کنید",
    });
  // connect to mongodb
  await mongoConnect();
  let data = new managerModel({
    name,
    username,
    password: username,
    pfp,
    role: "admin",
  });
  await data.save();
  let response = {
    ok: true,
    text: `نماینده ثبت شد`,
  };
  let Response = await JSON.stringify(response);
  res.status(200).send(Response);
}

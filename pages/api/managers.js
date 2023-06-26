import prisma from "@/lib/prisma";

export default async function handler(req, res) {
  console.log("A request!");
  const { username, name } = req.body;
  let { image } = req.body;
  image = String(image);
  // handling get requests
  if (req.method === "GET") {
    let data = await prisma.manager.findMany({
      select: {
        id: true,
        name: true,
        image: true,
      },
    });
    res.status(200).json(data);
  }

  // handling post requests
  if (req.method === "POST") {
    await prisma.manager.create({
      data: {
        name,
        username,
        password: username,
        image,
      },
    });
    res.status(200).send("OK");
  }

  if (req.method === "DELETE") {
    console.log("delete request!");
    await prisma.manager.delete({
      where: {
        username,
      },
    });
    return res.status(200).send("OK");
  }
}

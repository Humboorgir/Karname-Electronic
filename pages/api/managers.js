import prisma from "@/lib/prisma";

export default async function handler(req, res) {
  const { username, name, image } = req.body;
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
}

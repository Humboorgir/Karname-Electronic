import prisma from "@/lib/prisma";

export default async function handler(req, res) {
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
    if (!req.body) return;
    const { username, name } = req.body;
    let image = String(req.body.image);

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
    if (!req.body) return;
    const { id } = req.body;

    await prisma.manager.delete({
      where: {
        id,
      },
    });
    return res.status(200).send("OK");
  }
}

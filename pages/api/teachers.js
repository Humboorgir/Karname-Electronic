import prisma from "@/lib/prisma";

export default async function handler(req, res) {
  // handling get requests
  if (req.method === "GET") {
    let data = await prisma.teacher.findMany({
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

    const data = await prisma.teacher.create({
      data: {
        name,
        username,
        password: username,
        image,
      },
    });
    res.status(200).json({ name: data.name, id: data.id, image: data.image });
  }

  if (req.method === "DELETE") {
    if (!req.body) return;
    const { id } = req.body;

    await prisma.teacher.delete({
      where: {
        id,
      },
    });
    return res.status(200).send("OK");
  }

  if (req.method === "PUT") {
    if (!req.body) return;
    const { username, name, id } = req.body;
    await prisma.teacher.update({
      where: {
        id,
      },
      data: {
        username,
        name,
      },
    });

    return res.status(200).send("OK");
  }
}

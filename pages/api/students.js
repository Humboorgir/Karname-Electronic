import { getToken } from "next-auth/jwt";
import prisma from "@/lib/prisma";

export default async function handler(req, res) {
  const token = await getToken({ req });
  if (!token) return res.status(401).json({ data: "Unauthorized" });

  // handling get requests
  if (req.method === "GET") {
    if (token.position != "teacher" && token.position != "admin")
      return res.status(403).json({ data: "Forbidden" });

    let data = await prisma.student.findMany({
      select: {
        id: true,
        name: true,
        image: true,
      },
    });
    res.status(200).json(data);
  }

  if (token.position != "admin") return res.status(403).json({ data: "Forbidden" });

  // handling post requests
  if (req.method === "POST") {
    if (!req.body) return;
    const { username, name } = req.body;
    let image = String(req.body.image);

    const data = await prisma.student.create({
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

    await prisma.student.delete({
      where: {
        id,
      },
    });
    return res.status(200).send("OK");
  }

  if (req.method === "PUT") {
    if (!req.body) return;
    const { username, name, id } = req.body;
    await prisma.student.update({
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

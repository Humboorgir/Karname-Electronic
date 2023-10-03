import { getToken } from "next-auth/jwt";
import prisma from "@/lib/prisma";

export default async function handler(req, res) {
  const token = await getToken({ req });
  if (!token) return res.status(401).json({ data: "Unauthorized" });
  // handling get requests
  if (req.method === "GET") {
    let { id } = req.query;
    id = Number(id);

    if (!id) return res.status(400).send({ data: "Bad request" });

    // Students can only request their own data
    // other positions (teacher & admin) can access all students' data
    if (token.position == "student" && token.id != id) return res.status(403).send({ data: "Forbidden" });

    let data = await prisma.student.findUnique({
      where: {
        id,
      },
      include: {
        reports: true,
      },
    });

    if (!data) return res.status(404).send({ data: "Not found" });
    res.status(200).json(data);
  }
  // handling post requests
  if (req.method === "POST") {
    if (token.position != "teacher" || token.position != "admin")
      return res.status(403).json({ data: "Forbidden" });

    let { id } = req.query;
    id = Number(id);

    if (!id) return res.status(400).json({ data: "Bad request" });

    let data = req.body;

    let { reports } = await prisma.student.update({
      where: {
        id,
      },
      data: {
        reports: {
          create: {
            ...data,
          },
        },
      },
      include: {
        reports: true,
      },
    });

    res.status(200).json({
      data: {
        ...reports[reports.length - 1],
      },
    });
  }

  // handling put requests
  if (req.method === "PUT") {
    let { id } = req.query;
    id = Number(id);
    let { newPass, previousPass } = req.body;

    if (!id || !newPass || !previousPass) return res.status(400).json({ data: "Bad request" });

    if (token.id != id) return res.status(403).json({ data: "Forbidden" });

    let student = await prisma.student.findFirst({
      where: {
        id,
      },
    });

    if (student.password !== previousPass) return res.status(403).json({ data: "Forbidden" });
    await prisma.student.update({
      where: {
        id,
      },
      data: {
        password: newPass,
      },
    });

    res.status(200).json({
      data: "OK",
    });
  }
}

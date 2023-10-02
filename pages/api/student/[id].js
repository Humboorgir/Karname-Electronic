import prisma from "@/lib/prisma";

export default async function handler(req, res) {
  // handling get requests
  if (req.method === "GET") {
    let { id } = req.query;
    id = Number(id);

    if (!id) return res.status(400).send({ data: "Bad request" });

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

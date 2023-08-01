import prisma from "@/lib/prisma";

export default async function handler(req, res) {
  if (req.method === "GET") {
    let { id } = req.query;
    id = Number(id);

    if (!id) return res.status(400).send({ data: "Bad request" });

    let data = await prisma.student.findUnique({
      where: {
        id,
      },
    });
    if (!data) return res.status(404).send({ data: "Not found" });
    res.status(200).json(data);
  }

  if (req.method === "POST") {
    let { id } = req.query;
    id = Number(id);

    if (!id) return res.status(400).json({ data: "Bad request" });

    let data = req.body;
    data = await JSON.parse(data);

    let createdReport = await prisma.student.update({
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
    });

    res.status(200).json({
      data: {
        ...createdReport,
      },
    });
  }
}

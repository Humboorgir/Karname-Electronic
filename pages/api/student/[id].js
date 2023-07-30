import prisma from "@/lib/prisma";

export default async function handler(req, res) {
  if (req.method === "GET") {
    let { id } = req.query;
    id = Number(id);

    if (!id) return res.status(400).send("Bad request");

    let data = await prisma.student.findUnique({
      where: {
        id,
      },
    });
    if (!data) return res.status(404).send("Not found");
    res.status(200).json(data);
  }
}

import prisma from "@/lib/prisma";

export default async function handler(req, res) {
  let data;

  if (req.method === "GET") {
    data = await prisma.manager.findMany();
  }
  if (req.method === "POST") {
    data = await prisma.manager.create({});
  }
  res.json(data);
}

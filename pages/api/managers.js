import prisma from "@/lib/prisma";

export default async function handler(req, res) {
  if (req.method !== "GET") return;
  let data = await prisma.manager.findMany();

  res.json(data);
}

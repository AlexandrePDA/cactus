import prisma from "@/lib/prisma";
import { NextApiRequest, NextApiResponse } from "next";

export default async function POST(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    const { email } = req.body;
    try {
      await prisma.takeMail.create({
        data: {
          email,
        },
      });
      res.status(200).json({ message: "Email enregistré avec succès !" });
    } catch (error) {
      console.error(error);
    }
  }
}

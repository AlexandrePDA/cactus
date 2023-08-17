import prisma from "@/lib/prisma";
import { NextApiRequest, NextApiResponse } from "next";

export default async function POST(req: NextApiRequest, res: NextApiResponse) {
  console.log(req.body);

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
      console.log("dans le catch");
      console.error(error);
    }
  }
}

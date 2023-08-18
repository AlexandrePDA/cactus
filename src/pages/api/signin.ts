import prisma from "@/lib/prisma";
import * as bcrypt from "bcrypt";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    if (req.method === "POST") {
      const body = await req.body;
      const user = await prisma.user.create({
        data: {
          name: body.name,
          email: body.email,
          password: await bcrypt.hash(body.password, 10),
        },
      });

      const { password, ...result } = user;
      console.log(result);
      return res.status(200).json({ etat: "user crée avec succes" });
    }
  } catch (error) {
    return res.status(400).json({ etat: "email utilisé ou pb réseau" });
  }
}

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
      let user = await prisma.user.findUnique({
        where: {
          email: body.email,
        },
      });

      {
        /* compare si user existe et si le password qu'on reçoit du front est = au password de l'user */
      }
      if (user && (await bcrypt.compare(body.password, user.password))) {
        const { password, ...result } = user;

        {/* id session
          -> genere un id unique à l'inscription via BDD
          -> stocké dans cookie
      */}       
        return res.status(200).json({ user: result });
      }

      return res
        .status(400)
        .json({ etat: "mauvais email/password ou pb réseau" });
    }
  } catch (error) {
    return res
      .status(400)
      .json({ etat: "mauvais email/password ou pb réseau" });
  }
}

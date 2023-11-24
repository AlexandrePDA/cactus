import prisma from "@/lib/prisma";
import { NextApiRequest, NextApiResponse } from "next";
import { getServerSession } from "next-auth";
import { authConfig } from "@/pages/api/auth/[...nextauth]";

// OK
export const dynamic = "force-dynamic";

export default async function POST(req: NextApiRequest, res: NextApiResponse) {
  const session = await getServerSession(req, res, authConfig);
  console.log("session", session);
  console.log(req.body.values);

  const { search, skill1, skill2, skill3 } = req.body.values;
  console.log(search);

  console.log(session?.user.id);

  try {
    const response = await prisma.user.update({
      where: {
        id: session?.user.id,
      },
      data: {
        askCompetence: search,
        skill1: skill1,
        skill2: skill2,
        skill3: skill3,
      },
    });
    res
      .status(200)
      .json({ message: "modifications enregistrées avec succès !" });
  } catch (error) {
    console.error("Erreur lors de la mise à jour de l'utilisateur", error);
    res.status(500).json({ message: "error" });
  }
}

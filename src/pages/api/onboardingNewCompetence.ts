import prisma from "@/lib/prisma";
import { NextApiRequest, NextApiResponse } from "next";
import { getServerSession } from "next-auth";
import { authConfig } from "@/pages/api/auth/[...nextauth]";

// OK

export default async function POST(req: NextApiRequest, res: NextApiResponse) {
  const session = await getServerSession(req, res, authConfig);

  const { search, skill1, skill2, skill3 } = req.body.values;

  if (search === "" && skill1 === "") {
    return res.status(400).json({ message: "Veuillez renseigner les champs" });
  }

  try {
    const response = await prisma.user.update({
      where: {
        id: session?.user.id,
      },
      data: {
        askCompetence: search.toLowerCase(),
        skill1: skill1.toLowerCase(),
        skill2: skill2.toLowerCase(),
        skill3: skill3.toLowerCase(),
      },
    });
    res.status(200).json({ message: "profil crée avec succès !" });
  } catch (error) {
    console.error("Erreur lors de la création de l'utilisateur", error);
    res.status(500).json({ message: "error" });
  }
}

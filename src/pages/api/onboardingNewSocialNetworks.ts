import prisma from "@/lib/prisma";
import { NextApiRequest, NextApiResponse } from "next";
import { getServerSession } from "next-auth";
import { authConfig } from "@/pages/api/auth/[...nextauth]";

// OK

export default async function POST(req: NextApiRequest, res: NextApiResponse) {
  const session = await getServerSession(req, res, authConfig);
  console.log("session", session);
  console.log(req.body.values);

  const { website, linkedin, instagram, github } = req.body.values;

  console.log(session?.user.id);

  try {
    const response = await prisma.user.update({
      where: {
        id: session?.user.id,
      },
      data: {
        ownSite: website.toLowerCase(),
        linkedin: linkedin.toLowerCase(),
        instagram: instagram.toLowerCase(),
        github: github.toLowerCase(),
      },
    });
    res.status(200).json({ message: "profil crée avec succès !" });
  } catch (error) {
    console.error("Erreur lors de la création de l'utilisateur", error);
    res.status(500).json({ message: "error" });
  }
}

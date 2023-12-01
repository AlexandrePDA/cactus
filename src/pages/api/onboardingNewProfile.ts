import prisma from "@/lib/prisma";
import { NextApiRequest, NextApiResponse } from "next";
import { getServerSession } from "next-auth";
import { authConfig } from "@/pages/api/auth/[...nextauth]";

// OK

export default async function POST(req: NextApiRequest, res: NextApiResponse) {
  const session = await getServerSession(req, res, authConfig);
  console.log("session", session);
  console.log(req.body.values);

  const {
    username,
    bio,
    search,
    skill1,
    skill2,
    skill3,
    website,
    linkedin,
    instagram,
    github,
  } = req.body.values;
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
        name: username,
        bio: bio,
        ownSite: website,
        linkedin: linkedin,
        instagram: instagram,
        github: github,
      },
    });
    res.status(200).json({ message: "profil crée avec succès !" });
  } catch (error) {
    console.error("Erreur lors de la création de l'utilisateur", error);
    res.status(500).json({ message: "error" });
  }
}

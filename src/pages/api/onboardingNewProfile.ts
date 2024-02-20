import prisma from "@/lib/prisma";
import { NextApiRequest, NextApiResponse } from "next";
import { getServerSession } from "next-auth";
import { authConfig } from "@/pages/api/auth/[...nextauth]";

// OK

export default async function POST(req: NextApiRequest, res: NextApiResponse) {
  const session = await getServerSession(req, res, authConfig);

  const { username, bio, projet } = req.body.values;

  if (username === "" && bio === "" && projet === "") {
    return res.status(400).json({ message: "Veuillez renseigner les champs" });
  }

  try {
    const response = await prisma.user.update({
      where: {
        id: session?.user.id,
      },
      data: {
        name: username,
        bio: bio,
        projet: projet,
      },
    });

    res.status(200).json({ message: "profil crée avec succès !" });
  } catch (error) {
    res.status(500).json({ message: "error" });
  }
}

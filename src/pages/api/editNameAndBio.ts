import prisma from "@/lib/prisma";
import { NextApiRequest, NextApiResponse } from "next";
import { Session, getServerSession } from "next-auth";
import { authConfig } from "@/pages/api/auth/[...nextauth]";

// OK

export default async function POST(req: NextApiRequest, res: NextApiResponse) {
  const { username, bio } = req.body.values;
  const session = await getServerSession(req, res, authConfig);

  try {
    const response = await prisma.user.update({
      where: {
        id: session?.user.id,
      },
      data: {
        name: username,
        bio: bio,
      },
    });
    res
      .status(200)
      .json({ message: "modifications enregistrées avec succès !" });
  } catch (error) {
    res.status(500).json({ message: "erreur" });
  }
}

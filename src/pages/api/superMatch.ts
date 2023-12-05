import { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { authConfig } from "./auth/[...nextauth]";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const session = await getServerSession(req, res, authConfig);
  if (!session) return res.status(401).json({ error: "Unauthorized" });

  const { skill1, skill2, skill3, askCompetence } = session.user;
  try {
    const superMatches = await prisma.user.findMany({
      where: {
        OR: [
          { skill1: askCompetence.toLowerCase() },
          { skill2: askCompetence.toLowerCase() },
          { skill3: askCompetence.toLowerCase() },
        ],
        askCompetence: {
          in: [
            skill1.toLowerCase(),
            skill2.toLowerCase(),
            skill3.toLowerCase(),
          ],
        },
      },
    });

    res.status(200).json(superMatches);
  } catch (error) {
    console.error("Erreur lors de la récupération des SuperMatches:", error);
    res.status(500).json({ error: "Erreur serveur" });
  }
}

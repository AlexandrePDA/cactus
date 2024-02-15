import { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/lib/prisma";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "DELETE") {
    const { userId } = req.body;

    try {
      await prisma.user.delete({
        where: {
          id: userId,
        },
      });

      res
        .status(200)
        .json({ message: "Votre compte a été supprimé avec succès." });
    } catch (error) {
      console.error(error);
      res.status(500).json({
        error:
          "Une erreur s'est produite lors de la suppression de votre compte.",
      });
    }
  } else {
    res.status(405).json({
      error: "Méthode non autorisée. Utilisez DELETE pour supprimer un compte.",
    });
  }
}

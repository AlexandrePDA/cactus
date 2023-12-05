import prisma from "@/lib/prisma";
import { NextApiRequest, NextApiResponse } from "next";
import { getServerSession } from "next-auth";
import { authConfig } from "@/pages/api/auth/[...nextauth]";

// OK

export default async function POST(req: NextApiRequest, res: NextApiResponse) {
  const session = await getServerSession(req, res, authConfig);
  console.log("session", session);
  console.log(req.body.values);
  const { website, linkedin, github, instagram } = req.body.values;

  if (website === "" && linkedin === "" && github === "" && instagram === "") {
    return res
      .status(400)
      .json({ message: "Veuillez renseigner au moins un champ" });
  }

  try {
    if (website.trim() !== "") {
      await prisma.user.update({
        where: {
          id: session?.user.id,
        },
        data: {
          ownSite: website,
        },
      });
    }
    if (linkedin.trim() !== "") {
      await prisma.user.update({
        where: {
          id: session?.user.id,
        },
        data: {
          linkedin: linkedin,
        },
      });
    }
    if (instagram.trim() !== "") {
      await prisma.user.update({
        where: {
          id: session?.user.id,
        },
        data: {
          instagram: instagram,
        },
      });
    }
    if (github.trim() !== "") {
      await prisma.user.update({
        where: {
          id: session?.user.id,
        },
        data: {
          github: github,
        },
      });
    }
    res
      .status(200)
      .json({ message: "modifications enregistrées avec succès !" });
  } catch (error) {
    console.error("Erreur lors de la mise à jour de l'utilisateur", error);
    res.status(500).json({ message: "error" });
  }
}

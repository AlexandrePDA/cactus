import prisma from "@/lib/prisma";
import { NextApiRequest, NextApiResponse } from "next";
import { getServerSession } from "next-auth";
import { authConfig } from "@/pages/api/auth/[...nextauth]";

// OK

export default async function POST(req: NextApiRequest, res: NextApiResponse) {
  const session = await getServerSession(req, res, authConfig);

  const { search, skill1, skill2, skill3 } = req.body.values;
  if (search === "" && skill1 === "" && skill2 === "" && skill3 === "") {
    return res.status(400).json({ message: "Veuillez renseigner les champs" });
  }

  try {
    if (search.trim() !== "") {
      await prisma.user.update({
        where: {
          id: session?.user.id,
        },
        data: {
          askCompetence: search,
        },
      });
    }
    if (skill1.trim() !== "") {
      await prisma.user.update({
        where: {
          id: session?.user.id,
        },
        data: {
          skill1: skill1,
        },
      });
    }

    if (skill2.trim() !== "") {
      await prisma.user.update({
        where: {
          id: session?.user.id,
        },
        data: {
          skill2: skill2,
        },
      });
    }

    if (skill3.trim() !== "") {
      await prisma.user.update({
        where: {
          id: session?.user.id,
        },
        data: {
          skill3: skill3,
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

import { NextApiRequest, NextApiResponse } from "next";
import { getServerSession } from "next-auth";
import { authConfig } from "./auth/[...nextauth]";
import { url } from "inspector";
import prisma from "@/lib/prisma";

export default async function POST(req: NextApiRequest, res: NextApiResponse) {
  const urlPhoto = req.body;
  console.log(urlPhoto);
  const session = await getServerSession(req, res, authConfig);
  console.log(session);
  if (urlPhoto === "") {
    return res.status(400).json({ message: "Pas de photo" });
  }

  // Obtenez l'extension du fichier
  const fileExtension = urlPhoto.split(".").pop().toLowerCase();
  console.log(fileExtension);
  // Liste des extensions autorisées
  const allowedExtensions = ["jpg", "jpeg", "png"];

  // Vérifiez si l'extension est autorisée
  if (!allowedExtensions.includes(fileExtension)) {
    return res
      .status(400)
      .json({ message: "Le fichier n'est pas une image valide." });
  }
  console.log(session?.user.id);
  try {
    await prisma.user.update({
      where: {
        id: session?.user.id,
      },
      data: {
        image: urlPhoto,
      },
    });
    res
      .status(200)
      .json({ message: "modifications enregistrées avec succès !" });
  } catch (error) {
    return res.status(400).json({ message: "Erreur" });
  }
}

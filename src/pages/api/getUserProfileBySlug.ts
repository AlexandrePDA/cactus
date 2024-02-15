import prisma from "@/lib/prisma";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { slug } = req.body;
  console.log(slug);

  try {
    const userProfile = await prisma.user.findUnique({
      where: {
        slug: slug,
      },
    });

    if (userProfile) {
      res.status(200).json(userProfile);
    } else {
      res.status(404).json({ error: "User not found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
}

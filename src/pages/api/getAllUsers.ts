import prisma from "@/lib/prisma";
import { NextApiRequest, NextApiResponse } from "next";

export default async function getAllUsers(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const users = await prisma.user.findMany({
      select: {
        id: true,
        name: true,
        email: true,
        askCompetence: true,
        skill1: true,
        skill2: true,
        skill3: true,
      },
    });

    res.status(200).json(users);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Error retrieving users" });
  }
}

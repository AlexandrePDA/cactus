import prisma from "@/lib/prisma";
import { NextApiRequest, NextApiResponse } from "next";

export default async function getAllUsers(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const { selectedCategory } = req.query;
    const filter: string = selectedCategory as string;
    let users;

    if (filter) {
      users = await prisma.user.findMany({
        where: {
          OR: [
            {
              skill1: filter.toLowerCase(),
            },
            {
              skill2: filter.toLowerCase(),
            },
            {
              skill3: filter.toLowerCase(),
            },
          ],
        },
        orderBy: {
          createdAt: "desc",
        },
      });
    } else {
      users = await prisma.user.findMany({
        where: {
          skill1: {
            not: null,
          },
          askCompetence: {
            not: null,
          },
        },
        orderBy: {
          createdAt: "desc",
        },
      });
    }

    res.status(200).json(users);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Error retrieving users" });
  }
}

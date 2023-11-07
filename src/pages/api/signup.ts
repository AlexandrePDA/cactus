"use server";

import prisma from "@/lib/prisma";
import * as bcrypt from "bcrypt";
import { NextApiRequest, NextApiResponse } from "next";
import { cookies } from "next/headers";

function containsUppercase(password: string) {
  return /[A-Z]/.test(password);
}
function containsNumber(password: string) {
  return /[0-9]/.test(password);
}
function mailIsCorrect(email: string) {
  return /^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$/.test(email);
}

export default async function signup(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    if (req.method === "POST") {
      const body = await req.body;

      {
        /* verification password & mail */
      }
      if (body.password.length <= 8) {
        return res
          .status(400)
          .json({ etat: "password doit faire + ou = 8 caracteres" });
      }
      if (containsUppercase(body.password) === false) {
        return res
          .status(400)
          .json({ etat: "password doit avoir une lettre majuscule" });
      }
      if (containsNumber(body.password) === false) {
        return res.status(400).json({ etat: "password doit avoir un nombre" });
      }

      if (mailIsCorrect(body.email) === false) {
        return res.status(400).json({ etat: "email incorrect" });
      }

      const user = await prisma.user.create({
        data: {
          name: body.name,
          email: body.email,
          password: await bcrypt.hash(body.password, 10),
        },
      });

      const { password, ...result } = user;

      {
        /* id session
          -> genere un id unique à l'inscription via BDD
          -> stocké dans cookie
      */
      }

      res.status(200).json({ user: result });
    }
  } catch (error) {
    return res.status(400).json({ etat: "email utilisé ou pb réseau" });
  }
}

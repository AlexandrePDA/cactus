import { hash } from "bcrypt";
import prisma from "@/lib/prisma";
import { sendEmailWelcome } from "@/lib/mail";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    console.log("coucou!!");
    console.log(req.body);
    const { email, password } = JSON.parse(req.body);
    const emailToLowerCase = email.toLowerCase();
    console.log(emailToLowerCase);
    if (!emailToLowerCase || !password)
      return res.status(400).json({ message: "Email et mot de passe requis" });
    if (password.length < 8)
      return res.status(400).json({
        message: "Le mot de passe doit contenir au moins 8 caractères",
      });

    console.log({ emailToLowerCase, password });
    const response = await prisma.user.findUnique({
      where: { email: emailToLowerCase },
    });
    console.log("response register", { response });
    if (response) {
      return res.status(400).json({ message: "Email déjà utilisé" });
    }

    const hashedPassword = await hash(password, 10);
    const user = await prisma.user.create({
      data: {
        email: emailToLowerCase,
        password: hashedPassword,
      },
    });
    await sendEmailWelcome(emailToLowerCase);
    console.log({ user });
    console.log("succes");
    return res.status(200).json({ message: "succes" });
  } catch (e) {
    console.error(e);
    return res
      .status(500)
      .json({ message: "Une erreur est survenue lors de l'inscription" });
  }
}

import prisma from "@/lib/prisma";
import * as bcrypt from "bcrypt";
import { NextApiRequest, NextApiResponse } from "next";

function containsUppercase(password:string) {
  return /[A-Z]/.test(password);
}
function containsNumber(password:string){
  return /[0-9]/.test(password);
}
function mailIsCorrect(email:string){
  return /^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$/.test(email);
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    if (req.method === "POST") {
      const body = await req.body;

      {/* verification password & mail */}
      if(body.password.length <= 8){
        return res.status(400).json({ etat: "password doit faire + ou = 8 caracteres" });
      }
      if(containsUppercase(body.password) === false) {
        return res.status(400).json({ etat: "password doit avoir une lettre majuscule" });
      }
      if(containsNumber(body.password) === false){
        return res.status(400).json({ etat: "password doit avoir un nombre" });
      }

      if(mailIsCorrect(body.email) === false){
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
      console.log(result);
      return res.status(200).json({ etat: "user crée avec succes" });
    }
  } catch (error) {
    return res.status(400).json({ etat: "email utilisé ou pb réseau" });
  }
}

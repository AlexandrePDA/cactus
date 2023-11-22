import { Session, getServerSession } from "next-auth";
import { authConfig } from "@/pages/api/auth/[...nextauth]";

export default async function test(req, res) {
  const session = await getServerSession(req, res, authConfig);
  console.log("Session dans l'API de test", session);
  res.json({ session });
}

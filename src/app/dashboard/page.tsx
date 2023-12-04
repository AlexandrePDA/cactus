import { authConfig } from "@/pages/api/auth/[...nextauth]";
import { getServerSession } from "next-auth";
import Image from "next/image";
import { Separator } from "../../components/ui/separator";
import { Mail, Globe, Github, Linkedin, Instagram } from "lucide-react";
import { Button } from "../../components/ui/button";
import Link from "next/link";
import { redirect } from "next/navigation";
import ShowMyInfos from "@/components/Profil/ShowMyInfos";

export default async function Dashboard() {
  const session = await getServerSession(authConfig);

  if (!session) redirect("/");

  if (session?.user.askCompetence === null) redirect("/onboarding");

  const profileImage = session?.user.image || "";

  return (
    <div className="p-4 max-w-screen-xl text-dark mx-auto w-full mb-48">
      <h1 className="text-center my-12 text-green font-bold text-2xl">
        Dashboard de {session?.user?.name}
      </h1>
      <ShowMyInfos />
    </div>
  );
}

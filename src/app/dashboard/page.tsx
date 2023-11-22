import { authConfig } from "@/pages/api/auth/[...nextauth]";
import { getServerSession } from "next-auth";
import Image from "next/image";
import { Separator } from "../../components/ui/separator";
import { Mail, Globe, Github, Linkedin, Instagram } from "lucide-react";
import { Button } from "../../components/ui/button";
import Link from "next/link";
import { redirect } from "next/navigation";

export default async function Dashboard() {
  const session = await getServerSession(authConfig);

  if (!session) redirect("/");

  const profileImage = session?.user.image || "";

  return (
    <div className=" p-4 max-w-screen-xl text-dark mx-auto w-full mb-48">
      <h1 className="text-center my-12 text-green font-bold text-2xl">
        Dashboard de {session?.user?.name}
      </h1>
      <div className="flex flex-col gap-8 lg:flex-row items-center justify-center">
        <div className="lg:w-1/3 w-full flex flex-col lg:items-start items-center   ">
          <Image
            src={profileImage}
            alt="profil picture"
            width={100}
            height={100}
            className="rounded mb-2"
          />
          <p className="font-bold text-lg">{session?.user?.name}</p>
          <div className="flex items-center gap-2 mt-2">
            <Mail size={16} color="#0EAD69" />
            <p className="">Email</p>
          </div>
          <p className="mb-4">{session?.user?.email}</p>
          <div className="flex flex-row gap-4 my-2">
            {session?.user.ownSite ? (
              <Link href={session?.user.ownSite}>
                <Globe />
              </Link>
            ) : (
              ""
            )}
            {session?.user.github ? (
              <Link href={session?.user.github}>
                <Github />
              </Link>
            ) : (
              ""
            )}
            {session?.user.linkedin ? (
              <Link href={session?.user.linkedin}>
                <Linkedin />
              </Link>
            ) : (
              ""
            )}
            {session?.user.instagram ? (
              <Link href={session?.user.instagram}>
                <Instagram />
              </Link>
            ) : (
              ""
            )}
          </div>

          <Separator />

          <h3 className="font-bold text-lg my-4">Skills</h3>
          <div className="flex flex-wrap gap-4">
            <p className="bg-[#DEF7EC] text-[#155E49] p-2">
              🥇 {session?.user.skill1}
            </p>
            {session?.user.skill2.length > 0 ? (
              <p className="bg-[#DEF7EC] text-[#155E49] p-2">
                {" "}
                🥈 {session?.user.skill2}{" "}
              </p>
            ) : (
              ""
            )}
            {session?.user.skill3.length > 0 ? (
              <p className="bg-[#DEF7EC] text-[#155E49] p-2">
                {" "}
                🥉 {session?.user.skill3}{" "}
              </p>
            ) : (
              ""
            )}
          </div>
          <Link href="/dashboard/edit">
            <Button className="mt-8 bg-green hover:bg-green-800 hidden lg:block">
              Modifier mon profil
            </Button>
          </Link>
        </div>

        <div className="lg:w-2/3 w-full flex flex-col items-center justify-center gap-12">
          <div>
            <h3 className="font-bold text-xl">
              🚨 Je suis à la recherche de compétence en{" "}
              <span className="text-green">{session?.user?.askCompetence}</span>
            </h3>
          </div>
          <h3 className="font-bold text-lg">Bio</h3>
          <div>
            <p>{session?.user.bio}</p>
          </div>
          <Link href="/dashboard/edit">
            <Button className="mt-8 bg-green hover:bg-green-800 lg:hidden">
              Modifier mon profil
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

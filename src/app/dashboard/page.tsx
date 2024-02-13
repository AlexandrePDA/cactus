import { authConfig } from "@/pages/api/auth/[...nextauth]";
import { getServerSession } from "next-auth";
import Image from "next/image";
import { Separator } from "../../components/ui/separator";
import { Globe, Github, Linkedin, Instagram } from "lucide-react";
import { Button } from "../../components/ui/button";
import Link from "next/link";
import { redirect } from "next/navigation";

export default async function Dashboard() {
  const session = await getServerSession(authConfig);

  console.log(session);

  if (!session) redirect("/");

  if (session?.user.askCompetence === null) redirect("/onboarding");

  const profileImage = session?.user.image || "";

  return (
    <div>
      <div className="p-4 max-w-screen-2xl  text-dark mx-auto w-full mb-4  flex items-center justify-center flex-col">
        <h1 className="text-center my-12 text-green font-bold text-2xl">
          Bievenue sur ton Dashboard {session.user.name} 🚀
        </h1>

        <div className="flex flex-col gap-4 mb-12 md:gap-24 lg:flex-row items-center justify-center ">
          <div className=" w-full flex flex-col  items-center">
            <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
              <Image
                src={profileImage}
                alt="profil picture"
                width={250}
                height={250}
                className="rounded mb-2 h-44 w-44 object-cover object-center"
              />
              <div className="flex flex-col gap-4">
                <p className="font-bold mt-4 text-lg">{session.user.name}</p>

                <p className="">💌 {session.user.email}</p>

                <div className="flex flex-row gap-4 ">
                  {session.user.ownSite ? (
                    <Link href={session.user.ownSite} className="my-4">
                      <Globe color="#11671D" />
                    </Link>
                  ) : (
                    ""
                  )}
                  {session.user.github ? (
                    <Link href={session.user.github} className="my-4">
                      <Github color="#11671D" />
                    </Link>
                  ) : (
                    ""
                  )}
                  {session.user.linkedin ? (
                    <Link href={session.user.linkedin} className="my-4">
                      <Linkedin color="#11671D" />
                    </Link>
                  ) : (
                    ""
                  )}
                  {session.user.instagram ? (
                    <Link href={session.user.instagram} className="my-4">
                      <Instagram color="#11671D" />
                    </Link>
                  ) : (
                    ""
                  )}
                </div>
              </div>
            </div>

            <Separator className=" my-4" />
            <div className="flex flex-col flex-wrap items-center gap-4">
              <h3 className="font-bold text-xl">Ma recherche</h3>
              <h4 className=" text-lg text-lightorange">
                🔎 {session.user.askCompetence}
              </h4>

              <h3 className="font-bold text-xl">Mes skills</h3>
              <div className="flex flex-wrap gap-2">
                <p className="bg-[#DEF7EC] text-[#155E49] p-2">
                  ⭐️ {session.user.skill1}
                </p>
                {session.user.skill2 !== "" ? (
                  <p className="bg-[#DEF7EC] text-[#155E49] p-2">
                    {" "}
                    ⭐️ {session.user.skill2}{" "}
                  </p>
                ) : (
                  ""
                )}
                {session.user.skill3 !== "" ? (
                  <p className="bg-[#DEF7EC] text-[#155E49] p-2">
                    {" "}
                    ⭐️ {session.user.skill3}{" "}
                  </p>
                ) : (
                  ""
                )}
              </div>

              <h3 className="font-bold text-xl">Mon projet</h3>
              <div>
                <p>{session.user.bio}</p>
              </div>
            </div>
          </div>
        </div>
        <Link href="/dashboard/edit">
          <Button className="bg-green mt-8">Modifier mon profil</Button>
        </Link>
      </div>
    </div>
  );
}

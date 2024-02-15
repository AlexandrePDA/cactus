import { authConfig } from "@/pages/api/auth/[...nextauth]";
import { getServerSession } from "next-auth";
import Image from "next/image";
import { Separator } from "../../components/ui/separator";
import {
  Globe,
  Github,
  Linkedin,
  Instagram,
  MailPlus,
  Settings,
} from "lucide-react";
import { Button } from "../../components/ui/button";
import Link from "next/link";
import { redirect } from "next/navigation";

export default async function Dashboard() {
  const session = await getServerSession(authConfig);

  if (!session) redirect("/");

  if (session?.user.askCompetence === null) redirect("/onboarding");

  const profileImage = session?.user.image || "";

  return (
    <div className="p-4  mx-auto">
      <div className="p-4    text-dark mx-auto w-full mb-4  flex items-center justify-center flex-col ">
        <h1 className="text-center mt-12 mb-4 text-green font-bold text-2xl md:text-4xl">
          Mon dashboard 🌵
        </h1>

        <div className="max-w-screen-md">
          <h3 className="font-semibold mt-8 text-center my-4 text-xl md:text-3xl">
            🌱 Mon projet
          </h3>
          <div>
            <p className="italic">« {session.user.projet} »</p>
          </div>
        </div>
        <Separator className="w-1/2 my-4" />

        <div className="max-w-screen-2xl flex flex-col gap-4 mb-12 md:gap-24 lg:flex-row items-center ">
          <div className="w-full  flex flex-col  items-center p-4 ">
            <div className="w-full flex flex-col md:flex-row justify-center items-center gap-12 md:gap-24 ">
              <div>
                <Image
                  src={profileImage}
                  alt="profil picture"
                  width={250}
                  height={250}
                  className="rounded-md shadow-md  h-72 w-72 object-cover object-center"
                />
              </div>

              <div className="flex flex-col flex-wrap items-center gap-4 justify-between ">
                <h3 className="font-semibold text-xl md:text-3xl">
                  ⭐️ Ce que je propose{" "}
                </h3>
                <div className="flex flex-wrap gap-2">
                  <p className=" bg-[#B4DFC4] p-2 font-semibold rounded uppercase text-green">
                    {session.user.skill1}
                  </p>
                  {session.user.skill2 !== "" ? (
                    <p className=" bg-[#B4DFC4] p-2 font-semibold rounded uppercase text-green">
                      {session.user.skill2}
                    </p>
                  ) : (
                    ""
                  )}
                  {session.user.skill3 !== "" ? (
                    <p className=" bg-[#B4DFC4] p-2 font-semibold rounded uppercase text-green">
                      {session.user.skill3}
                    </p>
                  ) : (
                    ""
                  )}
                </div>

                <h3 className="font-semibold mt-8 text-xl md:text-3xl">
                  🔎 Ce que je cherche{" "}
                </h3>
                {session.user.askCompetence ? (
                  <p className="bg-[#FFCCA7] p-2 font-semibold rounded uppercase text-dark">
                    {session.user.askCompetence}
                  </p>
                ) : (
                  ""
                )}
              </div>
            </div>
            <div className="max-w-screen-md mt-8">
              <h3 className="font-semibold mt-8 text-center my-4 text-xl md:text-3xl">
                👋🏽 Ma présentation
              </h3>
              <div>
                <p className="italic">« {session.user.bio} »</p>
              </div>
            </div>
          </div>
        </div>
        <Separator className="w-1/2 my-4" />
        <h3 className="font-semibold mt-8 text-center my-4 text-xl md:text-3xl">
          💌 Mes contacts !
        </h3>
        <div className="mt-8 flex flex-col md:gap-4">
          <div className="flex flex-wrap flex-row gap-4 ">
            <Link
              href={`mailto:${session.user.email}`}
              className="my-2 md:my-4 w-24 h-24 rounded-md flex items-start  gap-2 flex-col bg-[#F4EEFF] shadow hover:shadow-xl transition-all duration-300"
            >
              <span className="bg-[#DCD6F7] p-2  rounded-md m-2">
                <MailPlus color="#ffffff" />
              </span>
              <p className=" mx-2 text-dark">Email</p>
            </Link>
            {session.user.ownSite ? (
              <Link
                href={session.user.ownSite}
                className="my-2 md:my-4 w-24 h-24 rounded-md flex items-start  gap-2 flex-col bg-white shadow hover:shadow-xl transition-all duration-300"
              >
                <span className="bg-[#E1F0DA] p-2  rounded-md m-2">
                  <Globe color="#11671D" />
                </span>
                <p className=" mx-2 text-dark">Site</p>
              </Link>
            ) : (
              ""
            )}
            {session.user.github ? (
              <Link
                href={session.user.github}
                className="my-2 md:my-4 w-24 h-24 rounded-md flex items-start  gap-2 flex-col bg-[#eeeeee] shadow hover:shadow-xl transition-all duration-300"
              >
                <span className="bg-[#D1D1D1] p-2  rounded-md m-2">
                  <Github color="#0D1117" />
                </span>
                <p className=" mx-2 text-dark">Github</p>
              </Link>
            ) : (
              ""
            )}
            {session.user.linkedin ? (
              <Link
                href={session.user.linkedin}
                className="my-2 md:my-4 w-24 h-24 rounded-md flex items-start  gap-2 flex-col bg-[#F1F6F9] shadow hover:shadow-xl transition-all duration-300"
              >
                <span className="bg-[#326897] p-2  rounded-md m-2">
                  <Linkedin color="#ffffff" />
                </span>
                <p className=" mx-2 text-dark">Linkedin</p>
              </Link>
            ) : (
              ""
            )}
            {session.user.instagram ? (
              <Link
                href={session.user.instagram}
                className="my-2 md:my-4 w-24 h-24 rounded-md flex items-start  gap-2 flex-col bg-[#F9F5F6] shadow hover:shadow-xl transition-all duration-300"
              >
                <span className="bg-gradient-to-r  from-[#F7D074]  to-[#CF2E7E]  p-2  rounded-md m-2">
                  <Instagram color="#ffffff" />
                </span>
                <p className=" mx-2 text-dark">Instagram</p>
              </Link>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

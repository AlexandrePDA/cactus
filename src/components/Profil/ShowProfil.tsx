"use client";
import { useQuery } from "react-query";
import { Separator } from "../ui/separator";
import {
  Globe,
  Github,
  Linkedin,
  Instagram,
  Loader,
  MailPlus,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const fetchUserProfile = async (slug: string) => {
  const response = await fetch("/api/getUserProfileBySlug", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ slug }),
  });

  if (!response.ok) {
    throw new Error("Failed to fetch user profile");
  }

  return response.json();
};

interface ShowProfilProps {
  slug: string;
}

export default function ShowProfil({ slug }: ShowProfilProps) {
  console.log(slug);
  const {
    data: userProfile,
    isLoading,
    isError,
  } = useQuery(["userProfile", slug], () => fetchUserProfile(slug));

  if (isLoading) {
    return (
      <div className="flex justify-center items-center gap-4 w-full min-h-screen">
        <p>Chargement </p>
        <div className="animate-spin">
          <Loader size={16} />
        </div>
      </div>
    );
  }

  if (isError) {
    return <div>Error fetching user profile</div>;
  }
  const profileImage = userProfile.image || "";

  return (
    <div className="p-4">
      <div className="p-4 max-w-screen-2xl    text-dark mx-auto w-full mb-4  flex items-center justify-center flex-col ">
        <h1 className="text-center mt-12 mb-4 text-green font-bold text-2xl md:text-4xl">
          Fais connaissance avec {userProfile.name} 🔥
        </h1>

        <div className="max-w-screen-md">
          <h3 className="font-semibold mt-8 text-center my-4 text-xl md:text-3xl">
            🌱 Son projet
          </h3>
          <div>
            <p className="italic">« {userProfile.projet} »</p>
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
                  ⭐️ Propose{" "}
                </h3>
                <div className="flex flex-wrap gap-2">
                  <p className=" bg-[#B4DFC4] p-2 font-semibold rounded uppercase text-green">
                    {userProfile.skill1}
                  </p>
                  {userProfile.skill2 !== "" ? (
                    <p className=" bg-[#B4DFC4] p-2 font-semibold rounded uppercase text-green">
                      {userProfile.skill2}
                    </p>
                  ) : (
                    ""
                  )}
                  {userProfile.skill3 !== "" ? (
                    <p className=" bg-[#B4DFC4] p-2 font-semibold rounded uppercase text-green">
                      {userProfile.skill3}
                    </p>
                  ) : (
                    ""
                  )}
                </div>

                <h3 className="font-semibold mt-8 text-xl md:text-3xl">
                  🔎 Cherche{" "}
                </h3>
                {userProfile.askCompetence ? (
                  <p className="bg-[#FFCCA7] p-2 font-semibold rounded uppercase text-dark">
                    {userProfile.askCompetence}
                  </p>
                ) : (
                  ""
                )}
              </div>
            </div>
            <div className="max-w-screen-md mt-8">
              <h3 className="font-semibold mt-8 text-center my-4 text-xl md:text-3xl">
                👋🏽 {userProfile.name} en quelques mots
              </h3>
              <div>
                <p className="italic">« {userProfile.bio} »</p>
              </div>
            </div>
          </div>
        </div>
        <Separator className="w-1/2 my-4" />
        <h3 className="font-semibold mt-8 text-center my-4 text-xl md:text-3xl">
          💌 Contact {userProfile.name} dès maintenant !
        </h3>
        <div className="mt-8 flex flex-col md:gap-4">
          <div className="flex flex-wrap flex-row gap-4 ">
            <Link
              href={`mailto:${userProfile.email}`}
              className="my-2 md:my-4 w-24 h-24 rounded-md flex items-start  gap-2 flex-col bg-[#F4EEFF] shadow hover:shadow-xl transition-all duration-300"
            >
              <span className="bg-[#DCD6F7] p-2  rounded-md m-2">
                <MailPlus color="#ffffff" />
              </span>
              <p className=" mx-2 text-dark">Email</p>
            </Link>
            {userProfile.ownSite ? (
              <Link
                href={userProfile.ownSite}
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
            {userProfile.github ? (
              <Link
                href={userProfile.github}
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
            {userProfile.linkedin ? (
              <Link
                href={userProfile.linkedin}
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
            {userProfile.instagram ? (
              <Link
                href={userProfile.instagram}
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

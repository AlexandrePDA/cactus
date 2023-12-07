"use client";
import { useQuery } from "react-query";
import { Separator } from "../ui/separator";
import { Mail, Globe, Github, Linkedin, Instagram, Loader } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";

const fetchUserProfile = async (email: string) => {
  const response = await fetch("/api/getUserProfileByEmail", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email }),
  });

  if (!response.ok) {
    throw new Error("Failed to fetch user profile");
  }

  return response.json();
};

interface ShowProfilProps {
  email: string;
}

export default function ShowProfil({ email }: ShowProfilProps) {
  function replacePercent40(str: string): string {
    return str.replace(/%40/g, "@");
  }

  const {
    data: userProfile,
    isLoading,
    isError,
  } = useQuery(["userProfile", email], () =>
    fetchUserProfile(replacePercent40(email))
  );

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
    <div>
      <div className="p-4 max-w-screen-2xl   text-dark mx-auto w-full mb-4  flex items-center justify-center flex-col">
        <h1 className="text-center my-12 text-green font-bold text-2xl">
          Découvre {userProfile.name} 🔥
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
                <p className="font-bold mt-4 text-lg">{userProfile.name}</p>

                <p className="">💌 {userProfile.email}</p>

                <div className="flex flex-row gap-4 ">
                  {userProfile.ownSite ? (
                    <Link href={userProfile.ownSite} className="my-4">
                      <Globe color="#11671D" />
                    </Link>
                  ) : (
                    ""
                  )}
                  {userProfile.github ? (
                    <Link href={userProfile.github} className="my-4">
                      <Github color="#11671D" />
                    </Link>
                  ) : (
                    ""
                  )}
                  {userProfile.linkedin ? (
                    <Link href={userProfile.linkedin} className="my-4">
                      <Linkedin color="#11671D" />
                    </Link>
                  ) : (
                    ""
                  )}
                  {userProfile.instagram ? (
                    <Link href={userProfile.instagram} className="my-4">
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
              <h3 className="font-bold text-xl">Sa recherche</h3>
              <h4 className=" text-lg text-darkgreen">
                🔎 {userProfile.askCompetence}
              </h4>

              <h3 className="font-bold text-xl">Ses skills</h3>
              <div className="flex flex-wrap gap-2">
                <p className="bg-[#DEF7EC] text-[#155E49] p-2">
                  ⭐️ {userProfile.skill1}
                </p>
                {userProfile.skill2 !== "" ? (
                  <p className="bg-[#DEF7EC] text-[#155E49] p-2">
                    {" "}
                    ⭐️ {userProfile.skill2}{" "}
                  </p>
                ) : (
                  ""
                )}
                {userProfile.skill3 !== "" ? (
                  <p className="bg-[#DEF7EC] text-[#155E49] p-2">
                    {" "}
                    ⭐️ {userProfile.skill3}{" "}
                  </p>
                ) : (
                  ""
                )}
              </div>

              <h3 className="font-bold text-xl">Son projet</h3>
              <div>
                <p>{userProfile.bio}</p>
              </div>
            </div>
          </div>
        </div>
        <Link href={`mailto:${userProfile.email}`}>
          <Button className="bg-green mt-8">
            Contacter {userProfile.name}
          </Button>
        </Link>
      </div>
    </div>
  );
}

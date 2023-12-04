"use client";
import { useQuery } from "react-query";
import { Separator } from "../ui/separator";
import { Mail, Globe, Github, Linkedin, Instagram, Loader } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

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
    <div className=" p-4 max-w-screen-xl text-dark mx-auto w-full mb-48">
      <h1 className="text-center my-12 text-green font-bold text-2xl">
        Profil de {userProfile.name}
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
          <p className="font-bold text-lg">{userProfile.name}</p>
          <div className="flex items-center gap-2 mt-2">
            <Mail size={16} color="#0EAD69" />
            <p className="">Email</p>
          </div>
          <p className="mb-4">{userProfile.email}</p>
          <div className="flex flex-row gap-4 my-2">
            {userProfile.ownSite ? (
              <Link href={userProfile.ownSite}>
                <Globe />
              </Link>
            ) : (
              ""
            )}
            {userProfile.github ? (
              <Link href={userProfile.github}>
                <Github />
              </Link>
            ) : (
              ""
            )}
            {userProfile.linkedin ? (
              <Link href={userProfile.linkedin}>
                <Linkedin />
              </Link>
            ) : (
              ""
            )}
            {userProfile.instagram ? (
              <Link href={userProfile.instagram}>
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
              ⭐️ {userProfile.skill1}
            </p>
            {userProfile.skill2 !== null ? (
              <p className="bg-[#DEF7EC] text-[#155E49] p-2">
                {" "}
                ⭐️ {userProfile.skill2}{" "}
              </p>
            ) : (
              ""
            )}
            {userProfile.skill3 !== null ? (
              <p className="bg-[#DEF7EC] text-[#155E49] p-2">
                {" "}
                ⭐️ {userProfile.skill3}{" "}
              </p>
            ) : (
              ""
            )}
          </div>
        </div>

        <div className="lg:w-2/3 w-full flex flex-col items-center justify-center gap-12">
          <div>
            <h3 className="font-bold text-xl">
              🚨 Je suis à la recherche de compétence en{" "}
              <span className="text-green">{userProfile.askCompetence}</span>
            </h3>
          </div>
          <h3 className="font-bold text-lg">Bio</h3>
          <div>
            <p>{userProfile.bio}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

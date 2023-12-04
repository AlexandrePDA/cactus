"use client";

import { useQuery } from "react-query";
import Image from "next/image";
import { Mail, Globe, Github, Linkedin, Instagram, Loader } from "lucide-react";
import logo from "../../../public/assets/Logo_cactus_round.png";
import Link from "next/link";
import { Button } from "../ui/button";
import { Skeleton } from "@/components/ui/skeleton";

interface User {
  id: number;
  name: string;
  email: string;
  askCompetence: string;
  skill1: string;
  skill2: string;
  skill3: string;
  ownSite: string;
  github: string;
  linkedin: string;
  instagram: string;
  bio: string;
}

interface AllUsersProps {
  selectedCategory: string;
}

const fetchUsers = async (selectedCategory: string) => {
  const response = await fetch(
    `/api/getAllUsers?selectedCategory=${selectedCategory}`
  );
  if (!response.ok) {
    throw new Error("Failed to fetch users");
  }
  return response.json();
};

export default function AllUsers({ selectedCategory }: AllUsersProps) {
  const {
    data: users,
    isLoading,
    isError,
  } = useQuery(["users", selectedCategory], () => fetchUsers(selectedCategory));

  if (isLoading) {
    return (
      <div className=" h-screen w-screen">
        <div className="flex justify-center items-center gap-4">
          <p>Chargement </p>
          <div className="animate-spin">
            <Loader size={16} />
          </div>
        </div>
      </div>
    );
  }

  if (isError) {
    return <div>Error fetching users</div>;
  }

  return (
    <div className="max-w-screen-xl mx-auto p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {users.map((user: User) => (
          <div
            key={user.id}
            className=" flex flex-col rounded-xl p-4 md:p-6 bg-white border border-gray-200 dark:bg-slate-900 dark:border-gray-700"
          >
            <div className="flex items-center gap-x-4">
              <Image
                className="rounded-full w-20 h-20"
                src={logo}
                alt="Image Description"
                width={400}
                height={400}
              />
              <div className="grow">
                <h3 className="font-medium text-gray-800 dark:text-gray-200 mb-2">
                  {user.name}
                </h3>
                <p className="text-xs uppercase text-gray-500">
                  ⭐️ {user.skill1}
                </p>
                {user.skill2 ? (
                  <p className="text-xs uppercase text-gray-500">
                    ⭐️ {user.skill2}
                  </p>
                ) : (
                  ""
                )}
                {user.skill3 ? (
                  <p className="text-xs uppercase text-gray-500">
                    ⭐️ {user.skill3}
                  </p>
                ) : (
                  ""
                )}
              </div>
            </div>
            <h4 className="text-gray-500 font-bold my-4">
              🔎 {user.askCompetence}
            </h4>
            <p className=" text-gray-500">{user.bio}</p>
            <div className=" space-x-1 flex ">
              {user.ownSite ? (
                <Link href={user.ownSite}>
                  <Globe color="#4b5563" size={18} strokeWidth={2} />
                </Link>
              ) : (
                ""
              )}
              {user.github ? (
                <Link href={user.github}>
                  <Github color="#4b5563" size={18} strokeWidth={2} />
                </Link>
              ) : (
                ""
              )}
              {user.linkedin ? (
                <Link href={user.linkedin}>
                  <Linkedin color="#4b5563" size={18} strokeWidth={2} />
                </Link>
              ) : (
                ""
              )}
              {user.instagram ? (
                <Link href={user.instagram}>
                  <Instagram color="#4b5563" size={18} strokeWidth={2} />
                </Link>
              ) : (
                ""
              )}
            </div>
            <Link href={`/profil/${user.email}`}>
              <Button className="w-1/2 mt-4 bg-green">Profil</Button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

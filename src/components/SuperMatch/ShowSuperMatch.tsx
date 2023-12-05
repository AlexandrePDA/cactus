"use client";

import Link from "next/link";
import { useQuery } from "react-query";
import { Button } from "../ui/button";
import Image from "next/image";

interface User {
  id: number;
  name: string;
  email: string;
  image: string;
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

const fetchSuperMatches = async () => {
  try {
    const response = await fetch("/api/superMatch");
    return response.json();
  } catch (error) {
    throw new Error("Erreur lors de la récupération des SuperMatches");
  }
};
export default function ShowSuperMatch() {
  const {
    data: superMatches,
    isLoading,
    isError,
  } = useQuery("superMatches", fetchSuperMatches);

  if (isLoading) {
    return <p>Chargement...</p>;
  }

  if (isError) {
    return <p>Erreur lors du chargement des SuperMatches.</p>;
  }

  return (
    <div className="mb-24  p-4 rounded-lg border shadow-lg m-4">
      {superMatches.length === 0 ? (
        ""
      ) : (
        <div className="">
          <div className="flex items-center justify-center">
            {superMatches.length === 1 ? (
              <h2 className="text-dark mx-auto mb-4 font-extrabold">
                🎉 Un profil correspond à tes recherches 🎉
              </h2>
            ) : (
              <h2 className="text-dark mx-auto mb-4">
                🎉 Ces profils correspondent à tes recherches 🎉
              </h2>
            )}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {superMatches.map((user: User) => (
              <div
                key={user.id}
                className=" flex flex-col justify-between rounded-xl p-4 md:p-6 bg-cardUser border border-gray-200 dark:bg-slate-900 dark:border-gray-700 shadow-md"
              >
                <div className="flex items-center gap-x-4 ">
                  <Image
                    className="rounded-lg w-24 h-24 object-cover object-center"
                    src={user.image}
                    alt="Image Description"
                    width={400}
                    height={400}
                  />
                  <div className="grow">
                    <h3 className="font-medium text-dark dark:text-gray-200 mb-2">
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
                <div className="text-darkgreen font-bold my-4 mx-auto flex items-center gap-2">
                  <p>🔎</p>
                  <p>{user.askCompetence}</p>
                </div>

                <Link href={`/profil/${user.email}`}>
                  <Button className=" mt-4 bg-green">Profil</Button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

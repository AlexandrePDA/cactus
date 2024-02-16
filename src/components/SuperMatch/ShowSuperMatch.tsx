"use client";

import Link from "next/link";
import { useQuery } from "react-query";
import Image from "next/image";
import { useEffect, useState } from "react";
import ConfettiExplosion from "react-confetti-explosion";
import toast from "react-hot-toast";

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
  const [monEtat, setMonEtat] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      // Mise à jour de l'état à false après 3 secondes
      setMonEtat(false);
    }, 3000);

    // Nettoyer le timer si le composant est démonté avant que le délai soit écoulé
    return () => clearTimeout(timer);
  }, []);

  const {
    data: superMatches,
    isLoading,
    isError,
  } = useQuery("superMatches", fetchSuperMatches);

  if (isLoading) {
    return <p></p>;
  }

  if (isError) {
    toast.error("Une erreur est survenue");
    return <div>Aïe... Une erreur est survenue </div>;
  }

  return (
    <div>
      {superMatches.length === 0 ? (
        ""
      ) : (
        <div className="mb-24  p-4 rounded-lg border-[#f5f5f5] border shadow-lg m-4 relative">
          <div>
            <div className="relative flex items-center justify-center">
              <ConfettiExplosion className="absolute" />
              {superMatches.length === 1 ? (
                <h2 className="text-green mx-auto mb-4 font-semibold text-xl text-center">
                  🎉 Un profil correspond à tes recherches 🎉
                </h2>
              ) : (
                <h2 className="text-dark mx-auto mb-4 font-extrabold text-center">
                  🎉 Ces profils correspondent à tes recherches 🎉
                </h2>
              )}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {superMatches.map((user: User) => (
                <Link
                  href={`/profil/${user.email}`}
                  key={user.id}
                  className=" flex flex-col justify-between rounded-lg p-2 bg-cardUser border border-gray-200  shadow-md hover:shadow-xl transition-all duration-300"
                >
                  <div className=" flex flex-col items-center  ">
                    {user.image ? (
                      <Image
                        className=" rounded-t-md w-full h-60 object-cover object-center"
                        src={user.image}
                        alt="Image Description picture profil"
                        width={600}
                        height={600}
                      />
                    ) : (
                      ""
                    )}
                    {user.askCompetence ? (
                      <p className="text-md font-bold text-center w-full  bg-lightorange p-2 rounded-b-md uppercase text-white">
                        🔎 {user.askCompetence}
                      </p>
                    ) : (
                      ""
                    )}

                    <div className="grow w-full mb-2">
                      <h3 className="text-center font-semibold text-green text-xl md:text-2xl  my-4">
                        {user.name ? <p>{user.name}</p> : ""}
                      </h3>
                      <div>
                        {user.bio ? (
                          <p className="text-sm  text-green italic mt-2 mb-4">
                            «{" "}
                            {user.bio.length > 50
                              ? user.bio.substring(0, 50) + "..."
                              : user.bio}{" "}
                            »
                          </p>
                        ) : (
                          ""
                        )}
                      </div>

                      <div className="flex gap-2 flex-wrap items-center justify-center">
                        <p className="text-sm bg-[#B4DFC4] font-semibold p-2 rounded uppercase text-green">
                          ⭐️ {user.skill1 ? user.skill1 : ""}
                        </p>
                        {user.skill2 ? (
                          <p className="text-sm uppercase bg-[#B4DFC4] font-semibold p-2 rounded text-green">
                            ⭐️ {user.skill2}
                          </p>
                        ) : (
                          ""
                        )}
                        {user.skill3 ? (
                          <p className="text-sm bg-[#B4DFC4] p-2 font-semibold rounded uppercase text-green">
                            ⭐️ {user.skill3}
                          </p>
                        ) : (
                          ""
                        )}
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

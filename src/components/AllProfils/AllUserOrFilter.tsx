import { useQuery } from "react-query";
import Image from "next/image";
import { Loader } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";
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
  projet: string;
  slug: string;
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

export default function AllUserOrFilter({ selectedCategory }: AllUsersProps) {
  const {
    data: users,
    isLoading,
    isError,
  } = useQuery(["users", selectedCategory], () => fetchUsers(selectedCategory));

  if (isLoading) {
    return (
      <div className="flex justify-center items-center gap-4">
        <p>Chargement </p>
        <div className="animate-spin">
          <Loader size={16} />
        </div>
      </div>
    );
  }

  if (isError) {
    toast.error("Une erreur est survenue");
    return <div>Aïe... Une erreur est survenue </div>;
  }

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:p-8">
        {users.map((user: User) => (
          <Link
            href={`/profil/${user.slug}`}
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
                    <p className="text-sm text-center text-green italic mt-2 mb-4">
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
  );
}

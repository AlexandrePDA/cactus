import { useQuery } from "react-query";
import Image from "next/image";
import { Loader } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";

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
    return <div>Error fetching users</div>;
  }

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {users.map((user: User) => (
          <div
            key={user.id}
            className=" flex flex-col justify-between rounded-xl p-4 md:p-6 bg-cardUser border border-gray-200 dark:bg-slate-900 dark:border-gray-700 shadow-md"
          >
            <div className="flex items-center gap-x-4 ">
              {user.image ? (
                <Image
                  className="rounded-lg w-24 h-24 object-cover object-center"
                  src={user.image}
                  alt="Image Description"
                  width={400}
                  height={400}
                />
              ) : (
                ""
              )}

              <div className="grow">
                <h3 className="font-medium text-dark dark:text-gray-200 mb-2">
                  {user.name ? <p>{user.name}</p> : ""}
                </h3>
                <p className="text-xs uppercase text-gray-500">
                  ⭐️ {user.skill1 ? user.skill1 : ""}
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
              {user.askCompetence ? <p>{user.askCompetence}</p> : ""}
            </div>

            <Link href={`/profil/${user.email}`}>
              <Button className=" mt-4 bg-green">Profil</Button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

import { getServerSession } from "next-auth";
import { authConfig } from "@/pages/api/auth/[...nextauth]";
import { redirect } from "next/navigation";
import AllUsers from "@/components/AllUsers";

export default async function AllProfils() {
  const session = await getServerSession(authConfig);

  if (!session) redirect("/");

  return (
    <div className="bg-beige">
      <h2 className="text-center px-2 mt-12 text-2xl sm:text-4xl text-dark font-semibold">
        Trouve ta{" "}
        <span className="bg-gradient-to-r from-desertred to-green bg-clip-text text-transparent">
          pépite
        </span>{" "}
        parmi nos{" "}
        <span className="bg-gradient-to-r from-desertred to-green bg-clip-text text-transparent">
          CactUsers
        </span>{" "}
        !
      </h2>

      <h3 className="text-center text-dark text-md sm:text-xl p-4">
        Informatique, langues, arts... À chaque domaine, ses experts. <br />
        Consulte notre selection pour y trouver la compétence dont tu as besoin.
        <br /> Un des profils recherche ce que tu possèdes ? C'est l'heure des
        présentations
      </h3>

      <AllUsers />
    </div>
  );
}

import { getServerSession } from "next-auth";
import { authConfig } from "@/pages/api/auth/[...nextauth]";
import { redirect } from "next/navigation";
import SelectUsers from "@/components/AllProfils/SelectUsers";

export default async function AllProfils() {
  const session = await getServerSession(authConfig);

  if (!session) redirect("/");

  if (session?.user.askCompetence === null) redirect("/onboarding");

  return (
    <div className="bg-beige max-w-screen-xl mx-auto h-screen">
      <div className="my-24">
        <h2 className="text-center px-2 text-2xl sm:text-4xl text-dark">
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

        <p className="text-center text-dark text-md sm:text-lg p-4">
          Informatique, langues, arts... À chaque domaine, ses experts. <br />
          Consulte notre sélection pour y trouver la compétence dont tu as
          besoin.
          <br /> Un des profils recherche ce que tu possèdes ? C'est l'heure des
          présentations
        </p>
      </div>

      <SelectUsers />
    </div>
  );
}

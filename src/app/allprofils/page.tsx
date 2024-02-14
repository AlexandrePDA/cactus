import { getServerSession } from "next-auth";
import { authConfig } from "@/pages/api/auth/[...nextauth]";
import { redirect } from "next/navigation";
import SelectUsers from "@/components/AllProfils/SelectUsers";
import ShowSuperMatch from "@/components/SuperMatch/ShowSuperMatch";

export default async function AllProfils() {
  const session = await getServerSession(authConfig);

  if (!session) redirect("/");

  if (session?.user.askCompetence === null) redirect("/onboarding");

  return (
    <div className="bg-beige max-w-screen-xl mx-auto">
      <div className="mt-16 mb-8">
        <h2 className="text-center font-extrabold text-4xl lg:text-6xl text-lightorange ">
          Explore. Trouve. Contact.
        </h2>

        <p className="text-center text-dark text-md sm:text-lg p-4">
          Informatique, langues, arts... À chaque domaine, ses experts. <br />
          Consulte notre sélection pour y trouver la compétence dont tu as
          besoin.
          <br /> Un des profils recherche ce que tu possèdes ? C'est l'heure des
          présentations 🚀
        </p>
      </div>
      <ShowSuperMatch />
      <SelectUsers />
    </div>
  );
}

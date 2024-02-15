import EditProfile from "@/components/EditProfile/EditProfile";
import EditSocialNetwork from "@/components/EditProfile/EditSocialNetwork";
import { authConfig } from "@/pages/api/auth/[...nextauth]";
import { getServerSession } from "next-auth/next";
import { redirect } from "next/navigation";

export default async function MesReseaux() {
  const session = await getServerSession(authConfig);

  if (!session) redirect("/");

  return (
    <div className="p-4 max-w-screen-xl text-dark mx-auto w-full h-screen">
      <h2 className="text-center my-12 text-green font-semibold text-3xl">
        Modifier mes réseaux sociaux
      </h2>
      <EditSocialNetwork />
    </div>
  );
}

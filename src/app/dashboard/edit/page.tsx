import EditProfile from "@/components/EditProfile/EditProfile";
import { authConfig } from "@/pages/api/auth/[...nextauth]";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function ShowMyInfos() {
  const session = await getServerSession(authConfig);

  if (!session) redirect("/");

  return (
    <div className="p-4 max-w-screen-xl text-dark mx-auto w-full h-screen">
      <h2 className="text-center my-12 text-green font-bold text-2xl">
        Modifier mon profil
      </h2>
      <EditProfile />
    </div>
  );
}

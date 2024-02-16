// app/profil/[userid]/page.tsx

import ShowProfil from "@/components/Profil/ShowProfil";
import { authConfig } from "@/pages/api/auth/[...nextauth]";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function Profil({
  params,
}: {
  params: { userId: string };
}) {
  const session = await getServerSession(authConfig);
  if (!session) redirect("/");
  return (
    <div className=" mb-8">
      <ShowProfil slug={params.userId} />
    </div>
  );
}

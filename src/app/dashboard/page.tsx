import { LogoutButton } from "@/auth/LogoutButton";
import { authConfig } from "@/pages/api/auth/[...nextauth]";
import { getServerSession } from "next-auth";
import Image from "next/image";

export const Dashboard = async () => {
  const session = await getServerSession(authConfig);

  const profileImage = session?.user.image || "";

  return (
    <div>
      <p>{session?.user?.name}</p>
      <Image src={profileImage} alt="profil picture" width={400} height={400} />
      <p>{session?.user?.email}</p>
      <p>{session?.user?.id}</p>
      <LogoutButton />
    </div>
  );
};

export default Dashboard;

import OnboardingNewProfile from "@/components/Onboarding/OnboardingNewProfile";
import { authConfig } from "@/pages/api/auth/[...nextauth]";
import { getServerSession } from "next-auth/next";
import { redirect } from "next/navigation";

export default async function Onboarding() {
  const session = await getServerSession(authConfig);
  if (!session) redirect("/");
  if (session?.user.askCompetence !== null) redirect("/dashboard");

  return (
    <div className=" p-4 max-w-screen-xl text-dark mx-auto w-full mb-4  flex items-center justify-center flex-col h-screen">
      <h1 className="text-center mt-4 text-green font-bold text-2xl">
        Onboarding ✈️
      </h1>
      <OnboardingNewProfile />
    </div>
  );
}

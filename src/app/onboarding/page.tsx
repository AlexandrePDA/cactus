import OnboardingNewProfile from "@/components/Onboarding/OnboardingNewProfile";
import { authConfig } from "@/pages/api/auth/[...nextauth]";
import { getServerSession } from "next-auth/next";
import { redirect } from "next/navigation";

export default async function Onboarding() {
  const session = await getServerSession(authConfig);
  if (!session) redirect("/");
  if (session?.user.askCompetence !== null) redirect("/dashboard");

  return (
    <div className=" p-4 max-w-screen-xl text-dark mx-auto w-full mt-12  flex items-center justify-center flex-col mb-64">
      <h1 className="text-center mt-4 text-green font-bold text-3xl md:text-5xl">
        Onboarding ✈️
      </h1>
      <h2 className="mt-8">
        Deviens un cact-user en créant ton profil dès maintenant ! 🌵
      </h2>
      <OnboardingNewProfile />
    </div>
  );
}

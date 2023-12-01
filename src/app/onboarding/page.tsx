import EditHaveAndSearchCompetences from "@/components/EditHaveAndSearchCompetences";
import EditNameAndBio from "@/components/EditNameAndBio";
import EditSocialNetwork from "@/components/EditSocialNetwork";
import OnboardingNewProfile from "@/components/OnboardingNewProfile";
import { authConfig } from "@/pages/api/auth/[...nextauth]";
import { getServerSession } from "next-auth/next";
import { redirect } from "next/navigation";

export default async function Onboarding() {
  const session = await getServerSession(authConfig);
  if (!session) redirect("/");
  if (session?.user.askCompetence !== null) redirect("/dashboard");

  return (
    <div className=" p-4 max-w-screen-xl text-dark mx-auto w-full mb-48  flex items-center justify-center flex-col">
      <h1 className="text-center my-12 text-green font-bold text-2xl">
        Onboarding ✈️
      </h1>
      <h2>Et si on faisait connaissance ? </h2>
      <OnboardingNewProfile />
    </div>
  );
}

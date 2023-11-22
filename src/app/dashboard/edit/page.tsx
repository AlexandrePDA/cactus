import EditHaveAndSearchCompetences from "@/components/EditHaveAndSearchCompetences";
import EditNameAndBio from "@/components/EditNameAndBio";
import EditSocialNetwork from "@/components/EditSocialNetwork";
import { authConfig } from "@/pages/api/auth/[...nextauth]";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import React from "react";

const EditDashboardPage = async () => {
  const session = await getServerSession(authConfig);

  if (!session) redirect("/");

  return (
    <div className=" p-4 max-w-screen-xl text-dark mx-auto w-full mb-48">
      <h1 className="text-center my-12 text-green font-bold text-2xl">
        Modifier mon profil
      </h1>
      <div className="flex flex-col lg:flex-row gap-12">
        <EditNameAndBio />
        <EditHaveAndSearchCompetences />
      </div>
      <EditSocialNetwork />
    </div>
  );
};

export default EditDashboardPage;

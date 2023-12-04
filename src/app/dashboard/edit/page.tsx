"use client";

import Link from "next/link";
import { useState } from "react";
import EditNameAndBio from "../../../components/EditProfile/EditNameAndBio";
import EditHaveAndSearchCompetences from "../../../components/EditProfile/EditHaveAndSearchCompetences";
import EditSocialNetwork from "../../../components/EditProfile/EditSocialNetwork";

export default function ShowMyInfos() {
  const [selectedLink, setSelectedLink] = useState("infos");

  const handleLinkClick = (link: string) => {
    setSelectedLink(link);
  };

  return (
    <div className="p-4 max-w-screen-xl text-dark mx-auto w-full ">
      <h2 className="text-center my-12 text-green font-bold text-2xl">
        Modifier mon profil
      </h2>
      <div className="flex items-center justify-center">
        <div className=" bg-darkgreen text-white rounded-xl p-2 inline-flex">
          <Link
            href="#"
            onClick={() => handleLinkClick("infos")}
            className={`${
              selectedLink === "infos" ? "bg-green" : "bg-darkgreen"
            } transition-bg duration-700 ease-in-out p-1 rounded-md`}
          >
            Infos
          </Link>
          <Link
            href="#"
            onClick={() => handleLinkClick("competences")}
            className={`${
              selectedLink === "competences" ? "bg-green" : "bg-darkgreen"
            } transition-bg duration-700 ease-in-out p-1 rounded-sm`}
          >
            Compétences
          </Link>
          <Link
            href="#"
            onClick={() => handleLinkClick("reseaux")}
            className={`${
              selectedLink === "reseaux" ? "bg-green" : "bg-darkgreen"
            } transition-bg duration-700 ease-in-out p-1 rounded-sm`}
          >
            Réseaux
          </Link>
        </div>
      </div>
      <div className="mt-12">
        {/* Affichez le composant en fonction du lien sélectionné */}
        {selectedLink === "infos" && <EditNameAndBio />}
        {selectedLink === "competences" && <EditHaveAndSearchCompetences />}
        {selectedLink === "reseaux" && <EditSocialNetwork />}
      </div>
    </div>
  );
}

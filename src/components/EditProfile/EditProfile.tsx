"use client";

import Link from "next/link";
import { useState } from "react";
import EditNameAndBio from "./EditNameAndBio";
import EditHaveAndSearchCompetences from "./EditHaveAndSearchCompetences";
import EditSocialNetwork from "./EditSocialNetwork";

export default function EditProfile() {
  const [selectedLink, setSelectedLink] = useState("infos");
  const handleLinkClick = (link: string) => {
    setSelectedLink(link);
  };

  return (
    <div>
      <div className="flex items-center justify-center">
        <div className="bg-lightorange text-white rounded-xl p-2 inline-flex">
          <Link
            href="#"
            onClick={() => handleLinkClick("infos")}
            className={`${
              selectedLink === "infos" ? "bg-green" : "bg-lightorange"
            } transition-bg duration-700 ease-in-out p-1 rounded-md`}
          >
            Infos
          </Link>
          <Link
            href="#"
            onClick={() => handleLinkClick("competences")}
            className={`${
              selectedLink === "competences" ? "bg-green" : "bg-lightorange"
            } transition-bg duration-700 ease-in-out p-1 rounded-sm`}
          >
            Compétences
          </Link>
          <Link
            href="#"
            onClick={() => handleLinkClick("reseaux")}
            className={`${
              selectedLink === "reseaux" ? "bg-green" : "bg-lightorange"
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

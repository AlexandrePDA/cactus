"use client";

import { getServerSession } from "next-auth";
import { authConfig } from "@/pages/api/auth/[...nextauth]";
import { redirect } from "next/navigation";
import AllUsers from "@/components/AllProfils/AllUsers";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";

export default function AllProfils() {
  const categories = [
    { title: "Musique 🎸", options: ["Piano", "Guitare", "Violon", "Chant"] },
    {
      title: "UI/UX 👩🏼‍🎨",
      options: ["Design graphique", "UI", "UX"],
    },
    {
      title: "DIY 🛠️",
      options: [
        "Couture",
        "Bricolage",
        "Jardinage",
        "Décoration",
        "Cosmétique",
      ],
    },
    {
      title: "Marketing 🛍️",
      options: ["Stratégie marketing", "SEO", "SEM", "Email marketing"],
    },
    {
      title: " Finance 💰",
      options: ["Comptabilité", "Analyse financière", "Gestion de trésorerie"],
    },
    {
      title: " Logiciels 👨🏾‍💻",
      options: [
        "Photoshop",
        "Illustrator",
        "InDesign",
        "Premiere Pro",
        "After Effects",
        "SketchUp",
      ],
    },
    {
      title: " Programmation ⚙️",
      options: [
        "JavaScript",
        "Python",
        "Java",
        "C++",
        "Ruby",
        "Swift",
        "TypeScript",
        "PHP",
        "Go",
      ],
    },
    {
      title: " Cuisine 🍕",
      options: [
        "Cuisine française",
        "Cuisine italienne",
        "Pâtisserie",
        "Cuisine asiatique",
        "Cuisine végétarienne",
        "Boulangerie",
      ],
    },
    {
      title: " Langages 💬",
      options: [
        "Français",
        "Espagnol",
        "Allemand",
        "Chinois",
        "Russe",
        "Arabe",
        "Japonais",
      ],
    },
    {
      title: " Cours 📚",
      options: [
        "Soutien scolaire",
        "Préparation aux examens",
        "Préparation aux concours",
        "Mathématiques",
        "Physique",
        "Chimie",
        "Français",
        "Biologie",
        "Histoire/Géographie",
      ],
    },
    {
      title: "Gestion d'entreprise 📈",
      options: [
        "Business plan",
        "Stratégie d'entreprise",
        "Business development",
        "Gestion de projet",
      ],
    },
    {
      title: " Arts 🎨",
      options: ["Peinture", "Dessin", "Sculpture", "Photographie"],
    },
    {
      title: " Développement personnel ✨",
      options: [
        "Gestion du temps",
        "Productivité",
        "Leadership",
        "Bien-être émotionnel",
      ],
    },
  ];

  const [selectedCategory, setSelectedCategory] = useState("");

  const handleChange = (value: string) => {
    console.log(value);
    setSelectedCategory(value);
  };

  const resetFilter = () => {
    // Réinitialisation de la valeur du filtre à sa valeur par défaut
    setSelectedCategory("");
  };

  return (
    <div className="bg-beige max-w-screen-xl mx-auto">
      <div className="my-24">
        <h2 className="text-center px-2  text-2xl sm:text-4xl text-dark ">
          Trouve ta{" "}
          <span className="bg-gradient-to-r from-desertred to-green bg-clip-text text-transparent">
            pépite
          </span>{" "}
          parmi nos{" "}
          <span className="bg-gradient-to-r from-desertred to-green bg-clip-text text-transparent">
            CactUsers
          </span>{" "}
          !
        </h2>

        <p className="text-center text-dark text-md sm:text-lg p-4">
          Informatique, langues, arts... À chaque domaine, ses experts. <br />
          Consulte notre sélection pour y trouver la compétence dont tu as
          besoin.
          <br /> Un des profils recherche ce que tu possèdes ? C'est l'heure des
          présentations
        </p>
      </div>
      <div className="flex items-center gap-2 justify-center mb-12">
        <p>🔎</p>
        <div className="w-full lg:w-2/12 ">
          <Select
            onValueChange={(value) => handleChange(value)}
            defaultValue=""
          >
            <SelectTrigger>
              <SelectValue placeholder="Selectionne" />
            </SelectTrigger>
            <SelectContent>
              {categories.map((category, index) => (
                <p key={index}>
                  <SelectItem
                    value={`category_${index}`}
                    disabled
                    className="font-bold "
                  >
                    {category.title}
                  </SelectItem>
                  {category.options.map((option, optionIndex) => (
                    <SelectItem key={optionIndex} value={option}>
                      {option}
                    </SelectItem>
                  ))}
                </p>
              ))}
            </SelectContent>
          </Select>
        </div>
        <button onClick={resetFilter}>❌</button>
      </div>

      <AllUsers selectedCategory={selectedCategory} />
    </div>
  );
}

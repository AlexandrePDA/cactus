"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";
import AllUserOrFilter from "./AllUserOrFilter";

export default function AllUsers() {
  const [selectedCategory, setSelectedCategory] = useState("");
  const handleChange = (value: string) => {
    console.log(value);
    setSelectedCategory(value);
  };

  const resetFilter = () => {
    setSelectedCategory("");
  };

  const categories = [
    {
      title: "Photos/Vidéos 🎥",
      options: ["Montage vidéo", "Tournage vidéo", "Script", "Photographie"],
    },
    {
      title: "Outils DevOps 🛠️",
      options: ["Docker", "Kubernetes", "Jenkins", "Terraform", "CI", "CD"],
    },
    {
      title: "Design 👩🏼‍🎨",
      options: ["UI", "UX", "Graphiste", "Webdesigner", "Motion designer"],
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
      options: ["Photoshop", "Illustrator", "Final Cut Pro", "After Effects"],
    },
    {
      title: " Programmation ⚙️",
      options: [
        "JavaScript",
        "Python",
        "Java",
        "Cpp",
        "Ruby",
        "Swift",
        "TypeScript",
        "PHP",
      ],
    },
    {
      title: "Langues 💬",
      options: [
        "Espagnol",
        "Allemand",
        "Chinois",
        "Russe",
        "Arabe",
        "Japonais",
      ],
    },
    {
      title: "Soutien scolaire 📚",
      options: [
        "Préparation examen",
        "Mathématiques",
        "Physique",
        "Français",
        "Histoire/Géo",
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
      options: ["Peinture", "Dessin", "Ecriture", "Musique"],
    },
    {
      title: " Développement personnel ✨",
      options: [
        "Gestion du stress",
        "Productivité",
        "Leadership",
        "Prise de parole",
      ],
    },
  ];

  // Trier les titres par ordre alphabétique
  categories.sort((a, b) => a.title.localeCompare(b.title));

  // Trier les options par ordre alphabétique
  categories.forEach((category) => {
    category.options.sort();
  });

  return (
    <div className="max-w-screen-xl  p-4">
      <div className="flex items-center gap-2 justify-center mb-12">
        <p>🔎</p>
        <div className="w-full lg:w-2/12 ">
          <Select
            onValueChange={(value) => handleChange(value)}
            defaultValue=""
          >
            <SelectTrigger>
              <SelectValue placeholder="Cherche le skill" />
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
      <AllUserOrFilter selectedCategory={selectedCategory} />
    </div>
  );
}

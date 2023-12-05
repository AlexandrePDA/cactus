"use client";

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
import AllUserOrFilter from "./AllUserOrFilter";

interface User {
  id: number;
  name: string;
  email: string;
  askCompetence: string;
  skill1: string;
  skill2: string;
  skill3: string;
  ownSite: string;
  github: string;
  linkedin: string;
  instagram: string;
  bio: string;
}

export default function AllUsers() {
  const [selectedCategory, setSelectedCategory] = useState("");
  const handleChange = (value: string) => {
    console.log(value);
    setSelectedCategory(value);
  };

  const resetFilter = () => {
    // Réinitialisation de la valeur du filtre à sa valeur par défaut
    setSelectedCategory("");
  };

  const categories = [
    {
      title: "Musique 🎸",
      options: ["Piano", "Guitare", "Chant"],
    },
    {
      title: "Outils DevOps 🛠️",
      options: ["Docker", "Kubernetes", "Jenkins", "Git", "Terraform"],
    },
    {
      title: "Automatisation 🤖",
      options: ["CI", "CD"],
    },
    {
      title: "Cloud ☁️",
      options: ["AWS", "Azure", "Oracle", "DigitalOcean"],
    },
    {
      title: "UI/UX 👩🏼‍🎨",
      options: ["UI", "UX"],
    },
    {
      title: "DIY 🛠️",
      options: ["Couture", "Bricolage", "Jardinage", "Cosmétique"],
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
      options: ["Photoshop", "Illustrator", "Premiere Pro", "After Effects"],
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
      title: " Cuisine 🍕",
      options: ["Cuisine", "Pâtisserie"],
    },
    {
      title: " Langages 💬",
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
      title: " Cours 📚",
      options: [
        "Soutien scolaire",
        "Préparation examens",
        "Préparation concours",
        "Mathématiques",
        "Physique",
        "Chimie",
        "Français",
        "Biologie",
        "Histoire",
        "Géographie",
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

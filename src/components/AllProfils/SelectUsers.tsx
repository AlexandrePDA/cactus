"use client";

import { useQuery } from "react-query";
import Image from "next/image";
import { Globe, Github, Linkedin, Instagram, Loader } from "lucide-react";
import logo from "../../../public/assets/Logo_cactus_round.png";
import Link from "next/link";
import { Button } from "../ui/button";
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

interface AllUsersProps {
  selectedCategory: string;
}

const fetchUsers = async (selectedCategory: string) => {
  const response = await fetch(
    `/api/getAllUsers?selectedCategory=${selectedCategory}`
  );
  if (!response.ok) {
    throw new Error("Failed to fetch users");
  }
  return response.json();
};

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
      options: ["Piano", "Guitare", "Violon", "Chant"],
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
      options: ["AWS", "Microsoft Azure", "Oracle Cloud", "DigitalOcean"],
    },
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
        "Cpp",
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

"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import toast, { Toaster } from "react-hot-toast";
import { useState } from "react";
import { Loader } from "lucide-react";

const formSchema = z.object({
  search: z.string().optional(),
  skill1: z.string().optional(),
  skill2: z.string().optional(),
  skill3: z.string().optional(),
});

export default function EditHaveAndSearchCompetences() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      search: "",
      skill1: "",
      skill2: "",
      skill3: "",
    },
  });

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
    if (
      values.search === "" &&
      values.skill1 === "" &&
      values.skill2 === "" &&
      values.skill3 === ""
    ) {
      toast.error("😢 Tu dois remplir au moins un champ");
      return;
    }

    try {
      setIsSubmitting(true);
      const response = await fetch("/api/editHaveAndSearchCompetences", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ values }),
      });
      if (response.ok === true && response.status == 200) {
        toast.success("🎉 Ton profil est modifié !");
        form.reset();
      } else {
        toast.error("😢 Une erreur est survenue");
      }
    } catch (error) {
      console.log(error);
      toast.error("😢 Une erreur est survenue");
    } finally {
      setIsSubmitting(false);
    }
  }

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
        "Anglais",
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
    <div className="mx-auto max-w-screen-sm mb-12 w-full lg:w-1/2">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <h3 className=" text-green font-semibold">
            🧩 Tu as besoin d'apprendre une nouvelle compétence ?
          </h3>

          <FormField
            control={form.control}
            name="search"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Je recherche</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Selectionne" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {categories.map((category, index) => (
                      <p key={index}>
                        <SelectItem
                          value={`category_${index}`}
                          disabled
                          className="font-bold text-green"
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
                <FormMessage />
              </FormItem>
            )}
          />

          <h3 className=" text-green font-semibold">
            🧠 Mes skills à partager <span className="italic text-xs"></span>
          </h3>

          <FormField
            control={form.control}
            name="skill1"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Skill ⭐️</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Selectionne" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {categories.map((category, index) => (
                      <p key={index}>
                        <SelectItem
                          value={`category_${index}`}
                          disabled
                          className="font-bold text-green"
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
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="skill2"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Skill ⭐️</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Selectionne" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {categories.map((category, index) => (
                      <p key={index}>
                        <SelectItem
                          value={`category_${index}`}
                          disabled
                          className="font-bold text-green"
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
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="skill3"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Skill ⭐️</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Selectionne" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {categories.map((category, index) => (
                      <p key={index}>
                        <SelectItem
                          value={`category_${index}`}
                          disabled
                          className="font-bold text-green"
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
                <FormMessage />
              </FormItem>
            )}
          />

          <Button className="bg-green" type="submit" disabled={isSubmitting}>
            {isSubmitting ? (
              <span className="animate-spin mr-2">
                <Loader size={16} />
              </span>
            ) : null}
            Valider
          </Button>
        </form>
      </Form>
      <Toaster position="bottom-center" reverseOrder={false} />
    </div>
  );
}

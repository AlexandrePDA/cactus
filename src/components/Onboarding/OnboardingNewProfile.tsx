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
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import toast, { Toaster } from "react-hot-toast";
import { FormEventHandler, useState } from "react";
import { ChevronRight, CheckCircle2, CircleDot, Loader } from "lucide-react";
import { Separator } from "../ui/separator";
import { uploadFile } from "@/app/upload/upload.action";
import Image from "next/image";
import { CldUploadButton } from "next-cloudinary";
import { CldImage } from "next-cloudinary";
import { off } from "process";

type UploadResult = {
  info: {
    url: string;
  };
  event: "success";
};

const formSchema = z.object({
  username: z.string().min(2, { message: "Au moins 2 caractères" }),
  bio: z.string().min(10, { message: "Au moins 10 caractères" }),
  projet: z.string().min(10, { message: "Au moins 10 caractères" }),
});

const formSchemaCompetences = z.object({
  search: z
    .string()
    .min(1, { message: "Tu as oublié de selectionner ta recherche" }),
  skill1: z
    .string()
    .min(1, { message: "Tu as oublié de selectionner un skill" }),
  skill2: z.string().optional(),
  skill3: z.string().optional(),
});

const formSchemaSocialNetworks = z.object({
  website: z.string().optional(),
  linkedin: z.string().optional(),
  instagram: z.string().optional(),
  github: z.string().optional(),
});

export default function OnboardingNewProfile() {
  const [step, setStep] = useState(1);
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [isSubmitting1, setIsSubmitting1] = useState<boolean>(false);
  const [isSubmitting2, setIsSubmitting2] = useState<boolean>(false);
  const [isSubmitting3, setIsSubmitting3] = useState<boolean>(false);

  const form2 = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      bio: "",
      projet: "",
    },
  });

  const form3 = useForm<z.infer<typeof formSchemaCompetences>>({
    resolver: zodResolver(formSchemaCompetences),
    defaultValues: {
      search: "",
      skill1: "",
      skill2: "",
      skill3: "",
    },
  });

  const form4 = useForm<z.infer<typeof formSchemaSocialNetworks>>({
    resolver: zodResolver(formSchemaSocialNetworks),
    defaultValues: {
      website: "",
      linkedin: "",
      instagram: "",
      github: "",
    },
  });

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    if (!imageUrl) {
      toast.error("😢 Pas d'image ou format image non valide");
      setIsSubmitting(false);
      return;
    }
    const url = imageUrl;

    try {
      const response = await fetch("/api/uploadPhotoProfil", {
        method: "POST",
        body: url,
      });
      if (response.ok === true && response.status == 200) {
        toast.success("📸 C'est dans la boite !");
        setStep(2);
      } else {
        toast.error("😢 Pas d'image ou format image non valide");
      }
    } catch (error) {
      toast.error("😢 Une erreur est survenue");
      return error;
    } finally {
      setIsSubmitting(false);
    }
  };

  async function onSubmit2(values: z.infer<typeof formSchema>) {
    if (values.username === "" || values.bio === "" || values.projet === "") {
      toast.error("😢 Les champs sont vides");
      return;
    }

    try {
      setIsSubmitting1(true);
      const response = await fetch("/api/onboardingNewProfile", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ values }),
      });
      if (response.ok === true && response.status == 200) {
        setStep(3);
        toast.success("🎉 Super !");
        form2.reset();
      } else {
        toast.error("😢 Une erreur est survenue");
      }
    } catch (error) {
      console.log(error);
      toast.error("😢 Une erreur est survenue");
    } finally {
      setIsSubmitting1(false);
    }
  }

  async function onSubmit3(values: z.infer<typeof formSchemaCompetences>) {
    if (values.search === "" || values.skill1 === "") {
      toast.error("😢 Les champs sont vides");

      return;
    }

    try {
      setIsSubmitting2(true);
      const response = await fetch("/api/onboardingNewCompetence", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ values }),
      });
      if (response.ok === true && response.status == 200) {
        toast.success("🎉 Un nouveau succès !");
        form2.reset();
        setStep(4);
      } else {
        toast.error("😢 Une erreur est survenue");
      }
    } catch (error) {
      console.log(error);
      toast.error("😢 Une erreur est survenue");
    } finally {
      setIsSubmitting2(false);
    }
  }

  async function onSubmit4(values: z.infer<typeof formSchemaSocialNetworks>) {
    try {
      setIsSubmitting3(true);
      const response = await fetch("/api/onboardingNewSocialNetworks", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ values }),
      });
      if (response.ok === true && response.status == 200) {
        toast.success("🎉 Ton profil est crée !");
        form3.reset();
        if (window && window.location) {
          window.location.href = "/allprofils";
        }
      } else {
        toast.error("😢 Une erreur est survenue...");
      }
    } catch (error) {
      console.log(error);
      toast.error("😢 Une erreur est survenue");
    } finally {
      setIsSubmitting3(false);
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
    <div className="mx-auto max-w-screen-sm mt-2 w-full lg:w-1/2 ">
      {/* gestion parcours */}
      <div className="flex flex-wrap gap-2 items-center justify-center text-dark my-8">
        {/* Step 1 */}
        {step > 2 ? <CheckCircle2 color="#1C6758" /> : <CircleDot />}
        {step > 2 ? (
          <p className="text-green font-bold">Présentation</p>
        ) : (
          <p>Présentation</p>
        )}
        <ChevronRight />

        {/* Step 2 */}
        {step > 3 ? <CheckCircle2 color="#1C6758" /> : <CircleDot />}
        {step > 3 ? (
          <p className="text-green">Compétences</p>
        ) : (
          <p>Compétences</p>
        )}
        <ChevronRight />

        {/* Step 3 */}
        {step > 4 ? <CheckCircle2 color="#1C6758" /> : <CircleDot />}
        {step > 4 ? (
          <p className="text-green">Mes réseaux</p>
        ) : (
          <p>Mes réseaux</p>
        )}
      </div>
      <div className=" w-full text-gray-600 space-y-8 border p-4 rounded-lg shadow-md">
        {/* formulaires */}
        {step === 1 ? (
          <div className="my-4 flex flex-col gap-4 flex-wrap">
            <div className="flex flex-col gap-3 items-center text-green font-bold">
              <h2>📸 Photo de profil (.jpg/.jpeg/.png) * </h2>

              {imageUrl ? (
                <Image
                  className="rounded-lg w-20 h-20 object-cover object-center"
                  src={imageUrl}
                  alt="Image Description"
                  width={400}
                  height={400}
                />
              ) : null}
            </div>
            <form onSubmit={handleSubmit} className="flex flex-col gap-2 ">
              <CldUploadButton
                className="text-center text-lightorange mx-auto"
                uploadPreset="drtqn26p"
                options={{
                  sources: ["local"],
                  multiple: false,
                  maxFiles: 1,
                }}
                onUpload={(result) => {
                  if (
                    result.event === "success" &&
                    typeof result.info === "object" &&
                    result.info !== null
                  ) {
                    if ("url" in result.info) {
                      setImageUrl(result.info.url);
                    } else {
                      console.error(
                        "La propriété 'url' n'existe pas dans result.info"
                      );
                    }
                  }
                }}
              />
              <Button
                className="bg-green w-1/2 mx-auto mt-4"
                type="submit"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <span className="animate-spin mr-2">
                    <Loader size={16} />
                  </span>
                ) : null}
                Valider
              </Button>
            </form>
          </div>
        ) : (
          ""
        )}
        {step === 2 ? (
          <div>
            <p className="text-center my-2">Faisons connaissance 👋🏽</p>
            <Form {...form2}>
              <form
                onSubmit={form2.handleSubmit(onSubmit2)}
                className="space-y-8"
              >
                <FormField
                  control={form2.control}
                  name="username"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-green font-bold">
                        Prénom *
                      </FormLabel>
                      <FormControl>
                        <Input placeholder="Cact-Us" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form2.control}
                  name="bio"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-green font-bold">
                        Parle nous de toi en quelques lignes *
                      </FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Je suis un cact-us sociable et curieux, j'aime apprendre et partager mes connaissances. J'aime la musique, la photographie et le développement personnel"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form2.control}
                  name="projet"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-green font-bold">
                        C'est ici que tu expliques ton projet, la raison pour
                        laquelle tu cherches à apprendre ou à monter en
                        compétence sur un domaine *
                      </FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Je suis professeur d'anglais et j'aimerai apprendre la photographie pour pouvoir l'enseigner à mes élèves. Je souhaite aussi pouvoir réaliser des photos de qualité pour mes voyages à l'étranger"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button
                  className="bg-green"
                  type="submit"
                  disabled={isSubmitting1}
                >
                  {isSubmitting1 ? (
                    <span className="animate-spin mr-2">
                      <Loader size={16} />
                    </span>
                  ) : null}
                  Valider
                </Button>
              </form>
            </Form>
          </div>
        ) : (
          ""
        )}

        {step === 3 ? (
          <Form {...form3}>
            <h3 className=" text-green font-bold">
              🧩 La compétence recherchée
            </h3>
            <p>
              Dis-nous ce que tu aimerais apprendre : tu pourrais être surpris
              par les compétences que notre communauté peut t'apporter!
            </p>
            <form
              onSubmit={form3.handleSubmit(onSubmit3)}
              className="space-y-8"
            >
              <FormField
                control={form3.control}
                name="search"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Je recherche *</FormLabel>
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

              <h3 className=" text-green font-bold">
                🧠 Mes skills à partager{" "}
                <span className="italic text-xs">
                  (minimum un. Plus il y en a, mieux c'est !)
                </span>
              </h3>
              <p>
                Parle-nous de tes compétences : tu pourrais inspirer d'autres
                membres à développer leurs propres talents!
              </p>

              <FormField
                control={form3.control}
                name="skill1"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Skill * ⭐️</FormLabel>
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
                control={form3.control}
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
                control={form3.control}
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
              <Button
                className="bg-green"
                type="submit"
                disabled={isSubmitting2}
              >
                {isSubmitting2 ? (
                  <span className="animate-spin mr-2">
                    <Loader size={16} />
                  </span>
                ) : null}
                Valider
              </Button>
            </form>
          </Form>
        ) : (
          ""
        )}

        {step === 4 ? (
          <Form {...form4}>
            <h3 className=" text-green font-bold">
              💻 Mes réseaux sociaux{" "}
              <span className="italic text-xs">(optionnel)</span>
            </h3>
            <p>
              Partage tes réseaux sociaux : ainsi, les autres membres pourront
              découvrir ton travail et te contacter directement s'ils sont
              intéressés!
            </p>
            <form
              onSubmit={form4.handleSubmit(onSubmit4)}
              className="space-y-8"
            >
              <FormField
                control={form4.control}
                name="website"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Mon site internet</FormLabel>
                    <FormControl>
                      <Input placeholder="https://mywebsite.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form4.control}
                name="linkedin"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Linkedin</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="https://linkedin.com/cact-us"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form4.control}
                name="instagram"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Instagram</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="https://instagram.com/cact-us"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form4.control}
                name="github"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Github</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="https://github.com/cact-us"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button
                className="bg-green"
                type="submit"
                disabled={isSubmitting3}
              >
                {isSubmitting3 ? (
                  <span className="animate-spin mr-2">
                    <Loader size={16} />
                  </span>
                ) : null}
                Valider
              </Button>
            </form>
          </Form>
        ) : (
          ""
        )}
        <Toaster position="bottom-center" reverseOrder={false} />
      </div>
    </div>
  );
}

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
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import toast, { Toaster } from "react-hot-toast";
import { useState } from "react";
import { ChevronRight, CheckCircle2, CircleDot } from "lucide-react";

const formSchema = z.object({
  username: z.string().min(2, { message: "Au moins 2 caractères" }),
  bio: z.string().min(10, { message: "Au moins 10 caractères" }),
});

const formSchemaCompetences = z.object({
  search: z.string().min(2, { message: "Au moins 2 caractères" }),
  skill1: z.string().min(2, { message: "Au moins 2 caractères" }),
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

  const form1 = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      bio: "",
    },
  });

  const form2 = useForm<z.infer<typeof formSchemaCompetences>>({
    resolver: zodResolver(formSchemaCompetences),
    defaultValues: {
      search: "",
      skill1: "",
      skill2: "",
      skill3: "",
    },
  });

  const form3 = useForm<z.infer<typeof formSchemaSocialNetworks>>({
    resolver: zodResolver(formSchemaSocialNetworks),
    defaultValues: {
      website: "",
      linkedin: "",
      instagram: "",
      github: "",
    },
  });

  async function onSubmit1(values: z.infer<typeof formSchema>) {
    try {
      const response = await fetch("/api/onboardingNewProfile", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ values }),
      });
      if (response.ok === true && response.status == 200) {
        setStep(2);
        toast.success("🎉 Super !");
        form1.reset();
      } else {
        toast.error("😢 Une erreur est survenue");
      }
    } catch (error) {
      console.log(error);
      toast.error("😢 Une erreur est survenue");
    }
  }

  async function onSubmit2(values: z.infer<typeof formSchemaCompetences>) {
    try {
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
        setStep(3);
      } else {
        toast.error("😢 Une erreur est survenue");
      }
    } catch (error) {
      console.log(error);
      toast.error("😢 Une erreur est survenue");
    }
  }

  async function onSubmit3(values: z.infer<typeof formSchemaSocialNetworks>) {
    try {
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
    }
  }

  return (
    <div className="mx-auto max-w-screen-sm mt-12 w-full lg:w-1/2 ">
      {/* gestion parcours */}
      <div className="flex flex-wrap gap-2 items-center justify-center text-dark my-8">
        {/* Step 1 */}
        {step > 1 ? <CheckCircle2 color="#0EAD69" /> : <CircleDot />}
        {step > 1 ? (
          <p className="text-green">Présentation</p>
        ) : (
          <p>Présentation</p>
        )}
        <ChevronRight />

        {/* Step 2 */}
        {step > 2 ? <CheckCircle2 color="#0EAD69" /> : <CircleDot />}
        {step > 2 ? (
          <p className="text-green">Compétences</p>
        ) : (
          <p>Compétences</p>
        )}
        <ChevronRight />

        {/* Step 3 */}
        {step > 3 ? <CheckCircle2 color="#0EAD69" /> : <CircleDot />}
        {step > 3 ? (
          <p className="text-green">Mes réseaux</p>
        ) : (
          <p>Mes réseaux</p>
        )}
      </div>

      {/* formulaires */}
      {step === 1 ? (
        <Form {...form1}>
          <form onSubmit={form1.handleSubmit(onSubmit1)} className="space-y-8">
            <FormField
              control={form1.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Prénom *</FormLabel>
                  <FormControl>
                    <Input placeholder="John Doe" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form1.control}
              name="bio"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Bio *</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Hello ! je suis professeur d'anglais et j'aime la photographie et j'aimerai apprendre l'Espagnol"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button className="bg-green" type="submit">
              Valider
            </Button>
          </form>
        </Form>
      ) : (
        ""
      )}

      {step === 2 ? (
        <Form {...form2}>
          <h3 className=" text-green font-bold">🧩 LA compétence recherchée</h3>
          <form onSubmit={form2.handleSubmit(onSubmit2)} className="space-y-8">
            <FormField
              control={form2.control}
              name="search"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Je recherche *</FormLabel>
                  <FormControl>
                    <Input placeholder="Anglais" {...field} />
                  </FormControl>
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

            <FormField
              control={form2.control}
              name="skill1"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>⭐️ Skill 1 *</FormLabel>
                  <FormControl>
                    <Input placeholder="Javascript" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form2.control}
              name="skill2"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>⭐️ Skill 2</FormLabel>
                  <FormControl>
                    <Input placeholder="Espagnol" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form2.control}
              name="skill3"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>⭐️ Skill 3</FormLabel>
                  <FormControl>
                    <Input placeholder="Photographie" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button className="bg-green" type="submit">
              Valider
            </Button>
          </form>
        </Form>
      ) : (
        ""
      )}

      {step === 3 ? (
        <Form {...form3}>
          <h3 className=" text-green font-bold">
            💻 Mes réseaux sociaux{" "}
            <span className="italic text-xs">(optionnel)</span>
          </h3>
          <form onSubmit={form3.handleSubmit(onSubmit3)} className="space-y-8">
            <FormField
              control={form3.control}
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
              control={form3.control}
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
              control={form3.control}
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
              control={form3.control}
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
            <Button className="bg-green" type="submit">
              Valider
            </Button>
          </form>
        </Form>
      ) : (
        ""
      )}
      <Toaster position="bottom-center" reverseOrder={false} />
    </div>
  );
}

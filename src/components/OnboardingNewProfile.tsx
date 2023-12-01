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

const formSchema = z.object({
  username: z.string().min(2, { message: "Au moins 2 caractères" }),
  bio: z.string().min(10, { message: "Au moins 10 caractères" }),
  search: z.string().min(2, { message: "Au moins 2 caractères" }),
  skill1: z.string().min(2, { message: "Au moins 2 caractères" }),
  skill2: z.string().optional(),
  skill3: z.string().optional(),
  website: z.string().optional(),
  linkedin: z.string().optional(),
  instagram: z.string().optional(),
  github: z.string().optional(),
});

export default function OnboardingNewProfile() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      bio: "",
      search: "",
      skill1: "",
      skill2: "",
      skill3: "",
      website: "",
      linkedin: "",
      instagram: "",
      github: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      const response = await fetch("/api/onboardingNewProfile", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ values }),
      });
      if (response.ok === true && response.status == 200) {
        toast.success("🎉 Ton profil est crée !");
        form.reset();
        if (window && window.location) {
          window.location.href = "/allprofils";
        }
      } else {
        toast.error("😢 Une erreur est survenue");
      }
    } catch (error) {
      console.log(error);
      toast.error("😢 Une erreur est survenue");
    }
  }

  return (
    <div className="mx-auto max-w-screen-sm mt-12 w-full lg:w-1/2 ">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
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
            control={form.control}
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
          <h3 className=" text-green font-bold">🧩 LA compétence recherchée</h3>
          <FormField
            control={form.control}
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
            control={form.control}
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
            control={form.control}
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
            control={form.control}
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
          <h3 className=" text-green font-bold">
            💻 Mes réseaux sociaux{" "}
            <span className="italic text-xs">(optionnel)</span>
          </h3>
          <FormField
            control={form.control}
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
            control={form.control}
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
            control={form.control}
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
            control={form.control}
            name="github"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Github</FormLabel>
                <FormControl>
                  <Input placeholder="https://github.com/cact-us" {...field} />
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
      <Toaster position="bottom-center" reverseOrder={false} />
    </div>
  );
}

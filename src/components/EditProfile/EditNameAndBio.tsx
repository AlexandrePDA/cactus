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
import { Loader } from "lucide-react";

const formSchema = z.object({
  username: z.string().optional(),
  bio: z.string().optional(),
  projet: z.string().optional(),
});

export default function EditNameAndBio() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      bio: "",
      projet: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    if (values.username === "" && values.bio === "" && values.projet === "") {
      toast.error("😢 Tu dois remplir au moins un champ");
      return;
    }
    try {
      setIsSubmitting(true);
      const response = await fetch("/api/editNameAndBio", {
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

  return (
    <div className="mx-auto max-w-screen-sm mb-12 w-full lg:w-1/2 ">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <h3 className=" text-green font-semibold">
            🌱 Un nouveau projet qui te demande une nouvelle compétence ? Tu
            veux nous en dire plus sur toi ? Tu es au bon endroit !
          </h3>
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Prénom</FormLabel>
                <FormControl>
                  <Input placeholder="Julie" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="projet"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  Dis nous en plus sur ton nouveau projet, tes compétences et ta
                  recherche
                </FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Hello ! je suis professeur d'anglais et j'aime la photographie. J'aimerai apprendre l'Espagnol"
                    {...field}
                  />
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
                <FormLabel>
                  Présente toi, qui tu es, ce que tu aimes ?
                </FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Hello ! je suis professeur d'anglais et j'aime la photographie. J'aimerai apprendre l'Espagnol"
                    {...field}
                  />
                </FormControl>
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

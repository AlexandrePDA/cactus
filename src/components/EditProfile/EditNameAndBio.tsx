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
});

export default function EditNameAndBio() {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      bio: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
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
    }
  }

  return (
    <div className="mx-auto max-w-screen-sm mb-12 w-full lg:w-1/2 ">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <h3 className=" text-green font-bold">👋🏽 À propos de moi</h3>
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Prénom</FormLabel>
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
                <FormLabel>Bio</FormLabel>
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
      <Toaster position="bottom-center" reverseOrder={false} />
    </div>
  );
}

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
  search: z.string().min(2, { message: "Au moins 2 caractères" }),
  skill1: z.string().min(2, { message: "Au moins 2 caractères" }),
  skill2: z.string().optional(),
  skill3: z.string().optional(),
});

export default function EditHaveAndSearchCompetences() {
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

    try {
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
    }
  }

  return (
    <div className="mx-auto max-w-screen-sm mb-12 w-full lg:w-1/2">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
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
                <FormLabel>Skill 1 *</FormLabel>
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
                <FormLabel>Skill 2</FormLabel>
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
                <FormLabel>Skill 3</FormLabel>
                <FormControl>
                  <Input placeholder="Photographie" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit">Submit</Button>
        </form>
      </Form>
      <Toaster position="bottom-center" reverseOrder={false} />
    </div>
  );
}

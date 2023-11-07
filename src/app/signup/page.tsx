"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import NavBar from "@/components/NavBar";
import { Footer } from "@/components/Footer";
import { CheckCircle2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

const formSchema = z.object({
  username: z.string().min(2, {
    message: "Au moins 2 caractères",
  }),
  email: z
    .string()
    .email({
      message: "Email invalide",
    })
    .min(5, {
      message: "Email invalide",
    }),
  password: z
    .string()
    .min(7, {
      message: "Au moins 7 caractères",
    })
    .refine(
      (value) => {
        return (
          /\d/.test(value) &&
          /[!@#$%^&*(),.?":{}|<>]/.test(value) &&
          /[A-Z]/.test(value)
        );
      },
      {
        message:
          "Mot de passe doit contenir au moins un chiffre, une lettre majuscule et un caractère spécial",
      }
    ),
});

export default function Signup() {
  const router = useRouter();
  const [err, setErr] = useState<boolean>(false);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
    },
  });

  // sent to bdd
  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      const response = await fetch("/api/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: values.username,
          email: values.email.toLowerCase(),
          password: values.password,
        }),
      });
      if (response.ok === true && response.status === 200) {
        const user = await response.json();

        router.push("/dashboard");
      }
      if (response.ok === false && response.status === 400) {
        const res = await response.json();
        console.log(res);
        if (res.etat === "email utilisé ou pb réseau") {
          setErr(true);
        }
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <section className="max-w-lg mx-auto my-12 p-4">
        <div className="mb-4">
          <h1 className="text-2xl font-semibold  text-dark  ">
            Inscris toi et rejoins la communauté 🌵
          </h1>

          <p className="flex items-center gap-2 mt-4 text-dark ">
            <CheckCircle2 size={20} color="#0EAD69" /> Gratuit, aucun frais
            caché
          </p>
          <p className="flex items-center gap-2 mt-4 text-dark ">
            <CheckCircle2 size={20} color="#0EAD69" /> Un profil prêt
            immédiatement
          </p>
          <p className="flex items-center gap-2 mt-4 text-dark ">
            <CheckCircle2 size={20} color="#0EAD69" /> Une communauté qui
            t'attend
          </p>
        </div>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Prénom</FormLabel>
                  <FormControl>
                    <Input placeholder="Cactus" {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="cactus@mail.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Mot de passe</FormLabel>
                  <FormControl>
                    <Input placeholder="" type="password" {...field} />
                  </FormControl>
                  <FormDescription>
                    Min 8 caractères, 1 chiffre, 1 caractère spécial, 1 lettre
                    majusucule
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            {err && (
              <Alert>
                <AlertTitle>🚨 Oups!</AlertTitle>
                <AlertDescription>
                  Email déjà utilisé, veuillez vous connecter
                </AlertDescription>
              </Alert>
            )}

            <Button className="bg-green" type="submit">
              S'inscrire 🚀
            </Button>
          </form>
        </Form>
        <button
          className="text-sm mt-4 text-gray-400 cursor-pointer"
          onClick={() => {
            router.push("/signin");
          }}
        >
          Déjà inscris ? <span className="text-green">Connecte-toi</span>
        </button>
      </section>
      <Footer />
    </>
  );
}

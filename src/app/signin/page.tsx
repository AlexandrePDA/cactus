"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import {
  Form,
  FormControl,
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
import { useRouter } from "next/navigation";
import { useState } from "react";

const formSchema = z.object({
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

export default function Signin() {
  const [err, setErr] = useState<boolean>(false);
  const router = useRouter();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  // sent to bdd
  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      const response = await fetch("/api/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: values.email.toLowerCase(),
          password: values.password,
        }),
      });
      console.log(response);
      if (response.ok === true && response.status === 200) {
        setErr(false);
        console.log("ok c'est envoyé");
        router.push("/allprofils");
      }
      if (response.ok === false && response.status === 400) {
        const res = await response.json();
        console.log(res);
        if (res.etat === "mauvais email/password ou pb réseau") {
          setErr(true);
        }
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <NavBar />

      <section className="max-w-lg mx-auto my-12 p-4">
        <div className="mb-4">
          <h1 className="text-2xl font-semibold  text-dark  ">
            Bon retour parmi nous 🌵
          </h1>
        </div>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
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

                  <FormMessage />
                </FormItem>
              )}
            />

            {err && (
              <Alert>
                <AlertTitle>🚨 Oups!</AlertTitle>
                <AlertDescription>
                Email ou mot de passe inccorect
                </AlertDescription>
              </Alert>
            )}

            <Button className="bg-green" type="submit">
              Se connecter 🚀
            </Button>
          </form>
        </Form>
        <button
          className="text-sm mt-4 text-gray-400 cursor-pointer"
          onClick={() => {
            router.push("/signup");
          }}
        >
          Pas encore de compte ? <span className="text-green">Inscris-toi</span>
        </button>
      </section>

      <Footer />
    </>
  );
}

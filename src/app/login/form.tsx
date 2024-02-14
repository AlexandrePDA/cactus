"use client";

import { signIn } from "next-auth/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { ExclamationTriangleIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import toast, { Toaster } from "react-hot-toast";
import { Loader2 } from "lucide-react";

const formSchema = z.object({
  email: z.string().email({ message: "Email invalide" }),
  password: z.string().min(8, { message: "8 caractères minimums" }),
});

export default function FormLogin() {
  const [error, setError] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setError(false);
    setLoading(true);
    const { email, password } = values;

    try {
      const response = await signIn("credentials", {
        email,
        password,
        redirect: false,
        callbackUrl: "/dashboard",
      });

      if (response?.status !== 200) {
        setError(true);
        setLoading(false);
        toast.error("Echec de l'authentification");

        return console.log("Échec de l'authentification");
      }
      toast.success("Connexion réussie");
      return (window.location.href = "/allprofils");
    } catch (error) {
      setError(true);
      setLoading(false);
      toast.error("Echec de l'authentification");

      console.error("error", error);
    } finally {
      setLoading(false);
      form.reset();
    }
  }

  return (
    <div className=" max-w-sm mx-auto border p-4 rounded-md border-gray-100 shadow-md mt-32  m-4 text-dark">
      <h2 className="my-4 text-xl text-dark text-center">🔐 Connexion</h2>
      <h3 className="text-center text-dark text-lg my-4">
        Heureux de te revoir !{" "}
      </h3>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="coucou@mail.com" {...field} />
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
                  <Input
                    type="password"
                    placeholder="************"
                    {...field}
                  />
                </FormControl>
                <FormDescription>8 caractères minimums</FormDescription>

                <FormMessage />
              </FormItem>
            )}
          />

          {error && (
            <div className="bg-destructive/15 p-3 rounded-md flex items-center gap-x-2 text-sm text-destructive my-4">
              <ExclamationTriangleIcon className="h-4 w-4" />
              <p>Mot de passe ou email invalide</p>
            </div>
          )}
          <Button
            disabled={loading}
            type="submit"
            className="flex gap-2 bg-lightorange hover:bg-lightorange"
          >
            {loading && <Loader2 className="h-5 w-5 animate-spin" />}
            <p>Connexion</p>
          </Button>
        </form>
      </Form>
      <Link
        href="/forgot-password"
        className="text-sm text-gray-600 underline mt-8 block text-center"
      >
        Mot de passe oublié?
      </Link>
      <Link
        href="/register"
        className="text-sm text-gray-600 my-2 underline  block text-center"
      >
        Pas encore de compte ?
      </Link>
      <Toaster position="bottom-center" reverseOrder={false} />
    </div>
  );
}

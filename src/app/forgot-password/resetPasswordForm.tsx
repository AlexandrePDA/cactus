/* eslint-disable react/no-unescaped-entities */
"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { set, z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { ExclamationTriangleIcon } from "@radix-ui/react-icons";
import { resetPassword } from "@/actions/resetPassword";
import toast, { Toaster } from "react-hot-toast";

const formSchema = z.object({
  email: z.string().email({ message: "Email invalide" }),
});

export default function FormRegister() {
  const [error, setError] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setError(false);
    setLoading(true);
    const { email } = values;

    try {
      const message = await resetPassword(email);
      toast.success("Email envoyé avec succès");
    } catch (error) {
      setError(true);
      setLoading(false);
      toast.error("Erreur, veuillez réessayer plus tard");
      console.log(error);
    } finally {
      setLoading(false);
      form.reset();
    }
  }

  return (
    <div className=" max-w-sm mx-auto border p-4 rounded-md border-gray-100 shadow-md mt-32  m-4 text-dark">
      <h2 className="my-4 text-xl text-dark text-center">
        Mot de passe oublié
      </h2>
      <h3 className="text-center text-dark text-lg my-4">
        Ça va arriver dans ta boîte mail 💌
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
          {error && (
            <div className="bg-destructive/15 p-3 rounded-md flex items-center gap-x-2 text-sm text-destructive my-4">
              <ExclamationTriangleIcon className="h-4 w-4" />
              <p>Erreur</p>
            </div>
          )}
          <Button
            disabled={loading}
            type="submit"
            className="bg-lightorange hover:bg-lightorange"
          >
            Recevoir l'email
          </Button>
        </form>
      </Form>
      <Toaster position="bottom-center" reverseOrder={false} />
    </div>
  );
}

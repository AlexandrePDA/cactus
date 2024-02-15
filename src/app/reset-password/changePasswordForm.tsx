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
import { changePassword } from "@/actions/resetPassword";
import toast, { Toaster } from "react-hot-toast";

const formSchema = z.object({
  password: z.string().min(8, { message: "8 caractères minimums" }),
});

interface ChangePasswordFormProps {
  resetPasswordToken: string;
}

export default function ChangePasswordForm({
  resetPasswordToken,
}: ChangePasswordFormProps) {
  const [error, setError] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      password: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setError(false);
    setLoading(true);
    const { password } = values;

    try {
      const message = await changePassword(resetPasswordToken, password);
      toast.success("Mot de passe modifié avec succès");

      return (window.location.href = "/login");
    } catch (error) {
      setError(true);
      setLoading(false);
      toast.error("Erreur, veuillez réessayer plus tard");
      console.error("error", error);
    } finally {
      setLoading(false);
      form.reset();
    }
  }

  return (
    <div className=" max-w-sm mx-auto border p-4 rounded-md border-gray-100 shadow-md mt-32  m-4 text-dark">
      <h2 className="my-4 text-xl text-dark text-center">
        Nouveau mot de passe 🪄
      </h2>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
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
              <p>Erreur</p>
            </div>
          )}
          <Button
            disabled={loading}
            type="submit"
            className="bg-lightorange hover:bg-lightorange transition-all duration-300"
          >
            Modifier
          </Button>
        </form>
      </Form>
      <Toaster position="bottom-center" reverseOrder={false} />
    </div>
  );
}

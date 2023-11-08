"use client";

import { Button } from "@/components/ui/button";
import { signIn } from "next-auth/react";

export const LoginButton = () => {
  return (
    <Button
      onClick={async () => {
        await signIn();
      }}
      className="bg-beige text-green hover:bg-slate-200"
    >
      Connexion
    </Button>
  );
};

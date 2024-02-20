"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";

export const LoginButton = () => {
  return (
    <div className="flex gap-2">
      <Link href="/login">
        <Button className="bg-lightorange hover:bg-beige hover:text-lightorange transition-all duration-300">
          Connexion
        </Button>
      </Link>
      <Link href="/register">
        <Button className="bg-lightorange hover:bg-beige hover:text-lightorange transition-all duration-300">
          S'inscrire
        </Button>
      </Link>
    </div>
  );
};

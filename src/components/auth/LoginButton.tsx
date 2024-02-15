"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";

export const LoginButton = () => {
  return (
    <div className="flex gap-2">
      <Button className="bg-lightorange hover:bg-beige hover:text-lightorange transition-all duration-300">
        <Link href="/login">Connexion</Link>
      </Button>
      <Button className="bg-lightorange hover:bg-beige hover:text-lightorange transition-all duration-300">
        <Link href="/register">S'inscrire</Link>
      </Button>
    </div>
  );
};

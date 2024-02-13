"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";

export const LoginButton = () => {
  return (
    <div className="flex gap-2">
      <Button>
        <Link href="/login">Connexion</Link>
      </Button>
      <Button>
        <Link href="/register">S'inscrire</Link>
      </Button>
    </div>
  );
};
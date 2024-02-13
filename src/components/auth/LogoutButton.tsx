"use client";

import { Button } from "@/components/ui/button";
import { signOut } from "next-auth/react";
import { LogOut } from "lucide-react";

export const LogoutButton = () => {
  return (
    <Button
      onClick={async () => {
        await signOut();
      }}
      className="md:bg-white bg-green md:text-green  text-beige w-12"
    >
      <LogOut />
    </Button>
  );
};

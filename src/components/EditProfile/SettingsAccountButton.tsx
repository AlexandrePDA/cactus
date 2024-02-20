"use client";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "../ui/button";
import toast from "react-hot-toast";
import { useState } from "react";
import { Loader2 } from "lucide-react";
import { signOut } from "next-auth/react";

interface SettingsAccountButtonProps {
  userId: string;
}

export default function SettingsAccountButton({
  userId,
}: SettingsAccountButtonProps) {
  const [loading, setLoading] = useState<boolean>(false);

  const handleDelete = async () => {
    setLoading(true);
    try {
      await signOut();
      const response = await fetch("/api/deleteAccount", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userId: userId }),
      });

      const data = await response.json();

      toast.success("Ton compte a bien été supprimé");
      window.location.href = "/";
    } catch (error) {
      setLoading(false);
      toast.error("Erreur lors de la suppression du compte");
      console.error("Erreur lors de la suppression du compte :", error);
    }
  };

  return (
    <Dialog>
      <DialogTrigger>
        <div className="text-gray-200 text-xs underline ">
          <p>Supprimer mon compte</p>
        </div>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-green text-center">
            Suppression de ton compte et de tes données
          </DialogTitle>
          <DialogDescription className="text-center my-8">
            On regrette de te voir partir.
            <br /> La suppression de ton compte effacera définitivement toutes
            tes données personnelles. <br />
            🚨 Cette action est irréversible 🚨
          </DialogDescription>
          <Button
            disabled={loading}
            onClick={handleDelete}
            className="bg-red-500"
          >
            {loading && <Loader2 className="h-5 w-5 animate-spin" />}
            <p>Supprimer</p>
          </Button>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}

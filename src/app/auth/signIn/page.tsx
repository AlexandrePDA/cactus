"use client";

import { signIn } from "next-auth/react";
import { useState } from "react";
import { CheckCircle2, Loader } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function SignIn() {
  const [email, setEmail] = useState<string>("");
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  return (
    <main className="w-full h-screen flex flex-col items-center justify-center px-4">
      <div className="max-w-sm w-full text-gray-600 space-y-8 border p-4 rounded-lg shadow-md">
        <div className="text-center">
          <div className="mt-5 space-y-2">
            <h3 className="text-dark text-lg font-bold sm:text-2xl my-8">
              Recevoir mon Magic Link ✨
            </h3>
            <div className="flex items-center justify-center">
              <div className="w-full md:w-2/3 flex flex-col items-center justify-center">
                <div className="flex flex-col  ">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 color="#0EAD69" />

                    <p>Aucun mot de passe</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 color="#0EAD69" />
                    <p className="text-left">Connexion simplifiée</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 color="#0EAD69" />

                    <p>Sécurité renforcée</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setIsSubmitted(true);
            signIn("email", {
              email: email,
              callbackUrl: "https://www.cact-us.com/allprofils/",
            });
          }}
        >
          <div>
            <label className="font-medium">Email</label>
            <input
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              name="email"
              id="email"
              value={email}
              className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-lime-600 shadow-sm rounded-lg"
            />
          </div>
          <Button
            disabled={isSubmitted}
            className="w-full mt-4 px-4 py-2 text-white font-medium bg-green  rounded-lg duration-150"
          >
            {isSubmitted ? (
              <span className="animate-spin mr-2">
                <Loader size={16} />
              </span>
            ) : null}
            Se connecter
          </Button>
        </form>
      </div>
    </main>
  );
}

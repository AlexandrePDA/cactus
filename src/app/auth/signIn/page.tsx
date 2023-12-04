"use client";

import { signIn } from "next-auth/react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function SignIn() {
  const [email, setEmail] = useState<string>("");

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          signIn("email", {
            email: email,
            callbackUrl: "https://localhost:3000/allprofils/",
          });
        }}
        action=""
      >
        <input
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          name="email"
          id="email"
          value={email}
        />
        <button className="bg-blue-500" type="submit">
          Sign in with Email
        </button>
      </form>
      <Button
        onClick={(e) => {
          e.preventDefault();
          signIn("github", {
            callbackUrl: "https://wwww.cact-us.com/allprofils/",
          });
        }}
      >
        Sign with Github
      </Button>
      <Button
        onClick={(e) => {
          e.preventDefault();
          signIn("google", {
            callbackUrl: "https://www.cact-us.com/allprofils/",
          });
        }}
      >
        Sign with Google
      </Button>
    </div>
  );
}

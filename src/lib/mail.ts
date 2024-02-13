import { ResetPasswordEmailTemplate } from "@/templates/reset-password-email";
import React from "react";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

// à remplacer par le domaine de l'app. sur vercel mettre le nom domaine
const domain = process.env.NEXT_PUBLIC_APP_URL;

export async function sendEmailWelcome(email: string) {
  await resend.emails.send({
    from: "no-reply@cact-us.com",
    to: email,
    subject: "Welcome to our app!",
    html: `<h1>Bienvenue sur notre application</h1><br>
      <p>Merci pour ton inscription!</p><br>`,
  });
}

export async function sendPasswordResetEmail(
  email: string,
  resetPasswordToken: string
) {
  await resend.emails.send({
    from: "no-reply@cact-us.com",
    to: email,
    subject: "Réinitialisation de mot de passe",
    react: ResetPasswordEmailTemplate({
      email,
      resetPasswordToken,
    }) as React.ReactElement,
  });
}

import EmailRegister from "@/components/Mail";
import { ResetPasswordEmailTemplate } from "@/templates/reset-password-email";
import React from "react";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const domain = process.env.NEXT_PUBLIC_APP_URL;

export async function sendEmailWelcome(email: string) {
  await resend.emails.send({
    from: "no-reply@cact-us.com",
    to: email,
    subject: "Bienvenue Cact-user !",
    react: EmailRegister() as React.ReactElement,
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

export async function SendEmaiSuperMatch(email: string) {
  await resend.emails.send({
    from: "no-reply@cact-us.com",
    to: email,
    subject: "SuperMatch trouvé ! 🎉",
    html: `<h1>Il y a un profil qui correspond à ta recherche !</h1>
      <p>Connecte-toi dès maintenant pour échanger avec le cact-user !.</p>
      <p>À bientôt!</p>`,
  });
}

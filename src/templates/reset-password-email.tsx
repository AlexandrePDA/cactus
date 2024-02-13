import * as React from "react";

interface ResetPasswordEmailTemplateProps {
  email: string;
  resetPasswordToken: string;
}
const domain = process.env.NEXT_PUBLIC_APP_URL;

export const ResetPasswordEmailTemplate: React.FC<
  ResetPasswordEmailTemplateProps
> = ({ email, resetPasswordToken }: ResetPasswordEmailTemplateProps) => (
  <div>
    <h2>Hey 👋🏽</h2>
    <p>Pour configurer un nouveau mot de passe, cliquez sur le lien :</p>
    <a href={`${domain}/reset-password?token=${resetPasswordToken}`}>
      juste là 🚀
    </a>
    <br />
    <p>
      Si vous n'avez fait aucune demande de réinitialisation de mot de passe, ne
      prenez pas en compte ce mail.
    </p>
    <br />
    <p>Cact-us 🌵</p>
  </div>
);

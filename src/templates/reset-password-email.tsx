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
    <h1>Hey {email}</h1>
    <p>Pour configurer un nouveau mot de passe, click sur le lien :</p>
    <br />
    <a href={`${domain}/reset-password?token=${resetPasswordToken}`}>ici</a>
    <br />
  </div>
);

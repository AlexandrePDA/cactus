import * as React from "react";
import {
  Body,
  Button,
  Container,
  Heading,
  Img,
  Row,
  Section,
} from "@react-email/components";
import { Html } from "@react-email/html";

interface ResetPasswordEmailTemplateProps {
  email: string;
  resetPasswordToken: string;
}
const domain = process.env.NEXT_PUBLIC_APP_URL;

export const ResetPasswordEmailTemplate: React.FC<
  ResetPasswordEmailTemplateProps
> = ({ email, resetPasswordToken }: ResetPasswordEmailTemplateProps) => (
  <Html lang="fr">
    <Body className="bg-offwhite text-base font-sans">
      <Container className="bg-white p-45">
        <Heading className="text-center my-0 leading-8">
          Réinitialisation de mot de passe 🌵
        </Heading>

        <Section>
          <Row>
            <p>
              Oups, tu as oublié ton mot de passe...
              <br />
              Pas d'inquiètude, pour configurer un nouveau mot de passe, clique
              sur le lien :
              <a href={`${domain}/reset-password?token=${resetPasswordToken}`}>
                juste là
              </a>
              🚀
              <br />
            </p>
          </Row>
          Cact-Us 🌵
        </Section>
      </Container>
    </Body>
  </Html>
);

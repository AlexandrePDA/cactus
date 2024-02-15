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

export function EmailRegister() {
  return (
    <Html lang="fr">
      <Body className="bg-offwhite text-base font-sans">
        <Container className="bg-white p-45">
          <Heading className="text-center my-0 leading-8">Bienvenue 🌵</Heading>

          <Section>
            <Row>
              <p>
                Féliciations, tu viens de rejoindre la communauté des
                Cact-Users.
                <br />
                Maintenant, crées ton profil, renseigne ton besoin et partages
                tes compétences.
                <br />
              </p>
            </Row>
            Cact-Us 🌵
          </Section>
        </Container>
      </Body>
    </Html>
  );
}

export default EmailRegister;

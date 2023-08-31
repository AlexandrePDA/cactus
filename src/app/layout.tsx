import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { Inter } from "next/font/google";
import dynamic from "next/dynamic";
import { Metadata } from "next";
import logo from "../../public/assets/Logo_cactus_round.png";

// Importez le composant Crisp avec le chargement dynamique
const CrispWithNoSSR = dynamic(() => import("../Components/crisp"));

// Créez l'objet Inter pour les styles de police
const inter = Inter({ subsets: ["latin"] });

// Définissez les métadonnées
export const metadata: Metadata = {
  title: "Cact-us",
  description: "Apprends. Partage. Rencontre - Cact-Us, la 1re plateforme d'échange de compétences 100% gratuite 🚀 Pratique et ludique, Cact-Us remet l'humain au coeur de l'apprentissage 🎯",
  keywords:
    "compétences, échange, cact-us, apprendre, plateforme, skills, need",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const bodyStyles = {
    backgroundColor: "#fffaf2",
  };

  return (
    <html lang="fr">
      <head>
        {/* Placez ici les balises meta, link, etc. si nécessaire */}
        {/* Balises meta standard */}
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        {/* Balises meta spécifiques */}
        <meta name="description" content="Apprends. Partage. Rencontre - Cact-Us, la 1re plateforme d'échange de compétences 100% gratuite 🚀 Pratique et ludique, Cact-Us remet l'humain au coeur de l'apprentissage 🎯" />
        <meta
          name="keywords"
          content="compétences, échange, cact-us, apprendre, plateforme, skills, need, apprentissage, free, gratuit, humain"
        />
        <meta name="author" content="Cact-Us" />

        {/* Balises Open Graph pour les partages sur les réseaux sociaux */}
        <meta property="og:title" content="Cact-Us" />
        <meta
          property="og:description"
          content="Cact-Us, la 1re plateforme d'échange de compétences 100% gratuite 🚀 Pratique et ludique, Cact-Us remet l'humain au coeur de l'apprentissage 🎯"
        />
        <meta
          property="og:image"
          content="../../public/assets/Logo_cactus_round.png"
        />
        <meta property="og:url" content="https://www.cact-us.com" />
        <meta property="og:type" content="website" />

        {/* Balises Twitter Card pour les partages sur Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content="Cact-Us" />
        <meta name="twitter:title" content="Apprends. Partage. Rencontre" />
        <meta
          name="twitter:description"
          content="Cact-Us, la 1re plateforme d'échange de compétences 100% gratuite 🚀 Pratique et ludique, Cact-Us remet l'humain au coeur de l'apprentissage 🎯"
        />
        <meta
          name="twitter:image"
          content="../../public/assets/Logo_cactus_round.png"
        />
      </head>
      <body style={bodyStyles} className={inter.className}>
        <CrispWithNoSSR />
        {children}
        <Analytics />
      </body>
    </html>
  );
}

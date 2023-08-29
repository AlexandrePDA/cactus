import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { Inter } from "next/font/google";
import dynamic from 'next/dynamic';
import { Metadata } from "next";


// Importez le composant Crisp avec le chargement dynamique
const CrispWithNoSSR = dynamic(() => import('../components/crisp'));

// Créez l'objet Inter pour les styles de police
const inter = Inter({ subsets: ["latin"] });

// Définissez les métadonnées
export const metadata: Metadata = {
  title: "Cact-us",
  description: "Apprends. Partage. Rencontre",
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const bodyStyles = {
    backgroundColor: '#fffaf2', 
  };

  return (
    <html lang="fr">
      <head>
        {/* Placez ici les balises meta, link, etc. si nécessaire */}
      </head>
      <body style={bodyStyles} className={inter.className}>
        <CrispWithNoSSR />
        {children}
        <Analytics />
      </body>
    </html>
  );
}






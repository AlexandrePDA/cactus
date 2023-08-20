import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Footer } from "@/Components/Footer";
import NavBar from "@/Components/NavBar";
//import { Providers } from "@/Components/Providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Cact-us",
  description: "Apprends. Partage. Rencontre",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className={inter.className}>
        
         {children}
          <Analytics />
   
      </body>
    </html>
  );
}

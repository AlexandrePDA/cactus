import "./globals.css";
import { Analytics } from '@vercel/analytics/react';
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Footer } from "@/Components/Footer";
import NavBar from "@/Components/NavBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Cact-us",
  description: "compétences, ensemble",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className={inter.className}>
        <NavBar/>
        <div className='bg-beige font-quicksand'>
          {children}
        </div>
        <Analytics />
        <Footer/>
      </body>
    </html>
  );
}

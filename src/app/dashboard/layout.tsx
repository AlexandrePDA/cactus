import { authConfig } from "@/pages/api/auth/[...nextauth]";
import { getServerSession } from "next-auth";
import Link from "next/link";
import React from "react";
import Image from "next/image";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authConfig);

  const profileImage = session?.user.image || "";

  return (
    <div className="md:flex md:flex-row">
      <div className="hidden md:block  h-dvh w-60  m-2 rounded-md shadow-2xl border p-2">
        <div className="mt-4 sticky top-12 flex flex-col gap-8">
          <Link
            href="/dashboard"
            className="flex gap-2 items-center rounded-md shadow p-2 text-white bg-[#287d6c] hover:bg-lightorange hover:text-dark transition-all duration-300 focus:bg-lightorange focus:text-dark"
          >
            <Image
              src={profileImage}
              alt="profile"
              width={50}
              height={50}
              className="rounded-full shadow-md  h-8 w-8 object-cover object-center"
            />
            {session?.user.name}
          </Link>
          <Link
            className="text-green p-2  rounded-md hover:bg-green hover:text-beige transition-all duration-300 focus:bg-green focus:text-white"
            href="/dashboard/apropos"
          >
            🌵 À propos de moi
          </Link>
          <Link
            className="text-green p-2  rounded-md hover:bg-green hover:text-beige transition-all duration-300 focus:bg-green focus:text-white"
            href="/dashboard/competences"
          >
            🚀 Compétences
          </Link>
          <Link
            className="text-green p-2 rounded-md hover:bg-green hover:text-beige transition-all duration-300 focus:bg-green focus:text-white"
            href="/dashboard/mesreseaux"
          >
            👩🏽‍💻 Mes réseaux
          </Link>
        </div>
      </div>
      {children}
    </div>
  );
}

import { Coffee, Book, Github, Linkedin } from "lucide-react";
import Link from "next/link";
import { getServerSession } from "next-auth";
import { authConfig } from "@/pages/api/auth/[...nextauth]";
import SettingsAccountButton from "./EditProfile/SettingsAccountButton";

export const Footer = async () => {
  const session = await getServerSession(authConfig);
  return (
    <div className=" bg-green ">
      <footer className=" max-w-screen-xl mx-auto text-white  py-8">
        <div className="container flex items-center justify-center gap-2 flex-col lg:flex-row p-6 mx-auto space-y-4 sm:space-y-0 ">
          <Link
            className="flex gap-2 items-center bg-lightorange py-2 px-4 rounded-xl"
            href="https://www.buymeacoffee.com/cactus1"
          >
            Soutiens Cact-Us
            <Coffee size={20} color="#fffaf2" />
          </Link>
          <Link
            className="flex gap-2 items-center mb-4 bg-lightorange py-2 px-4  rounded-xl"
            href="https://www.linkedin.com/company/cact-us1/"
          >
            Follow
            <Linkedin size={20} color="white" />
          </Link>
          <Link
            href="https://alexandre-blog.vercel.app/"
            className="flex items-center gap-2 mb-4 bg-lightorange py-2 px-4  rounded-xl"
          >
            Blog
            <Book size={20} color="white" />
          </Link>
        </div>
        <div className="flex gap-4 text-xs items-center justify-center my-2 flex-wrap">
          <Link className="underline" href="/#nous">
            Qui sommes-nous ?{" "}
          </Link>
          |
          <Link className="underline" href="/#whatis">
            Notre concept{" "}
          </Link>
          |
          <Link className="underline" href="/#faq">
            FAQ
          </Link>
        </div>
        <div className="flex items-center justify-center mb-8">
          {session ? <SettingsAccountButton userId={session.user.id} /> : ""}
        </div>
        <div className="container flex flex-col items-center justify-between p-6 mx-auto space-y-4 sm:space-y-0 sm:flex-row">
          <p className="text-sm ">
            ©Cact-Us - Copyright 2024. All Rights Reserved.
          </p>
          <a className="text-sm" href="/mentions-legales">
            Mentions Légales
          </a>
        </div>
        {/* <div className="flex -mx-2"></div>
          <div className="flex  items-center">
             <p className="text-sm">
              Made by <span className="text-lightorange">Alexandre</span>
            </p> 
            <a
              href="https://www.linkedin.com/in/alexandre-pires-de-almeida"
              className="mx-2 text-2xl text-lightorange transition-colors duration-300   "
              aria-label="Linkedin"
            >
              <Linkedin size={16} color="white" />
            </a>

            <a
              href="https://github.com/AlexandrePDA"
              className=" text-2xl text-lightorange transition-colors duration-300  "
              aria-label="Github"
            >
              <Github size={16} color="white" />
            </a> 
          </div>
        </div> */}
      </footer>
    </div>
  );
};

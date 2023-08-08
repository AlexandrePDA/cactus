import { Linkedin } from "lucide-react";
import { Github } from "lucide-react";

export const Footer = () => {
  return (
    <div className="bg-green font-quicksand ">
      <footer className=" max-w-screen-xl mx-auto text-white mt-12 py-8">
        <div className="container flex flex-col items-center justify-between p-6 mx-auto space-y-4 sm:space-y-0 sm:flex-row">
          <p className="text-lg ">
            ©Cact-Us - Copyright 2023. All Rights Reserved.
          </p>

          <div className="flex -mx-2"></div>
          <div className="flex justify-between items-center">
            <p className="text-lg">
              Made by <span className="text-darkgreen">Alexandre</span>
            </p>
            <a
              href="https://www.linkedin.com/in/alexandre-pires-de-almeida"
              className="mx-2 text-2xl text-darkgreen transition-colors duration-300   "
              aria-label="Linkedin"
            >
              <Linkedin size={20} color="white" />
            </a>

            <a
              href="https://github.com/AlexandrePDA"
              className=" text-2xl text-darkgreen transition-colors duration-300  "
              aria-label="Github"
            >
              <Github size={20} color="white" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

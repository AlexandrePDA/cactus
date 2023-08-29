import { Footer } from "@/Components/Footer";
import NavBar from "@/Components/NavBar";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import { Sun } from "lucide-react";
import { Sprout } from "lucide-react";
import { Repeat } from "lucide-react";
import logo from "../../../public/assets/Logo_cactus_round.png";

{
  /* if pas de jwt route.push("/")
   */
}

export default function AllProfils() {
  return (
    <div className="bg-beige">
      <NavBar />

      {/* chemin */}
      <div className="hidden md:flex md:items-center md:p-8 md:overflow-x-auto ">
        <Link href="/" className="text-dark">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5 text-green"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
          </svg>
        </Link>

        <span className="mx-5 text-gray-500  rtl:-scale-x-100">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </span>

        <p className="text-dark">Profils</p>
      </div>

      <h2 className="text-center px-2 mt-12 text-2xl sm:text-4xl text-dark font-semibold">
        Trouve ta{" "}
        <span className="bg-gradient-to-r from-desertred to-green bg-clip-text text-transparent">
          pépite
        </span>{" "}
        parmi nos{" "}
        <span className="bg-gradient-to-r from-desertred to-green bg-clip-text text-transparent">
          CactUsers
        </span>{" "}
        !
      </h2>

      <h3 className="text-center text-dark text-md sm:text-xl p-4">
        Informatique, langues, arts... À chaque domaine, ses experts. <br />
        Consulte notre selection pour y trouver la compétence dont tu as besoin.{" "}
        <br /> Un des profils recherche ce que tu possèdes ? C'est l'heure des
        présentations !
      </h3>

      <section className="text-dark mt-12 body-font">
        <div className="container px-5 py-4 mx-auto">
          <div className="flex flex-wrap -m-4">
            <div className="p-4 w-full lg:w-1/3">
              <div className="bg-beige text-dark flex w-full flex-col items-center justify-center h-full bg-beige  px-8 py-8 rounded-lg overflow-hidden text-center relative shadow-2xl">
                <Image
                  className="object-cover w-32 h-32   rounded-full ring ring-white"
                  src={logo}
                  alt="logo cact-us"
                  width={500}
                  height={500}
                />

                <h2 className=" text-2xl font-semibold  my-4">Cact-Us</h2>

                {/* je partage, je reçois */}
                <div className="flex items-center w-full gap-2 mb-4">
                  <Sun color="#f19410" size={28} />
                  <p>Anglais, Python, Dessin</p>
                </div>

                <div>
                  <Repeat color="#4b5563" size={28} />
                </div>

                <div className="flex items-center w-full gap-2 my-4">
                  <Sprout color="#11671D" size={28} />
                  <p>DevOps</p>
                </div>

                <button className=" w-full px-6 py-3 mt-4 text-sm  text-white bg-green rounded-lg ">
                  <p className="mx-auto">Voir le profil</p>
                </button>
              </div>
            </div>


            
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

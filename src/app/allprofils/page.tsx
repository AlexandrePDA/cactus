import Image from "next/image";
import React from "react";
import { Sun } from "lucide-react";
import { Sprout } from "lucide-react";
import { Repeat } from "lucide-react";
import logo from "../../../public/assets/Logo_cactus_round.png";
import { get } from "http";
import { getServerSession } from "next-auth";
import { authConfig } from "@/pages/api/auth/[...nextauth]";
import { redirect } from "next/navigation";

export default function AllProfils() {
  const session = getServerSession(authConfig);

  if (!session) redirect("/");

  return (
    <div className="bg-beige">
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
        Consulte notre selection pour y trouver la compétence dont tu as besoin.
        <br /> Un des profils recherche ce que tu possèdes ? C'est l'heure des
        présentations
      </h3>

      <section className="text-dark mt-12 body-font">
        <div className="container px-5 py-4 mx-auto">
          <div className="flex flex-wrap -m-4">
            <div className="p-4 w-full lg:w-1/3">
              <div className=" text-dark flex w-full flex-col items-center justify-center h-full bg-beige  px-8 py-8 rounded-lg overflow-hidden text-center relative shadow-2xl">
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
    </div>
  );
}

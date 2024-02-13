import { HeartHandshake } from "lucide-react";
import { Share2 } from "lucide-react";
import { ArrowUpDown } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="bg-beige mx-auto max-w-screen-xl   ">
      <div className="  px-4 py-16 lg:flex lg:h-screen lg:items-center">
        <div className="mx-auto text-center">
          <h1 className="p-4 font-extrabold text-5xl lg:text-7xl">
            <span className="bg-gradient-to-r from-desertred to-green bg-clip-text text-transparent">
              Apprends.
              <br />
            </span>
            <span className="text-green">
              Partage.
              <br />
            </span>
            <span className="bg-gradient-to-l from-desertred to-green bg-clip-text text-transparent">
              Rencontre.
              <br />
            </span>
          </h1>

          <h3 className="mx-auto px-2 text-dark mt-4 max-w-2xl text-lg">
            Cact-Us, c'est la solution pour les curieux qui souhaitent partager
            leur expérience pour monter en compétence. Inscris-toi sur la
            plateforme, décris ton besoin, présente tes qualifications : c'est
            parti ! 🚀
          </h3>
          <div className="flex flex-wrap gap-8 justify-center items-center mt-8">
            <Link href="#whatis">
              <Button className="bg-green text-white">En savoir plus</Button>
            </Link>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between mt-12">
            <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
              <div className="flex flex-col items-center gap-2 border border-gray-200 px-4 py-6 rounded-lg">
                <HeartHandshake size={28} color="#0EAD69" strokeWidth={2.25} />
                <p className="leading-relaxed">Gratuit, pas de frais caché</p>
              </div>
            </div>
            <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
              <div className="flex flex-col items-center gap-2 border border-gray-200 px-4 py-6 rounded-lg">
                <ArrowUpDown size={28} color="#0EAD69" strokeWidth={2.25} />
                <p className="leading-relaxed">Partage tes compétences</p>
              </div>
            </div>
            <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
              <div className="flex flex-col items-center gap-2 border border-gray-200 px-4 py-6 rounded-lg">
                <Share2 size={28} color="#0EAD69" strokeWidth={2.25} />
                <p className="leading-relaxed">Élargis ton réseau</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

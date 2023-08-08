//import ButtonCTA from "../ui/Buttons/ButtonCTA";
import TakeMail from "@/Components/Home/TakeMail";


{
  /* mettre le logo sur un coté 
  revoir style */
}

export default function Hero() {
  return (
    <section className="bg-beige mx-auto max-w-screen-xl  font-quicksand ">
      <div className="  px-4 py-32 lg:flex lg:h-screen lg:items-center">
        <div className="mx-auto text-center">
          <h1 className="bg-gradient-to-r from-desertred to-green bg-clip-text text-transparent     p-4 text-desertred  font-extrabold text-4xl  lg:text-6xl">
            Apprends. Partage. Rencontre. 
          </h1>
          <h1 className="p-4 text-desertred bg-clip-text font-extrabold text-lg  md:text-2xl">
            Première plateforme d'échange de compétences
          </h1>

          <p className="mx-auto  px-2 text-dark mt-4 max-w-2xl text-lg">
            Cact-Us, c'est la solution pour les curieux qui souhaitent partager
            leur experience et grimper en compétence. Pas de frais caché, la
            seule monnaie, c'est tes connaissances. Inscris-toi sur la
            plateforme, renseigne ton besoin et tes qualifications. C'est parti
            ! 🚀
          </p>

          <TakeMail />

          {/* 
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <ButtonCTA item="En savoir plus" href="/#whatis" />
          </div>
            */}
          <div className="flex flex-col md:flex-row items-center justify-between mt-8">
            <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
              <div className="flex flex-col items-center gap-2 border border-gray-200 px-4 py-6 rounded-lg">

                <p className="leading-relaxed">Gratuit, pas de frais caché</p>
              </div>
            </div>
            <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
              <div className="flex flex-col items-center gap-2 border border-gray-200 px-4 py-6 rounded-lg">

                <p className="leading-relaxed">Rencontre, élargis ton réseau</p>
              </div>
            </div>
            <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
              <div className="flex flex-col items-center gap-2 border border-gray-200 px-4 py-6 rounded-lg">

                <p className="leading-relaxed">Partage tes compétences</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}





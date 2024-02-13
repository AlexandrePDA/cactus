import Image from "next/image";
import man from "../../../public/assets/cact-us_man.jpg";
import woman from "../../../public/assets/cact-us_woman.jpg";
import { Repeat } from "lucide-react";

export default function Whatis() {
  return (
    <div id="whatis">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#1C6758"
          fillOpacity="1"
          d="M0,160L1440,0L1440,320L0,320Z"
        ></path>
      </svg>
      <section id="whatis" className="text-beige bg-green pb-12 lg:-mt-32 ">
        <section className="text-beige max-w-screen-xl mx-auto">
          <div className="container px-6 py-10 mx-auto">
            <div className="flex flex-col">
              <div className="flex flex-wrap flex-col  py-6 md:mb-12">
                <h2 className="text-3xl font-bold sm:text-4xl">Le concept </h2>
                <div className="mt-2 mb-4">
                  <span className="inline-block w-40 h-1 bg-desertred rounded-full"></span>
                  <span className="inline-block w-3 h-1 ml-1 bg-desertred rounded-full"></span>
                  <span className="inline-block w-1 h-1 ml-1 bg-desertred rounded-full"></span>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
              <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
                <h2 className="text-xl font-semibold mb-6 text-center">
                  Antoine vit aux{" "}
                  <span className="p-1 bg-desertred text-white rounded-lg">
                    États-Unis
                  </span>{" "}
                  et veut se lancer sur{" "}
                  <span className="border-b-4 border-white">Youtube</span>
                </h2>
                <div className="rounded-lg h-72 overflow-hidden">
                  <Image
                    alt="content"
                    width={500}
                    height={500}
                    className="object-cover border-4 border-beige object-center h-full w-full rounded-lg"
                    src={man}
                  />
                </div>

                <p className="text-center mt-4">
                  Depuis New-York, Antoine a pu aider Amel à progresser en
                  anglais. Elle a récemment obtenu 936 points à son TOEIC ⚡️
                </p>
              </div>

              <div className="mb-8">
                <Repeat color="#fffaf2" size={28} />
              </div>

              <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
                <h2 className="text-xl font-semibold text-center mb-6 ">
                  Amel est{" "}
                  <span className="p-1 bg-beige text-desertred rounded-lg">
                    monteuse vidéo
                  </span>{" "}
                  et veut apprendre{" "}
                  <span className=" border-b-4 border-desertred">
                    l'anglais
                  </span>
                </h2>
                <div className="rounded-lg h-72 overflow-hidden">
                  <Image
                    alt="content"
                    width={500}
                    height={500}
                    className="object-cover border-4 border-beige object-center h-full w-full rounded-lg"
                    src={woman}
                  />
                </div>

                <p className="text-center mt-4">
                  De son côté, Amel a accompagné Antoine dans son apprentissage
                  du montage vidéo. Il vient de fêter ses 1.000 abonnés 🎉
                </p>
              </div>

              <h2 className="p-2 text-xl max-w-xl mt-8 sm:mt-12 text-center font-semibold  mb-6 ">
                <span className=" border-b-4 border-desertred">Ensemble</span>,
                ils ont atteint leurs <span className="">objectifs</span>.
                <br /> Ils ont même prévu de se retrouver pour le{" "}
                <span className="p-1 bg-beige text-desertred rounded-lg">
                  Nouvel An.
                </span>
              </h2>
            </div>
          </div>
        </section>

        {/* benefits */}
        <div className="container mt-12 px-6 py-10 mx-auto">
          <h2 className="text-3xl font-bold sm:text-4xl">Pourquoi Cact-Us ?</h2>
          <div className="mt-2 mb-12">
            <span className="inline-block w-40 h-1 bg-desertred rounded-full"></span>
            <span className="inline-block w-3 h-1 ml-1 bg-desertred rounded-full"></span>
            <span className="inline-block w-1 h-1 ml-1 bg-desertred rounded-full"></span>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="block rounded-xl border border-transparent p-8 shadow-xl bg-beige">
              <h2 className="mt-4 text-xl font-bold text-dark">
                😎 Dis adieu à la solitude
              </h2>

              <p className="mt-1 text-lg text-dark">
                Avec Cact-Us, finis de paniquer seul devant ton écran ! Crée ton
                profil, cherche la compétence qu'il te faut et échange avec les
                CactUsers.
              </p>
            </div>
            <div className="block rounded-xl border border-transparent p-8 shadow-xl bg-beige">
              <h2 className="mt-4 text-xl font-bold text-dark">
                🤝 Fais des rencontres
              </h2>

              <p className="mt-1 text-lg text-dark">
                Rejoins les utilisateurs de la plateforme. Échangez vos
                contacts, élargis ton réseau et noue de nouvelles relations.
              </p>
            </div>
            <div className="block rounded-xl border border-transparent p-8 shadow-xl bg-beige">
              <h2 className="mt-4 text-xl font-bold text-dark">
                🔎 Trouve ta pépite
              </h2>

              <p className="mt-1 text-lg text-dark">
                Ce que tu cherches, quelqu'un l'a. Et ce que tu as, quelqu'un le
                cherche. Avec Cact-Us, entrez en relation et partagez bien plus
                que des compétences.
              </p>
            </div>
            <div className="block rounded-xl border border-transparent p-8 shadow-xl bg-beige">
              <h2 className="mt-4 text-xl font-bold text-dark">
                📈 Développe tes compétences
              </h2>

              <p className="mt-1  text-lg text-dark">
                Booste tes capacités au contact de professionnels, experts dans
                leur domaine. Et la petite graine devient cactus.
              </p>
            </div>{" "}
            <div className="block rounded-xl border border-transparent p-8 shadow-xl  bg-beige">
              <h2 className="mt-4 text-xl font-bold text-dark">
                🥳 Profite gratuitement
              </h2>

              <p className="mt-1 text-lg text-dark">
                Inscris-toi et bénéficie immédiatement de tous les services de
                Cact-Us. Pas de frais cachés : la seule monnaie, c'est tes
                connaissances.
              </p>
            </div>
            <div className="block rounded-xl border border-transparent p-8 shadow-xl bg-beige">
              <h2 className="mt-4 text-xl font-bold text-dark">
                🧠 Apprends et transmets
              </h2>

              <p className="mt-1 text-lg text-dark">
                Parce qu'on est plus riche quand on donne, devient ambassadeur
                de ton domaine et partage ton savoir à ceux qui en ont besoin.
              </p>
            </div>
          </div>
        </div>
      </section>
      <svg
        className="-mt-0.5"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path
          fill="#1C6758"
          fillOpacity="1"
          d="M0,160L1440,0L1440,0L0,0Z"
        ></path>
      </svg>
    </div>
  );
}

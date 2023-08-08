import Image from "next/image";

export default function Whatis() {
  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#0EAD69"
          fillOpacity="1"
          d="M0,160L1440,0L1440,320L0,320Z"
        ></path>
      </svg>
      <section
        id="whatis"
        className=" bg-green  font-quicksand pb-12 lg:-mt-32 "
      >
        <div className=" text-beige max-w-screen-xl mx-auto">
          <div className="mx-auto  px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8">
            <div className="mx-auto  text-center">
              <div className="flex items-center justify-center mb-12">
                <div className="flex items-center justify-center">
                  <Image
                    className="object-cover w-12 h-12 md:w-32 md:h-32 -mx-2 rounded-full ring ring-white dark:ring-gray-900"
                    src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=4&w=880&h=880&q=100"
                    alt=""
                    width={500}
                    height={500}
                  />
                  <Image
                    className="object-cover w-12 h-12 md:w-32 md:h-32 -mx-2 rounded-full ring ring-white dark:ring-gray-900"
                    src="https://images.unsplash.com/photo-1464863979621-258859e62245?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=4&w=686&h=686&q=80"
                    alt=""
                    width={500}
                    height={500}
                  />
                  <Image
                    className="object-cover w-12 h-12 md:w-32 md:h-32 -mx-2 rounded-full ring ring-white dark:ring-gray-900"
                    src="https://images.unsplash.com/photo-1485178575877-1a13bf489dfe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=4&w=1401&h=1401&q=80"
                    alt=""
                    width={500}
                    height={500}
                  />
                  <Image
                    className="object-cover w-12 h-12 md:w-32 md:h-32 -mx-2 rounded-full ring ring-white dark:ring-gray-900"
                    src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=4&w=880&h=880&q=80"
                    alt=""
                    width={500}
                    height={500}
                  />
                </div>
              </div>
              <h2 className="text-lg md:text-2xl mb-4 px-4 leading-2">
                Antoine vit aux{" "}
                <span className="p-1 bg-desertred text-white rounded-lg">
                  États-Unis
                </span>{" "}
                et veut se lancer sur{" "}
                <span className=" border-b-4 border-desertred">Youtube</span>,
              </h2>
              <h2 className="text-lg md:text-2xl mb-4 px-4 leading-2">
                Merwan est{" "}
                <span className="p-1 bg-beige text-desertred rounded-lg">
                  développeur
                </span>{" "}
                et veut devenir{" "}
                <span className=" border-b-4 border-white">freelance</span>,
              </h2>
              <h2 className="text-lg md:text-2xl mb-4 px-4 leading-2">
                Amel est{" "}
                <span className="p-1 bg-desertred text-white rounded-lg">
                  monteuse vidéo
                </span>{" "}
                et veut apprendre{" "}
                <span className=" border-b-4 border-desertred">l'anglais</span>,
              </h2>

              <h2 className="text-lg md:text-2xl mb-4  px-2 leading-2">
                Julie est{" "}
                <span className="p-1 bg-beige text-desertred rounded-lg">
                  designer indépendante
                </span>{" "}
                et veut {" "}
                <span className=" border-b-4 border-white">créer son site</span>.
              </h2>

              
             
              <p className="mt-12 text-2xl text-beige">
                Amel et Antoine se rencontrent, partagent leur
                expérience et développent leurs compétences.
              </p>
             
            </div>

            <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              <div className="block rounded-xl border border-transparent p-8 shadow-xl bg-beige">
                <h2 className="mt-4 text-xl font-bold text-dark">
                  Dis adieu à la solitude
                </h2>

                <p className="mt-1 text-lg text-dark">
                  Avec Cact-Us, finis de paniquer seul devant ton écran! Crée
                  ton profil, trouve la compétence qu'il te faut et paye avec
                  ton experience.
                </p>
              </div>
              <div className="block rounded-xl border border-transparent p-8 shadow-xl bg-beige">
                <h2 className="mt-4 text-xl font-bold text-dark">
                  Fais des rencontres
                </h2>

                <p className="mt-1 text-lg text-dark">
                  Communique avec les utilisateurs de la
                  plateforme, échange ton contact et élargis ton réseau.
                </p>
              </div>
              <div className="block rounded-xl border border-transparent p-8 shadow-xl bg-beige">
                <h2 className="mt-4 text-xl font-bold text-dark">
                  Trouve ta pépite
                </h2>

                <p className="mt-1 text-lg text-dark">
                  Ce que tu cherches, quelqu'un l'a. Et ce que tu as, quelqu'un
                  le cherche. Avec Cact-Us entrez en relation et partagez bien
                  plus que des compétences.
                </p>
              </div>
              <div className="block rounded-xl border border-transparent p-8 shadow-xl bg-beige">
                <h2 className="mt-4 text-xl font-bold text-dark">
                  Développe tes compétences
                </h2>

                <p className="mt-1 text-justify text-lg text-dark">
                  Booste tes capacités au contact de professionnels, experts
                  dans leur domaine. Et la petite graine devient cactus.
                </p>
              </div>{" "}
              <div className="block rounded-xl border border-transparent p-8 shadow-xl  bg-beige">
                <h2 className="mt-4 text-xl font-bold text-dark">
                  Gratuit et transparent
                </h2>

                <p className="mt-1 text-lg text-gray-800">
                  Inscris-toi et profite immédiatement de tous les service de
                  Cact-Us. Pas de frais cachés : la seule monnaie, c'est tes
                  connaissances.
                </p>
              </div>
              <div className="block rounded-xl border border-transparent p-8 shadow-xl bg-beige">
                <h2 className="mt-4 text-xl font-bold text-dark">
                  Apprendre et transmettre
                </h2>

                <p className="mt-1 text-lg text-dark">
                  Parce qu'on est plus riche quand on donne, devient ambassadeur
                  de ton domaine et partage ton savoir à ceux qui en ont besoin.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <svg className="-mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#0EAD69"
          fillOpacity="1"
          d="M0,160L1440,0L1440,0L0,0Z"
        ></path>
      </svg>
    </>
  );
}

import Image from "next/image";
import logo from "../../../public/assets/Logo_cactus_round.png";

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
      <section id="whatis" className="text-beige bg-green pb-12 lg:-mt-32 ">
        {/* story Antoine & Amel */}
        <div className="text-beige pt-8 p-4 max-w-screen-sm mx-auto">
          <div className="lg:flex lg:items-center">
            <div className="w-full space-y-12">
              <div>
                <h2
                  className="text-3xl
                  sm:text-4xl bg-green text-center font-semibold w-full  "
                >
                  Cact-Us c'est des{" "}
                  <span className="p-1 bg-desertred text-white rounded-lg">
                    histoires
                  </span>
                </h2>
              </div>

              <div className="md:flex md:items-start md:-mx-4">
                <span className="inline-block p-2 text-blue-500 bg-blue-100 rounded-xl md:mx-4 ">
                  {/* logo */}
                </span>

                <div className="mt-4 md:mx-4 md:mt-0">
                  <h3 className="text-xl font-semibold text-beige  ">
                    Des besoins
                  </h3>

                  <p className="mt-3 text-beige">
                    Antoine vit aux{" "}
                    <span className="p-1 bg-desertred text-white rounded-lg">
                      États-Unis
                    </span>{" "}
                    et veut se lancer sur{" "}
                    <span className="border-b-4 border-white">Youtube</span>,
                    <br />
                    Amel est{" "}
                    <span className="p-1 bg-beige text-desertred rounded-lg">
                      monteuse vidéo
                    </span>{" "}
                    et veut apprendre{" "}
                    <span className=" border-b-4 border-desertred">
                      l'anglais
                    </span>
                    .
                  </p>
                </div>
              </div>

              <div className="md:flex md:items-start md:-mx-4">
                <span className="inline-block p-2 text-blue-500 bg-blue-100 rounded-xl md:mx-4 ">
                  {/* logo */}
                </span>

                <div className="mt-4 md:mx-4 md:mt-0">
                  <h3 className="text-xl font-semibold text-beige ">
                    Une rencontre
                  </h3>

                  <p className="mt-3 text-beige">
                    Depuis New-York, Antoine a pu aider Amel à progresser en
                    anglais.
                    <br /> De son côté, Amel a accompagné Antoine dans son
                    apprentissage du montage vidéo. <br />
                    <br />
                  </p>
                </div>
              </div>

              <div className="md:flex md:items-start md:-mx-4">
                <span className="inline-block p-2 text-beige bg-blue-100 rounded-xl md:mx-4">
                  {/* logo */}
                </span>

                <div className="mt-4 md:mx-4 md:mt-0">
                  <h3 className="text-xl font-semibold text-beige">
                    Des objectis atteints
                  </h3>

                  <p className="mt-3 text-beige">
                    Ensemble, ils ont atteint leurs objectifs : ⚡️ Amel a
                    obtenu 936 au TOEIC ⚡️ ⚡️ Antoine vient de fêter ses 1 000
                    abonnés ⚡️ Ils ont même prévu de passer le Nouvel An
                    ensemble.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* benefits */}
        <div className="container mt-12 px-2 py-10 mx-auto">
          <h2 className="text-3xl text-center font-bold sm:text-4xl">
            Avec Cact-Us :
          </h2>
          <div className="mt-2 text-center mb-12">
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
                Avec Cact-Us, finis de paniquer seul devant ton écran! Crée ton
                profil, trouve la compétence qu'il te faut et paye avec ton
                experience.
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
                cherche. Avec Cact-Us entrez en relation et partagez bien plus
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
          fill="#0EAD69"
          fillOpacity="1"
          d="M0,160L1440,0L1440,0L0,0Z"
        ></path>
      </svg>
    </>
  );
}

{
  /*

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
        className=" bg-green  pb-12 lg:-mt-32 "
      >
        <div className=" text-beige max-w-screen-xl mx-auto">
          <div className="mx-auto  px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8">
            
            <div className="mx-auto  text-center">
            <h2 className="text-xl md:text-2xl mb-4 px-4 leading-2">
                Antoine vit aux{" "}
                <span className="p-1 bg-desertred text-white rounded-lg">
                  États-Unis
                </span>{" "}
                et veut se lancer sur{" "}
                <span className="border-b-4 border-white">Youtube</span>,
              </h2>
              <h2 className="text-xl md:text-2xl mb-4 px-4 leading-2">
                Amel est{" "}
                <span className="p-1 bg-beige text-desertred rounded-lg">
                  monteuse vidéo
                </span>{" "}
                et veut apprendre{" "}
                <span className=" border-b-4 border-desertred">l'anglais</span>,
              </h2>
              <div className="flex items-center justify-center mb-12">
                <div className="flex items-center justify-center">
                  <Image
                    className="object-cover w-12 h-12 md:w-32 md:h-32 -mx-2 rounded-full ring ring-white dark:ring-gray-900"
                    src="https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
                    alt=""
                    width={500}
                    height={500}
                  />
                  <Image
                    className="object-cover w-12 h-12 md:w-32 md:h-32 -mx-2 rounded-full "
                    src={logo}
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
                
                </div>
              </div>
             


              <p className="mt-12 sm:px-4 max-w-screen-lg mx-auto text-xl text-beige">
                Depuis New-York, Antoine a pu aider Amel à progresser en
                anglais.
                <br /> De son côté, Amel a accompagné Antoine dans son
                apprentissage du montage vidéo. <br />
                <br />
              </p>
              <p className="mx-1 mb-12 sm:px-4  mx-auto text-xl text-beige">
                {" "}
                <span className="border-b-2 border-beige">Ensemble</span>, ils
                ont atteint leurs objectifs :
              <br />
              ⚡️ Amel a obtenu 936 au TOEIC ⚡️ <br />
              ⚡️ Antoine vient de fêter ses 1 000 abonnés ⚡️ <br />
              Ils ont même prévu de passer le Nouvel An ensemble.
              </p>
            </div>

            <div className="container px-2 py-10 mx-auto">
              <h2 className="text-3xl text-center font-bold sm:text-4xl">
                Avec Cact-Us :
              </h2>
              <div className="mt-2 text-center mb-12">
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
                    Avec Cact-Us, finis de paniquer seul devant ton écran! Crée
                    ton profil, trouve la compétence qu'il te faut et paye avec
                    ton experience.
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
                    Ce que tu cherches, quelqu'un l'a. Et ce que tu as,
                    quelqu'un le cherche. Avec Cact-Us entrez en relation et
                    partagez bien plus que des compétences.
                  </p>
                </div>
                <div className="block rounded-xl border border-transparent p-8 shadow-xl bg-beige">
                  <h2 className="mt-4 text-xl font-bold text-dark">
                    📈 Développe tes compétences
                  </h2>

                  <p className="mt-1  text-lg text-dark">
                    Booste tes capacités au contact de professionnels, experts
                    dans leur domaine. Et la petite graine devient cactus.
                  </p>
                </div>{" "}
                <div className="block rounded-xl border border-transparent p-8 shadow-xl  bg-beige">
                  <h2 className="mt-4 text-xl font-bold text-dark">
                    🥳 Profite gratuitement
                  </h2>

                  <p className="mt-1 text-lg text-dark">
                    Inscris-toi et bénéficie immédiatement de tous les services
                    de Cact-Us. Pas de frais cachés : la seule monnaie, c'est
                    tes connaissances.
                  </p>
                </div>
                <div className="block rounded-xl border border-transparent p-8 shadow-xl bg-beige">
                  <h2 className="mt-4 text-xl font-bold text-dark">
                    🧠 Apprends et transmets
                  </h2>

                  <p className="mt-1 text-lg text-dark">
                    Parce qu'on est plus riche quand on donne, devient
                    ambassadeur de ton domaine et partage ton savoir à ceux qui
                    en ont besoin.
                  </p>
                </div>
              </div>
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
          fill="#0EAD69"
          fillOpacity="1"
          d="M0,160L1440,0L1440,0L0,0Z"
        ></path>
      </svg>
    </>


*/
}

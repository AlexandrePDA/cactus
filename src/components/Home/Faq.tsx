"use client";

import { useState } from "react";

export const Faq = () => {
  const [open1, setOpen1] = useState<boolean>(false);
  const [open2, setOpen2] = useState<boolean>(false);
  const [open3, setOpen3] = useState<boolean>(false);
  const [open4, setOpen4] = useState<boolean>(false);
  const [open5, setOpen5] = useState<boolean>(false);
  const [open6, setOpen6] = useState<boolean>(false);
  const [open7, setOpen7] = useState<boolean>(false);




  return (
    <section className="bg-beige pb-24 -mb-12 py-8">
      <div className="container max-w-4xl px-6 py-4 mx-auto">
        <h2 className="text-3xl lg:text-4xl font-semibold text-center text-dark ">
          FAQ 🌵
        </h2>

        <div className="mt-12 space-y-8">
          <div className="border border-gray-200 rounded-lg ">
            <button
              className="flex text-left items-center justify-between w-full p-4"
              onClick={() => setOpen1(!open1)}
            >
              <h2 className="font-semibold text-gray-700 ">
                C'est quoi Cact-Us ?
              </h2>

              {open1 ? (
                <span className="text-white bg-green rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M18 12H6"
                    />
                  </svg>
                </span>
              ) : (
                <span className="text-white bg-green rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                    />
                  </svg>
                </span>
              )}
            </button>

            {open1 && (
              <p className="p-8 text-sm text-gray-500 ">
                Cact-Us, c'est la 1re plateforme d'échange de compétences pour les curieux qui souhaitent partager et apprendre  🌵
              </p>
            )}
          </div>

          <div className="border border-gray-200 rounded-lg ">
            <button
              className="flex text-left items-center justify-between w-full p-4"
              onClick={() => setOpen2(!open2)}
            >
              <h2 className="font-semibold text-gray-700 ">
                Quand la plateforme sera-t-elle disponible ?
              </h2>

              {open2 ? (
                <span className="text-white bg-green rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M18 12H6"
                    />
                  </svg>
                </span>
              ) : (
                <span className="text-white bg-green rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                    />
                  </svg>
                </span>
              )}
            </button>

            {open2 && (
              <p className="p-8 text-sm text-gray-500 ">
                Cact-Us sort bientôt de terre. Renseigne ton mail pour être le premier informé du lancement. Tu peux également suivre les actus de Cact-Us sur <a className="border-b-2 border-green pointer" href="https://www.linkedin.com/company/cact-us1/">Linkedin</a>{" "} 🚀
              </p>
            ) 
            }
          </div>

          <div className="border border-gray-200 rounded-lg ">
            <button
              className="flex text-left items-center justify-between w-full p-4"
              onClick={() => setOpen3(!open3)}
            >
              <h1 className="font-semibold text-gray-700 ">
                Pourquoi c'est gratuit ?
              </h1>

              {open3 ? (
                <span className="text-white bg-green rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M18 12H6"
                    />
                  </svg>
                </span>
              ) : (
                <span className="text-white bg-green rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                    />
                  </svg>
                </span>
              )}
            </button>

            {open3 && (
              <p className="p-8 text-sm text-gray-500 ">
                Cact-Us c'est le partage : tu donnes ce que tu sais pour recevoir ce que tu veux apprendre. Ta seule monnaie, c'est tes connaissances. C'est un échange win-win qui n'attend que toi ! ⚡️{" "}
              </p>
            ) }
          </div>
        
          <div className="border border-gray-200 rounded-lg ">
            <button
              className="flex text-left items-center justify-between w-full p-4"
              onClick={() => setOpen4(!open4)}
            >
              <h2 className="font-semibold text-gray-700 ">
                Comment savoir si ma compétence est recherchée ?
              </h2>

              {open4 ? (
                <span className="text-white bg-green rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M18 12H6"
                    />
                  </svg>
                </span>
              ) : (
                <span className="text-white bg-green rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                    />
                  </svg>
                </span>
              )}
            </button>

            {open4 && (
              <p className="p-8 text-sm text-gray-500 ">
                Tu trouveras toujours quelqu'un qui recherche ce que tu sais. C'est d'ailleurs la richesse de Cact-Us : faire de nos compétences un atout pour échanger ✨
              </p>
            ) }
          </div>

                  
          <div className="border border-gray-200 rounded-lg ">
            <button
              className="flex text-left items-center justify-between w-full p-4"
              onClick={() => setOpen5(!open5)}
            >
              <h2 className="font-semibold text-gray-700 ">
                J'ai trouvé ma pépite, que dois-je faire ?
              </h2>

              {open5 ? (
                <span className="text-white bg-green rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M18 12H6"
                    />
                  </svg>
                </span>
              ) : (
                <span className="text-white bg-green rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                    />
                  </svg>
                </span>
              )}
            </button>

            {open5 && (
              <p className="p-8 text-sm text-gray-500 ">
                Ça y est ? Félicitations 🥳 <br/> Il te suffit de le contacter via ses coordonnées, disponibles sur son profil. Démarrez ensuite votre accompagnement, au rythme qui vous convient. Bonne pousse ! 🌱
              </p>
            ) }
          </div>

          <div className="border border-gray-200 rounded-lg ">
            <button
              className="flex text-left items-center justify-between w-full p-4"
              onClick={() => setOpen6(!open6)}
            >
              <h2 className="font-semibold text-gray-700 ">
                Comment contacter le support ?
              </h2>

              {open6 ? (
                <span className="text-white bg-green rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M18 12H6"
                    />
                  </svg>
                </span>
              ) : (
                <span className="text-white bg-green rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                    />
                  </svg>
                </span>
              )}
            </button>

            {open6 && (
              <p className="p-8 text-sm text-gray-500 ">
                Un problème ? Une idée ? Des recommandations ? <br/> Tu peux nous contacter par  <a className="border-b-2 border-green pointer" href="mailto:contact@cact-us.com">mail</a>  ou via le chat juste à ta droite. Nous serons heureux de te répondre 💌
              </p>
            ) }
          </div>


          <div className="border border-gray-200 rounded-lg ">
            <button
              className="flex text-left items-center justify-between w-full p-4"
              onClick={() => setOpen7(!open7)}
            >
              <h2 className="font-semibold text-gray-700 ">
                J'aime Cact-Us, comment valoriser la plateforme ?
              </h2>

              {open7 ? (
                <span className="text-white bg-green rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M18 12H6"
                    />
                  </svg>
                </span>
              ) : (
                <span className="text-white bg-green rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                    />
                  </svg>
                </span>
              )}
            </button>

            {open7 && (
              <p className="p-8 text-sm text-gray-500 ">
                Merci pour ton soutien ❤️ <br/>
                N'hésite pas à en parler autour de toi et suis nos actus sur <a className="border-b-2 border-green pointer" href="https://www.linkedin.com/company/cact-us1/">Linkedin</a> !
                 <br/> Tu peux aussi soutenir Cact-Us en lui {" "}
                <a className="border-b-2 border-green pointer" href="https://www.buymeacoffee.com/cactus1">offrant un café</a> ☕️
              </p>
            ) }
          </div>
        </div>
      </div>
    </section>
  );
};

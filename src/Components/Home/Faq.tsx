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
                Cact-Us c'est pour tous les curieux qui souhaitent partager leur compétences afin d'en apprendre de nouvelles 🌵
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
                Cact-Us sort bientôt de terre. Pour être informé de son lancement, renseigne ton mail pour recevoir toutes les informations. Tu peux également suivre Cact-Us sur Linkedin 🚀
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
                Cact-Us c'est l'échange, tu donnes ce que tu sais pour recevoir ce que tu veux apprendre. Ta seule monnaie c'est tes connaissances. C'est un échange win-win qui n'attend que toi ! ⚡️{" "}
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
                Ça y est, tu as trouvé ? Rien de plus simple, contact la via ses réseaux ou son adresse mail disponible sur son profil. Allez, qu'est-ce que tu attends ? 🎯
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
                Des recommandations ? Des idées ? Déclarer un problème ? Tu peux nous contacter par mail contact@cact-us.com ou via le chat juste à ta droite. Nous serons heureux de te répondre 💌
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
                Parles-en autour de toi, plus on est plus il sera facil de trouver ta pépite ! Abonne toi également à la page Linkedin de Cact-Us pour rester informer de toutes les nouveautés 👂
              </p>
            ) }
          </div>
        </div>
      </div>
    </section>
  );
};

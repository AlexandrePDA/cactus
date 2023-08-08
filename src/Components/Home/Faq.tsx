"use client";

import { useState } from "react";

export const Faq = () => {
  const [open1, setOpen1] = useState<boolean>(false);
  const [open2, setOpen2] = useState<boolean>(false);
  const [open3, setOpen3] = useState<boolean>(false);

  return (
    <section className="bg-beige pb-24 -mb-12 py-8">
      <div className="container max-w-4xl px-6 py-4 mx-auto">
        <h2 className="text-3xl lg:text-4xl font-semibold text-center text-dark ">
          FAQ 🌵
        </h2>

        <div className="mt-12 space-y-8">
          <div className="border border-gray-200 rounded-lg ">
            <button
              className="flex items-center justify-between w-full p-8"
              onClick={() => setOpen1(!open1)}
            >
              <h1 className="font-semibold text-gray-700 ">
                J'ai un projet, comment on fait ?
              </h1>

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

            {open1 ? (
              <p className="p-8 text-sm text-gray-500 ">
                Si vous disposez d'un cahier des charges, vous me partagez les
                détails de votre projet. Au contraire, si votre idée est encore
                floue, nous pouvons la travailler ensemble. Dans tous les cas,
                nous en discutons autour d'un appel, d'un visio, d'un mail ou
                d'un café. Une fois le contrat signé, l'aventure peut commencer
                ! 🚀
              </p>
            ) : (
              ""
            )}
          </div>

          <div className="border border-gray-200 rounded-lg ">
            <button
              className="flex items-center justify-between w-full p-8"
              onClick={() => setOpen2(!open2)}
            >
              <h1 className="font-semibold text-gray-700 ">
                Combien coûte la rédaction d'un article ?
              </h1>

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

            {open2 ? (
              <p className="p-8 text-sm text-gray-500 ">
                Il n'existe pas de prix unique pour la rédaction d'un article.
                La tarification dépend de facteurs variés mentionnés dans le
                cahier des charges. Contactez-moi pour obtenir un devis
                personnalisé. 📩
              </p>
            ) : (
              ""
            )}
          </div>

          <div className="border border-gray-200 rounded-lg ">
            <button
              className="flex items-center justify-between w-full p-8"
              onClick={() => setOpen3(!open3)}
            >
              <h1 className="font-semibold text-gray-700 ">
                Quand vais-je recevoir mes livrables&nbsp;&nbsp;?
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

            {open3 ? (
              <p className="p-8 text-sm text-gray-500 ">
                À la date convenue lors de la signature du contrat. Des envois
                intermédiaires sont prévus tout au long de la mission afin de
                vous permettre un suivi constant de l'évolution de vos contenus.{" "}
              </p>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

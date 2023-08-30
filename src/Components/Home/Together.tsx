import Image from "next/image";
import together from "../../../public/assets/cact-us_together.jpg";
import together1 from "../../../public/assets/cact-us_together1.jpg";


export default function Together() {
  return (
    <>
      <svg
        className="-mb-1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path
          fill="#0EAD69"
          fillOpacity="1"
          d="M0,128L1440,256L1440,320L0,320Z"
        ></path>
      </svg>
      <div className="bg-green ">
        <section className="mx-auto max-w-screen-xl  text-beige p-4">
          <section>
            <div className="mx-auto max-w-screen-xl px-4  sm:py-12 sm:px-6 lg:py-16 lg:px-8">
              <div className="max-w-xl mx-auto">
                <div className="lg:py-24">
                  <h2 className="text-3xl font-bold sm:text-4xl">
                    Cact-Us c'est vous !
                  </h2>
                  <div className="mt-2 mb-12">
                    <span className="inline-block w-40 h-1 bg-desertred rounded-full"></span>
                    <span className="inline-block w-1 h-1 ml-1 bg-desertred rounded-full"></span>
                    <span className="inline-block w-3 h-1 ml-1 bg-desertred rounded-full"></span>
                  </div>
                  <p className="mt-4 text-justify text-lg">
                    Le cactus est une espèce pionnière. Véritable source de vie,
                    il représente un refuge dans le désert pour de nombreux
                    animaux.
                    <br /> <br />
                    C'est cette même ambition qui anime Cact-Us : fonder une
                    communauté unie et bienveillante dont les différences font
                    la richesse. Et cela est possible en créant du lien entre
                    les femmes et les hommes qui ont soif d'apprendre, de
                    partager, et de se rencontrer.
                  </p>

                  <div className="flex mt-8  items-center">
                    <div className="flex items-center mx-auto">
                      <Image
                        className="h-16 w-16 -mx-2.5 ring ring-white dark:ring-gray-900 rounded-full object-cover"
                        src={together1}
                        alt=""
                        width={500}
                        height={500}
                      />
                      <Image
                        className="h-16 w-16 -mx-2.5 ring ring-white dark:ring-gray-900 rounded-full object-cover"
                        src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=4&w=687&h=687&q=80"
                        alt=""
                        width={500}
                        height={500}
                      />
                      <Image
                        className="h-16 w-16 -mx-2.5 ring ring-white dark:ring-gray-900 rounded-full object-cover"
                        src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=4&w=880&h=880&q=80"
                        alt=""
                        width={500}
                        height={500}
                      />
                      <Image
                        className="h-16 w-16 -mx-2.5 ring ring-white dark:ring-gray-900 rounded-full object-cover"
                        src="https://images.unsplash.com/photo-1485178575877-1a13bf489dfe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=4&w=1401&h=1401&q=80"
                        alt=""
                        width={500}
                        height={500}
                      />
                      <Image
                        className="h-16 w-16 -mx-2.5 ring ring-white dark:ring-gray-900 rounded-full object-cover"
                        src={together}
                        alt=""
                        width={500}
                        height={500}
                      />
                    </div>
                  </div>
                  <h2 className="p-2 text-xl mt-8 sm:mt-12  font-semibold text-center ">
                    <span className=" border-b-4 border-desertred">
                      Ensemble
                    </span>
                    , redéfinissons{" "}
                    <span className="p-1 bg-beige text-desertred rounded-lg">
                      l'échange de compétences.
                    </span>
                  </h2>
                </div>
              </div>
            </div>
          </section>
        </section>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#0EAD69"
          fillOpacity="1"
          d="M0,128L1440,256L1440,0L0,0Z"
        ></path>
      </svg>
    </>
  );
}

import Image from "next/image";

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
      <div className="bg-green font-quicksand">
        <section className="mx-auto max-w-screen-xl font-quicksand  text-beige">
          <section>
            <div className="mx-auto max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8">
              <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
                <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
                  <Image
                    alt="Party"
                    src="https://images.unsplash.com/photo-1527529482837-4698179dc6ce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                    className="absolute inset-0 h-full w-full object-cover"
                    width={500}
                    height={500}
                  />
                </div>

                <div className="lg:py-24">
                  <h2 className="text-3xl font-bold sm:text-4xl">
                    Cact-Us c'est vous !
                  </h2>
                  <div className="mt-2">
                    <span className="inline-block w-40 h-1 bg-desertred rounded-full"></span>
                    <span className="inline-block w-1 h-1 ml-1 bg-desertred rounded-full"></span>
                    <span className="inline-block w-3 h-1 ml-1 bg-desertred rounded-full"></span>
                  </div>
                  <p className="mt-4 text-lg">
                    Le cactus est une espèce pionnière. Véritable source de vie,
                    il représente un refuge dans le désert pour de nombreux
                    animaux.
                    <br/> <br/>
                    C'est cette même ambition qui anime Cact-Us : fonder une
                    communauté unie et bienveillante dont les différences font
                    la richesse. Et cela est possible en créant du lien entre
                    les femmes et les hommes qui ont soif d'apprendre, de
                    partager, et de se rencontrer.
                    <br /> <br />
                    Ensemble, redéfinissons l'échange de compétences.
                    <br /> <br />
                    Cact-Us, c'est moi, Antoine, Amel... c'est nous.
                    <br /> <br />
                  </p>
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

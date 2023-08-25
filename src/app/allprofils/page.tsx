import { Footer } from "@/Components/Footer";
import NavBar from "@/Components/NavBar";
import Image from "next/image";
import React from "react";
import Link from "next/link";

{/* if pas de jwt route.push("/") 
*/}

export default function AllProfils() {
  return (
    <div className="bg-beige">
      <NavBar />

      {/* chemin */}
      <div className="hidden md:flex md:items-center md:p-8 md:overflow-x-auto ">
        <Link href="/" className="text-dark">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5 text-green"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
          </svg>
        </Link>

        <span className="mx-5 text-gray-500  rtl:-scale-x-100">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </span>

        <p className="text-dark">Profils</p>
      </div>

      <h2 className="text-center mt-12 text-lg md:text-4xl text-dark font-semibold">
        Retrouvez tous les  <span className="bg-gradient-to-r from-desertred to-green bg-clip-text text-transparent">
              CactUsers
            </span> 🌵
      </h2>

      <section className="text-dark mt-12 body-font">
        <div className="container px-5 py-4 mx-auto">
          <div className="flex flex-wrap -m-4">


            <div className="p-4 w-full lg:w-1/3">
              <div className="flex w-full flex-col items-center justify-center h-full bg-beige border-2 border-green px-8 py-8 rounded-lg overflow-hidden text-center relative shadow-xl">
                <Image
                  className="object-cover w-24 h-24 md:w-32 md:h-32 -mx-2 rounded-xl ring ring-white dark:ring-gray-900"
                  src="https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
                  alt=""
                  width={500}
                  height={500}
                />

                <h1 className=" text-xl font-medium text-green mt-4 mb-3">
                  John
                </h1>
                <h3 className=" mb-1">Je sais</h3>
                <p>Test</p>

                <h3 className=" mb-1">Je cherche</h3>
                <p>Test</p>

                <button className=" w-full px-6 py-3 mt-4 text-sm  text-white bg-green rounded-lg ">
                  <p className="mx-auto">Voir le profil</p>
                </button>
              </div>
            </div>


            <div className="p-4 w-full lg:w-1/3">
              <div className="flex w-full flex-col items-center justify-center h-full bg-beige border-2 border-green px-8 py-8 rounded-lg overflow-hidden text-center relative shadow-xl">
                <Image
                  className="object-cover w-24 h-24 md:w-32 md:h-32 -mx-2 rounded-xl ring ring-white dark:ring-gray-900"
                  src="https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
                  alt=""
                  width={500}
                  height={500}
                />

                <h1 className=" text-xl font-medium text-green mt-4 mb-3">
                  John
                </h1>
                <h3 className=" mb-1">Je sais</h3>
                <p>Test</p>

                <h3 className=" mb-1">Je cherche</h3>
                <p>Test</p>

                <button className=" w-full px-6 py-3 mt-4 text-sm  text-white bg-green rounded-lg ">
                  <p className="mx-auto">Voir le profil</p>
                </button>
              </div>
            </div>


            <div className="p-4 w-full lg:w-1/3">
              <div className="flex w-full flex-col items-center justify-center h-full bg-beige border-2 border-green px-8 py-8 rounded-lg overflow-hidden text-center relative shadow-xl">
                <Image
                  className="object-cover w-24 h-24 md:w-32 md:h-32 -mx-2 rounded-xl ring ring-white dark:ring-gray-900"
                  src="https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
                  alt=""
                  width={500}
                  height={500}
                />

                <h1 className=" text-xl font-medium text-green mt-4 mb-3">
                  John
                </h1>
                <h3 className=" mb-1">Je sais</h3>
                <p>Test</p>

                <h3 className=" mb-1">Je cherche</h3>
                <p>Test</p>

                <button className=" w-full px-6 py-3 mt-4 text-sm  text-white bg-green rounded-lg ">
                  <p className="mx-auto">Voir le profil</p>
                </button>
              </div>
            </div>

            <div className="p-4 w-full lg:w-1/3">
              <div className="flex w-full flex-col items-center justify-center h-full bg-beige border-2 border-green px-8 py-8 rounded-lg overflow-hidden text-center relative shadow-xl">
                <Image
                  className="object-cover w-24 h-24 md:w-32 md:h-32 -mx-2 rounded-xl ring ring-white dark:ring-gray-900"
                  src="https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
                  alt=""
                  width={500}
                  height={500}
                />

                <h1 className=" text-xl font-medium text-green mt-4 mb-3">
                  John
                </h1>
                <h3 className=" mb-1">Je sais</h3>
                <p>Test</p>

                <h3 className=" mb-1">Je cherche</h3>
                <p>Test</p>

                <button className=" w-full px-6 py-3 mt-4 text-sm  text-white bg-green rounded-lg ">
                  <p className="mx-auto">Voir le profil</p>
                </button>
              </div>
            </div>

            <div className="p-4 w-full lg:w-1/3">
              <div className="flex w-full flex-col items-center justify-center h-full bg-beige border-2 border-green px-8 py-8 rounded-lg overflow-hidden text-center relative shadow-xl">
                <Image
                  className="object-cover w-24 h-24 md:w-32 md:h-32 -mx-2 rounded-xl ring ring-white dark:ring-gray-900"
                  src="https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
                  alt=""
                  width={500}
                  height={500}
                />

                <h1 className=" text-xl font-medium text-green mt-4 mb-3">
                  John
                </h1>
                <h3 className=" mb-1">Je sais</h3>
                <p>Test</p>

                <h3 className=" mb-1">Je cherche</h3>
                <p>Test</p>

                <button className=" w-full px-6 py-3 mt-4 text-sm  text-white bg-green rounded-lg ">
                  <p className="mx-auto">Voir le profil</p>
                </button>
              </div>
            </div>

            <div className="p-4 w-full lg:w-1/3">
              <div className="flex w-full flex-col items-center justify-center h-full bg-beige border-2 border-green px-8 py-8 rounded-lg overflow-hidden text-center relative shadow-xl">
                <Image
                  className="object-cover w-24 h-24 md:w-32 md:h-32 -mx-2 rounded-xl ring ring-white dark:ring-gray-900"
                  src="https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
                  alt=""
                  width={500}
                  height={500}
                />

                <h1 className=" text-xl font-medium text-green mt-4 mb-3">
                  John
                </h1>
                <h3 className=" mb-1">Je sais</h3>
                <p>Test</p>

                <h3 className=" mb-1">Je cherche</h3>
                <p>Test</p>

                <button className=" w-full px-6 py-3 mt-4 text-sm  text-white bg-green rounded-lg ">
                  <p className="mx-auto">Voir le profil</p>
                </button>
              </div>
            </div>

            
          </div>


          
        </div>
        
      </section>

      <Footer />
    </div>
  );
}

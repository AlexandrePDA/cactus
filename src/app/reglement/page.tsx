import { Footer } from '@/Components/Footer'
import NavBar from '@/Components/NavBar'
import React from 'react'

{/* c'est pas torp ???
a integrer autre part, plus naturellement */}

export default function Reglement() {
  return (
    <div>
        <div>
      <NavBar />
      <section className="bg-beige">
        <div className="flex justify-center min-h-screen">
          <div className="flex items-center w-full max-w-3xl p-8 mx-auto lg:px-12 lg:w-3/5">
            <div className="w-full">
              <h1 className="text-2xl font-semibold  text-dark  ">
                Reglement de Cact-Us 🌵
              </h1>

              <p className="mt-4 text-dark ">
                Pour recevoir, il faut donner 
              </p>
              <p className="mt-4 text-dark ">
                Pour recevoir, il faut donner 
              </p>
              <p className="mt-4 text-dark ">
                Pour recevoir, il faut donner 
              </p>
              <p className="mt-4 text-dark ">
                Pour recevoir, il faut donner 
              </p>
              <p className="mt-4 text-dark ">
                Pour recevoir, il faut donner 
              </p>


             
              <button className="flex items-center max-w-sm justify-between  px-6 py-3 text-sm  text-white capitalize transition-colors duration-300 transform bg-green rounded-lg ">
                  <span>Accepter</span>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 rtl:-scale-x-100"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
             
            </div>
          </div>
        </div>
      </section>
      <Footer/>
    </div>
    </div>
  )
}

"use client";


import NavBar from "@/Components/NavBar";
import { useState } from "react";
import { useRouter } from 'next/navigation';
import { Footer } from "@/Components/Footer";
import Link from "next/link";


{
  /* signin : se connecter

  to do :
Router : à validation amener sur page all profils
a ajouter "mot de passe oublié ?"
  */
}

interface UserData {
  email: string;
  password: string;
}


export default function Signup() {

  const router = useRouter();

  const [data, setData] = useState<UserData>({
    email: "",
    password: "",
  });
  const [error, setError] = useState<string>("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!data.email || !data.password) {
      setError("Oups... Veuillez remplir tous les champs");
      return console.log("error");
    }

    setError("");
    sentData();
  };

  {/* envois à BDD */}
  const sentData = async () => {
    try {
      const response = await fetch("/api/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: data.email,
          password: data.password,
        }),
      });
      console.log(response);
      if(response.ok === false && response.status === 400) {
        return setError("Email ou mot de passe incorrect")
      }
      if (response.ok === true && response.status === 200) {
        setData({
          email: "",
          password: "",
        });
        console.log("ok c'est envoyé");
        router.push('/dashboard');
      }
    } catch (error) {
      console.log(error);
    }
  };

  const goToSignUp = () => {
    router.push('/signup')
  }

  return (
    <div>
      <NavBar />

{/* chemin */}
<div className="hidden md:flex md:items-center md:px-8 md:mt-8 md:overflow-x-auto md:whitespace-nowrap">
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

        <p className="text-dark">Se connecter</p>
      </div>

      <section className="bg-beige">
        <div className="flex justify-center min-h-screen">
          <div className="flex items-center w-full max-w-xl p-8 mx-auto lg:px-12 lg:w-3/5">
            <div className="w-full">
              <h1 className="text-2xl font-semibold  text-dark  ">
                Bon retour parmi nous 🌵
              </h1>

              <p className="mt-4 text-gray-500 ">
                De nouveaux profils peuvent te correspondre... Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio placeat debitis similique quia in, quidem eius ab atque, deserunt officia a distinctio, sapiente repellat consequuntur eaque perferendis quas temporibus omnis.
              </p>

              <form
                onSubmit={handleSubmit}
                className="grid grid-cols-1 gap-6 mt-8 md:grid-cols-2"
              >
                

                <div>
                  <label className="block mb-2 text-sm text-dark ">
                    Email
                  </label>
                  <input
                    onChange={(e) => {
                      setData({ ...data, email: e.target.value });
                    }}
                    id="email"
                    name="email"
                    type="email"
                    value={data.email}
                    placeholder="cact-us@exemple.com"
                    className="block w-full px-5 py-3 mt-2 text-dark placeholder-gray-400 bg-white border border-gray-200 rounded-lg  focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                </div>

                <div>
                  <label className="block mb-2 text-sm text-dark ">
                    Mot de passe
                  </label>
                  <input
                    onChange={(e) => {
                      setData({ ...data, password: e.target.value });
                    }}
                    id="password"
                    name="password"
                    type="password"
                    value={data.password}
                    placeholder="*************"
                    className="block w-full px-5 py-3 mt-2 text-dark placeholder-gray-400 bg-white border border-gray-200 rounded-lg  focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                </div>

                <button className="flex items-center justify-between w-full px-6 py-3 text-sm  text-white transition-colors duration-300 transform bg-green rounded-lg ">
                  <span>Se connecter ✨</span>

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
                <p className="text-red-600 font-semibold">{error}</p>
              </form>
             
                <button className="text-sm mt-4 text-gray-400 cursor-pointer" onClick={goToSignUp}>

                Pas encore de compte ? <span className="text-green">Inscris-toi</span>
                </button>
             
            </div>
          </div>
        </div>
      </section>
      <Footer/>
    </div>
  );
}

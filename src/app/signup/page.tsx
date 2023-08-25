"use client";
import NavBar from "@/Components/NavBar";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { CheckCircle2 } from "lucide-react";
import { Footer } from "@/Components/Footer";
import Link from "next/link";

{
  /* signin : s'inscrire

  to do :
Router : à validation amener sur page reglement
  */
}

interface UserData {
  name: string;
  email: string;
  password: string;
}

function containsUppercase(password: string) {
  return /[A-Z]/.test(password);
}
function containsNumber(password: string) {
  return /[0-9]/.test(password);
}
function mailIsCorrect(email: string) {
  return /^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$/.test(email);
}

export default function Signup() {
  const router = useRouter();
  const [data, setData] = useState<UserData>({
    name: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState<string>("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!data.name || !data.email || !data.password) {
      setError("Veuillez remplir tous les champs");
      return console.log("error");
    }
    if (data.password.length <= 8) {
      setError("Le mot de passe doit faire minimum 8 caracteres");
      return console.log("error : mdp 8");
    }
    if (containsUppercase(data.password) === false) {
      setError("Le mot de passe doit contenir au minimum une lettre majuscule");
      return console.log("error : mdp majuscule");
    }
    if (containsNumber(data.password) === false) {
      setError("Le mot de passe doit contenir au minimum un chiffre");
      return console.log("error : mdp chiffre");
    }

    if (mailIsCorrect(data.email) === false) {
      setError("L'adresse mail est incorrect");
      return console.log("error : mail incorrect");
    }

    setError("");
    sentData();
  };

  {
    /* envois à BDD */
  }
  const sentData = async () => {
    try {
      const response = await fetch("/api/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          password: data.password,
        }),
      });
      if (response.ok === true && response.status === 200) {
        setData({
          name: "",
          email: "",
          password: "",
        });
        console.log("ok c'est envoyé");
        router.push("/dashboard");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const goToSignIn = () => {
    router.push("/signin");
  };

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

        <p className="text-dark">S'inscrire</p>
      </div>


      <section className="bg-beige">
        <div className="flex justify-center min-h-screen">
          <div className="flex items-center w-full max-w-xl p-8 mx-auto lg:px-12 lg:w-3/5">
            <div className="w-full">
              <h1 className="text-2xl font-semibold  text-dark  ">
                Inscris toi et rejoins la communauté 🌵
              </h1>

              <p className="flex items-center gap-2 mt-4 text-dark ">
                <CheckCircle2 size={20} color="#0EAD69" /> Gratuit, aucun frais
                caché
              </p>
              <p className="flex items-center gap-2 mt-4 text-dark ">
                <CheckCircle2 size={20} color="#0EAD69" /> Un profil prêt
                immédiatement
              </p>
              <p className="flex items-center gap-2 mt-4 text-dark ">
                <CheckCircle2 size={20} color="#0EAD69" /> Une communauté qui
                t'attend
              </p>

              <form
                onSubmit={handleSubmit}
                className="grid grid-cols-1 gap-6 mt-8 md:grid-cols-2"
              >
                <div>
                  <label className="block mb-2 text-sm text-dark ">
                    Prénom
                  </label>
                  <input
                    onChange={(e) => {
                      setData({ ...data, name: e.target.value });
                    }}
                    id="name"
                    name="name"
                    type="text"
                    value={data.name}
                    placeholder="Cact-Us"
                    className="block w-full px-5 py-3 mt-2 text-dark placeholder-gray-400 bg-white border border-gray-200 rounded-lg   focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                </div>

                <div>
                  <label className="block mb-2 text-sm text-dark ">Email</label>
                  <input
                    onChange={(e) => {
                      setData({ ...data, email: e.target.value });
                    }}
                    id="email"
                    name="email"
                    type="email"
                    value={data.email}
                    placeholder="cact-us@exemple.com"
                    className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg  focus:outline-none focus:ring focus:ring-opacity-40"
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
                  <div className="mt-1 flex items-center gap-1 text-gray-400 text-sm">
                    <p>minimum 8 caracteres, 1 chiffre et 1 lettre majuscule</p>
                  </div>
                </div>

                <div> </div>

                <button className="flex items-center justify-between w-full px-6 py-3 text-sm  text-white capitalize transition-colors duration-300 transform bg-green rounded-lg ">
                  <span>S'inscrire 🚀</span>

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
              <button
                className="text-sm mt-4 text-gray-400 cursor-pointer"
                onClick={goToSignIn}
              >
                Déjà un compte ?{" "}
                <span className="text-green">Connecte-toi</span>
              </button>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

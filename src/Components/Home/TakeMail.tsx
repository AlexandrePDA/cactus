"use client";
import { useState } from "react";
import { ArrowRight } from "lucide-react";

export default function TakeMail() {
  const [mail, setMail] = useState<string>("");
  const [sentEmail, setSentEmail] = useState<boolean>(true);
  const [msgError, setMsgError] = useState<string>("");

  const sentMail = async (mail: string) => {
    console.log("test");
    if (mail.length > 3) {
      setMsgError("");
      try {
        const response = await fetch("/api/takemail", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email: mail }),
        });

        if (response.ok === true && response.status == 200) {
          setSentEmail(false);
        }
      } catch (error) {
        console.log(error);
      }
    } else {
      setMsgError("Adresse mail invalide");
    }
  };
  const handleMailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMail(event.target.value);
    console.log(mail);
  };

  const handleSentMail = async () => {
    sentMail(mail);
  };

  return (
    <div className="p-4 border bg-green shadow-lg rounded-lg mt-12 text-beige">
      <p className="text-red-600">{msgError}</p>
      {sentEmail ? (
        <p className="text-lg">
          Cact-Us arrive prochainement ! 👋
          <br /> Inscris-toi pour être averti du lancement et rejoindre la
          communauté des CactUsers.{" "}
        </p>
      ) : (
        <p>🎉 Merci, tu recevras un mail pour le lancement de Cact-Us 🎉</p>
      )}{" "}
      {sentEmail && (
        <div className="w-full mt-4 max-w-sm mx-auto mt-2  bg-white  rounded-md  focus-within:ring-opacity-40">
          <form className="flex flex-col md:flex-row">
            <input
              onChange={handleMailChange}
              type="email"
              placeholder="Adresse mail"
              className="flex-1 h-10 px-4 py-2 m-1 text-dark placeholder-gray-400  border-none appearance-none  focus:outline-none focus:placeholder-transparent focus:ring-0"
            />

            <button
              onClick={handleSentMail}
              type="button"
              className="h-10 text-center bg-desertred flex items-center gap-1 px-4 py-2 m-1 text-white transition-colors duration-300 transform  rounded-md "
            >
              Go
              <ArrowRight size={18} color="#fff" />
            </button>
          </form>
        </div>
      )}
    </div>
  );
}

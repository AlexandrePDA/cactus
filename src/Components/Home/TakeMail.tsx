"use client";
import { useState } from "react";


{
  /* ****** probleme sur le fetch ********* */
}

const sentMail = async (mail: string) => {
  console.log("test");
  try {
    const response = await fetch('/api/route', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ mail }),
    });

    console.log(response);
    console.log({mail}, " ok");
  } catch (error) {
    console.log(error);
  }
  console.log("sort du try");
  
};

export default function TakeMail() {
  const [mail, setMail] = useState<string>("");

  const handleMailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMail(event.target.value);
    console.log(mail);
  };

  const handleSentMail = async () => {
    sentMail(mail);
  };

  return (
    <div className="w-full max-w-sm mx-auto mt-6 bg-transparent border rounded-md  focus-within:ring-opacity-40">
      <form className="flex flex-col md:flex-row">
        <input
          onChange={handleMailChange}
          type="email"
          placeholder="Adresse mail"
          className="flex-1 h-10 px-4 py-2 m-1 text-dark placeholder-gray-400 bg-transparent border-none appearance-none  focus:outline-none focus:placeholder-transparent focus:ring-0"
        />

        <button
          onClick={handleSentMail}
          type="button"
          className="h-10 px-4 py-2 m-1 text-white transition-colors duration-300 transform bg-green rounded-md "
        >
          Rejoins-nous
        </button>
      </form>
    </div>
  );
}
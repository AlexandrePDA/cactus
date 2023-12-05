export default function VerifyRequest() {
  return (
    <main className="w-full h-screen flex flex-col items-center justify-center px-4">
      <div className="max-w-lg w-full text-gray-600 space-y-8 border p-4 rounded-lg shadow-md">
        <div className="text-center">
          <div className=" space-y-2">
            <h3 className="text-dark text-lg font-bold sm:text-2xl my-8">
              Rendez-vous dans tes mails 💌
            </h3>
            <h4>Première connexion ? </h4>
            <p>
              Tu viens de recevoir un email avec un lien, clique dessus et
              l'aventure commence !
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}

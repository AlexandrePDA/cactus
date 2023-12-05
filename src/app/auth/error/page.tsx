export default function Error() {
  return (
    <main className="w-full h-screen flex flex-col items-center justify-center px-4">
      <div className="max-w-lg w-full text-gray-600 space-y-8 border p-4 rounded-lg shadow-md">
        <div className="text-center">
          <div className=" space-y-2">
            <h3 className="text-dark text-lg font-bold sm:text-2xl my-8">
              Oups, une erreur est survenue 🤯
            </h3>
            <h4>Vérifie ta connexion internet</h4>
            <p>Si ça persiste, contact-nous sur le chat</p>
          </div>
        </div>
      </div>
    </main>
  );
}

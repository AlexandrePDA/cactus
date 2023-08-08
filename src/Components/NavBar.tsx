import { Info } from 'lucide-react';
import Image from "next/image";
import Logo from "../../public/assets/Logo_cactus_round.png"

export default function NavBar() {
  return (
    <header aria-label="Site Header" className="bg-green font-roboto">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 text-white items-center justify-between">
          <div className="flex-1  md:flex md:items-center md:gap-2">
            <Image src={Logo} width={58}
            height={58} alt={'logo cact-us'} />
            <p className="hidden md:block">Cact-us</p>
          </div>
          <div className="flex items-center gap-2  bg-white py-2 px-4 rounded-md text-green">
          <Info size={20} color="#0EAD69" strokeWidth={2.5} />
            <p>Bientôt disponible 🚀</p>
          </div>
        </div>
      </div>
    </header>
  );
}

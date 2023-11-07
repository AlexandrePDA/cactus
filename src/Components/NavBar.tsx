//import { Info, UserCog, Users, LogOut } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Logo from "../../public/assets/Logo_cactus_round.png";
import { LoginButton } from "@/auth/LoginButton";
import { getServerSession } from "next-auth";
import { authConfig } from "@/pages/api/auth/[...nextauth]";
import { Menu } from "./Menu";

export default async function NavBar() {
  const session = await getServerSession(authConfig);

  return (
    <div aria-label="Site Header" className="bg-green font-roboto">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 text-white items-center justify-between">
          <Link href="/">
            <div className="flex-1  md:flex md:items-center md:gap-2">
              <Image src={Logo} width={58} height={58} alt={"logo cact-us"} />
              <p className="hidden md:block">Cact-us</p>
            </div>
          </Link>
          {session == null ? (
            <div>
              <LoginButton />
            </div>
          ) : (
            <div>
              <Menu />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

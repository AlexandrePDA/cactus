import { LogoutButton } from "@/auth/LogoutButton";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { authConfig } from "@/pages/api/auth/[...nextauth]";
import { getServerSession } from "next-auth";
import Link from "next/link";
import Image from "next/image";
import { LayoutDashboard, Users2 } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export const Menu = async () => {
  const session = await getServerSession(authConfig);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <div className="md:flex items-center gap-2 border-2 p-2 rounded-md hidden ">
          <Avatar>
            <AvatarImage src={session?.user.image} alt="photo profil" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <p className="text-sm">{session?.user.name}</p>
        </div>
        <p className=" border-2 p-2 rounded-md md:hidden ">Menu</p>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem>
          <Link href="/dashboard" className="flex items-center gap-2 px-4 py-2">
            <LayoutDashboard color="#0EAD69" />
            <p>Dashboard</p>
          </Link>
        </DropdownMenuItem>

        <DropdownMenuItem>
          <Link
            href="/allprofils"
            className="flex items-center gap-2 px-4 py-2 "
          >
            <Users2 color="#0EAD69" />
            <p>Cact-Users</p>
          </Link>
        </DropdownMenuItem>

        <DropdownMenuItem>
          <LogoutButton />
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

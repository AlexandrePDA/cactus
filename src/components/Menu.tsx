import { LogoutButton } from "@/components/auth/LogoutButton";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { authConfig } from "@/pages/api/auth/[...nextauth]";
import { getServerSession } from "next-auth";
import Link from "next/link";
import { LayoutDashboard, Users2 } from "lucide-react";
import { Button } from "./ui/button";

export const Menu = async () => {
  const session = await getServerSession(authConfig);

  return (
    <div>
      <div className="block md:hidden">
        <DropdownMenu>
          <DropdownMenuTrigger>
            <div className="md:flex items-center gap-2 border-2 p-2 rounded-md hidden ">
              <p className="text-sm">Menu</p>
            </div>
            <p className=" border-2 p-2 rounded-md md:hidden ">Menu</p>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>
              <Link
                href="/dashboard"
                className="flex items-center gap-2 px-4 py-2"
              >
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
      </div>
      <div className="hidden  md:flex md:items-center md:gap-2">
        <Button className="bg-darkgreen">
          <Link href="/dashboard" className="flex items-center gap-2">
            <LayoutDashboard color="#FFF" />
            <p>Dashboard</p>
          </Link>
        </Button>
        <Button className="bg-darkgreen">
          <Link href="/allprofils" className="flex items-center gap-2">
            <Users2 color="#FFF" />
            <p>Cact-Users</p>
          </Link>
        </Button>
        <LogoutButton />
      </div>
    </div>
  );
};

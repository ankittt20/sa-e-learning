import { Button } from "@/components/ui/button";
import LogoutButton from "@/components/ui/logout-button";
import { navLinks } from "@/constants/links";
import React from "react";
import MobileNav from "./MobileNav";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import { CreditCard, Settings, User } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { IoCartOutline } from "react-icons/io5";

const Navbar = async () => {
  const session = await getServerSession(authOptions);
  return (
    <nav>
      <div className="flex items-center justify-between pt-10 sm:px-8">
        <h3 className="text-3xl font-bold">
          <a href="/">SAelearning</a>
        </h3>
        <div className="flex justify-between w-full px-32 max-sm:hidden">
          {navLinks.map((link) => {
            return (
              <p key={link.id}>
                <a href={link.link}>{link.name}</a>
              </p>
            );
          })}
        </div>
        {session?.user ? (
          <DropdownMenu>
            <DropdownMenuTrigger className="outline-none">
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-44 bg-primary-100/80 border-none mr-20">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuGroup>
                <DropdownMenuItem>
                  <User className="mr-2 h-4 w-4" />
                  <a href="/edit-profile">Edit Profile</a>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <CreditCard className="mr-2 h-4 w-4" />
                  <a href="/profile">Profile</a>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Settings className="mr-2 h-4 w-4" />
                  <a href="/settings">Settings</a>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <IoCartOutline className="mr-2 h-4 w-4" />
                  <a href="/cart">My Cart</a>
                </DropdownMenuItem>
              </DropdownMenuGroup>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <LogoutButton />
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        ) : (
          <Button className="btn rounded-full px-5 py-3 shadow-sm hover:shadow-md max-sm:hidden">
            <a href="/login" className="text-lg font-semibold">
              Register/Login
            </a>
          </Button>
        )}
        <div className="sm:hidden">
          <MobileNav user={session?.user} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

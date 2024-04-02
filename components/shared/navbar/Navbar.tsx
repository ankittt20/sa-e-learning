import { Button } from "@/components/ui/button";
import LogoutButton from "@/components/ui/logout-button";
import { navLinks } from "@/constants/links";
import React from "react";
import MobileNav from "./MobileNav";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";

const Navbar = async () => {
  const session = await getServerSession(authOptions);
  return (
    <nav>
      <div className="flex items-center justify-between pt-10">
        <h3 className="text-3xl font-bold">SAelearning</h3>
        <ul className="flex gap-20 max-sm:hidden">
          {navLinks.map((link) => {
            return (
              <li key={link.id}>
                <a href={link.link}>{link.name}</a>
              </li>
            );
          })}
        </ul>
        {session?.user ? (
          <LogoutButton />
        ) : (
          <Button className="btn rounded-full px-5 py-3 shadow-sm hover:shadow-md max-sm:hidden">
            <a href="/login" className="text-lg font-semibold">
              Register/Login
            </a>
          </Button>
        )}
        <MobileNav />
      </div>
    </nav>
  );
};

export default Navbar;

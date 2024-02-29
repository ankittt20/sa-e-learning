import { Button } from "@/components/ui/button";
import { navLinks } from "@/constants/links";
import React from "react";
import MobileNav from "./MobileNav";

const Navbar = () => {
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
        <Button className="btn rounded-[30px] px-10 py-3 max-sm:hidden">
          <a href="/login" className="font-inter text-xl font-bold">
            Register/Login
          </a>
        </Button>
        <MobileNav />
      </div>
    </nav>
  );
};

export default Navbar;

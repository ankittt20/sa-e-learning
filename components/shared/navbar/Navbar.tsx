import { Button } from "@/components/ui/button";
import { navLinks } from "@/constants/links";
import React from "react";

const Navbar = () => {
  return (
    <nav className="flex-between container items-center pt-10">
      <h3 className="text-3xl font-bold">SAelearning</h3>
      <ul className="flex-between gap-16">
        {navLinks.map((link) => {
          return (
            <li key={link.id}>
              <a href={link.link}>{link.name}</a>
            </li>
          );
        })}
      </ul>
      <Button className="btn rounded-[30px] px-10 py-3">
        <p className="font-inter text-xl font-bold">Register</p>
      </Button>
    </nav>
  );
};

export default Navbar;

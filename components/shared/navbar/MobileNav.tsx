"use client";
import React from "react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { navLinks } from "@/constants/links";

const NavContent = () => {
  return (
    <section className="flex h-full flex-col gap-6 pt-16 drop-shadow-2xl">
      {navLinks.map((link) => {
        return (
          <SheetClose asChild key={link.id}>
            <Link href={link.link}>
              <p className="text-sm font-normal">{link.name}</p>
            </Link>
          </SheetClose>
        );
      })}
    </section>
  );
};

const MobileNav = () => {
  return (
    <Sheet>
      <SheetTrigger>
        <Image
          src="/assets/icons/hamburger.svg"
          alt="Open mobile navigation menu"
          width={16}
          height={14}
          className="sm:hidden"
        />
      </SheetTrigger>
      <SheetContent
        side="left"
        className="max-w-[50%] border-none bg-[rgb(226,232,240)]"
      >
        <div>
          <SheetClose asChild>
            <NavContent />
          </SheetClose>
          <div className="flex flex-col gap-3">
            <SheetClose asChild>
              <Link href="/sign-in">
                <Button className="btn mt-7 rounded-[30px] px-5 py-3">
                  <p className="text-lg font-bold">Register</p>
                </Button>
              </Link>
            </SheetClose>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;

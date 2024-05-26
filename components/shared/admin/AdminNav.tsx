"use client";
import React from "react";
import { FaBell } from "react-icons/fa";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { signOut } from "next-auth/react";

type Props = {
  user?: any;
};

const AdminNav = ({ user }: Props) => {
  return (
    <div className="flex px-8 sm:hidden">
      <h3>SAelearning</h3>
      <div>
        <FaBell />
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
                <div>
                  <p>Hello</p>
                  <p>Hello</p>
                  <p>Hello</p>
                </div>
              </SheetClose>
              <div className="flex flex-col gap-3">
                <SheetClose asChild>
                  {user ? (
                    <Button
                      onClick={() =>
                        signOut({
                          redirect: true,
                          callbackUrl: "/",
                        })
                      }
                      className="mt-5 btn rounded-md text-sm shadow-sm hover:shadow-md"
                    >
                      Sign Out
                    </Button>
                  ) : (
                    <Button className="mt-5 btn rounded-full text-sm shadow-sm hover:shadow-md">
                      <a href="/login" className="text-lg font-semibold">
                        Register/Login
                      </a>
                    </Button>
                  )}
                </SheetClose>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
};

export default AdminNav;

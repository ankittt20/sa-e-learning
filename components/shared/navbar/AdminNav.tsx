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
    <div className="flex justify-between p-8 sm:hidden">
      <h3 className="text-xl font-bold">
        <a href="/">SAelearning</a>
      </h3>
      <div className="flex items-center space-x-4">
        <FaBell color="#7D6DD8" size={20} />
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
                <div className="flex flex-col space-y-4 pt-7">
                  <a href="/">Home</a>
                  <a href="/admin">Dashboard</a>
                  <a href="/courses">Courses</a>
                  <a href="/settings">Settings</a>
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
                      className="btn mt-5 rounded-md text-sm shadow-sm hover:shadow-md"
                    >
                      Sign Out
                    </Button>
                  ) : (
                    <Button className="btn mt-5 rounded-md text-sm shadow-sm hover:shadow-md">
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

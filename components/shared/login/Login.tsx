"use client";
import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import Image from "next/image";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { FaChevronDown } from "react-icons/fa";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

type Props = {};

const Login = (props: Props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevent default form submission behavior

    try {
      const signInData = await signIn("credentials", {
        email,
        password,
        callbackUrl: "/dashboard",
      });

      console.log(signInData);

      if (signInData?.error) {
        throw new Error("Authentication failed: " + signInData.error);
      } else {
        // Redirect to dashboard upon successful authentication
        router.replace("/dashboard");
      }
    } catch (error) {
      console.error("The error at authentication is", error);
      alert("Something went wrong during authentication!");
    }
  };

  return (
    <div className="grid h-screen grid-cols-1 sm:grid-cols-10 sm:overflow-hidden">
      <div className="col-span-4 flex justify-center bg-primary-100 sm:justify-start sm:bg-[#F8BC12]">
        <h3 className="p-8 text-3xl font-bold max-sm:hidden">
          <a href="/">SAelearning</a>
        </h3>
        <Image
          className="left-24 top-24 w-72 sm:absolute sm:w-[418px]"
          src="./assets/icons/login-icon.svg"
          alt="Login"
          width={450}
          height={450}
        />
      </div>
      <div className="order-first col-span-6 mx-auto flex w-80 flex-col justify-center sm:order-none sm:w-[420px]">
        <h1 className="mb-6 text-3xl font-bold sm:text-[40px]">Log In</h1>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              className="text-gray-700 mb-2 block text-[12px] font-semibold sm:text-[16px]"
              htmlFor="email"
            >
              Email
            </label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              id="email"
              name="email"
              className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-[#BBC8D4] shadow focus:outline-none"
              placeholder="wbelenskyweber@gmail.com"
            />
          </div>

          <div className="mb-4">
            <label
              className="text-gray-700 mb-2 block text-[12px] font-semibold sm:text-[16px]"
              htmlFor="password"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-[#BBC8D4] shadow focus:outline-none"
              placeholder="Password"
            />
          </div>
          <div className="mb-4 flex justify-between">
            <div className="mb-4 flex items-center">
              <input
                type="radio"
                id="keepSignedIn"
                name="keepSignedIn"
                className="mr-2"
              />
              <label
                className="text-[12px] font-bold text-[#6D7D8B] sm:text-[16px]"
                htmlFor="keepSignedIn"
              >
                Keep me signed
              </label>
            </div>

            <div className="sm:mb-4">
              <a
                href="#"
                className="text-[12px] font-bold text-[#7D6DD8] sm:text-[16px]"
              >
                Forgot Password?
              </a>
            </div>
          </div>

          <Button
            type="submit"
            className="btn mb-4 w-full rounded-[30px] text-[12px] font-bold sm:text-[16px]"
          >
            Log In
          </Button>
        </form>
        <div className="flex justify-center space-x-2 text-[12px] font-bold sm:text-[16px]">
          <p className="text-[#6D7D8B]">Don&apos;t have an account?</p>
          <a className="text-[#7D6DD8]" href="/signup">
            Create an account
          </a>
        </div>

        <div className="right-20 top-10 my-4 sm:absolute">
          <DropdownMenu>
            <DropdownMenuTrigger className="w-full rounded-md border-[1px] border-accent-blue p-3 text-center text-xs text-accent-blue outline-none sm:h-8 sm:w-36 sm:p-0 sm:text-[16px]">
              Select a Role <FaChevronDown className="ml-3 inline sm:ml-0" />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>Roles</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Option 1</DropdownMenuItem>
              <DropdownMenuItem>Option 2</DropdownMenuItem>
              <DropdownMenuItem>Option 3</DropdownMenuItem>
              <DropdownMenuItem>Option 4</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </div>
  );
};

export default Login;

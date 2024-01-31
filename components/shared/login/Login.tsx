import { Button } from "@/components/ui/button";
import React from "react";
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

type Props = {};

const Login = (props: Props) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-10 h-screen sm:overflow-hidden">
      <div className="col-span-4 bg-primary-100 sm:bg-[#F8BC12] flex justify-center sm:justify-start">
        <h3 className="text-3xl font-bold p-8 max-sm:hidden">SAelearning</h3>
        <Image
          className="sm:absolute top-24 left-24 w-72 sm:w-[293px]"
          src="./assets/icons/login-icon.svg"
          alt="Login"
          width={450}
          height={450}
        />
      </div>
      <div className="col-span-6 w-80 sm:w-[420px] flex flex-col justify-center mx-auto order-first sm:order-none">
        <h1 className="text-3xl sm:text-[40px] font-bold mb-6">Log In</h1>

        <form>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-[12px] sm:text-[16px] font-semibold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-[#BBC8D4] leading-tight focus:outline-none focus:shadow-outline"
              placeholder="wbelenskyweber@gmail.com"
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 text-[12px] sm:text-[16px] font-semibold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-[#BBC8D4] leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Password"
            />
          </div>
          <div className="flex justify-between mb-4">
            <div className="mb-4 flex items-center">
              <input
                type="radio"
                id="keepSignedIn"
                name="keepSignedIn"
                className="mr-2"
              />
              <label
                className="text-[#6D7D8B] text-[12px] sm:text-[16px] font-bold"
                htmlFor="keepSignedIn"
              >
                Keep me signed
              </label>
            </div>

            <div className="sm:mb-4">
              <a
                href="#"
                className="text-[#7D6DD8] text-[12px] sm:text-[16px] font-bold"
              >
                Forgot Password?
              </a>
            </div>
          </div>

          <Button
            type="submit"
            className="btn w-full rounded-[30px] mb-4 text-[12px] sm:text-[16px] font-bold"
          >
            Log In
          </Button>
        </form>
        <div className="flex justify-center space-x-2 text-[12px] sm:text-[16px] font-bold">
          <p className="text-[#6D7D8B]">Don't have an account?</p>
          <a className="text-[#7D6DD8]" href="/signup">
            Create an account
          </a>
        </div>

        <div className="sm:absolute top-10 right-20 my-4">
          <DropdownMenu>
            <DropdownMenuTrigger className="w-full sm:w-36 sm:h-8 rounded-md text-xs p-3 sm:p-0 sm:text-[16px] border-[1px] border-accent-blue outline-none text-center text-accent-blue">
              Select a Role <FaChevronDown className="inline ml-3 sm:ml-0" />
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

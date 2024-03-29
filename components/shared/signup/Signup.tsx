"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
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

const Signup = (props: Props) => {
  const router = useRouter();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // Prevent default form submission behavior

    const formData = new FormData(event.currentTarget);
    const formDataJSON = Object.fromEntries(formData.entries());

    const response = await fetch("/api/user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formDataJSON),
    });

    if (response.ok) {
      router.push("/login");
    } else {
      alert("Something went wrong!");
    }
  };

  return (
    <div>
      <div className="bg-[#F8BC12] h-64 p-7 max-sm:hidden">
        <h3 className="text-3xl font-bold">
          <a href="/">SAelearning</a>
        </h3>
        <h3 className="flex justify-center mt-24 text-4xl font-bold">
          Sign Up
        </h3>
        <Image
          src="/assets/images/signup-page-image.png"
          alt="Signup"
          width={500}
          height={500}
          className="absolute top-0 right-80 h-64 w-56"
        />
      </div>
      <div>
        <h3 className="pl-7 mb-10 text-2xl font-bold sm:hidden">Sign Up</h3>
      </div>
      <div className="flex justify-center sm:py-16">
        <form onSubmit={handleSubmit}>
          <div className="sm:flex sm:space-x-10 mb-4">
            <div className="mb-4 sm:mb-0">
              <label
                className="block text-gray-700 text-[12px] sm:text-[16px] font-semibold mb-2"
                htmlFor="name"
              >
                Full Name
              </label>
              <input
                type="name"
                id="name"
                name="name"
                className="w-80 shadow appearance-none border border-[#BBC8D4] rounded py-2 px-3 placeholder:text-[#BBC8D4] leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter your Full Name"
              />
            </div>
            <div>
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
                className="w-80 shadow appearance-none border border-[#BBC8D4] rounded py-2 px-3 placeholder:text-[#BBC8D4] leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter your Email"
              />
            </div>
          </div>

          <div className="sm:flex sm:space-x-10 mb-4">
            <div className="mb-4 sm:mb-0">
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
                className="w-80 shadow appearance-none border border-[#BBC8D4] rounded py-2 px-3 placeholder:text-[#BBC8D4] leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter your Password"
              />
            </div>
            <div>
              <label
                className="block text-gray-700 text-[12px] sm:text-[16px] font-semibold mb-2"
                htmlFor="gender"
              >
                Select your Gender
              </label>
              <select
                id="gender"
                name="gender"
                className="w-80 shadow appearance-none border border-[#BBC8D4] rounded py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
              >
                <option autoFocus selected disabled>
                  Select Gender
                </option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </div>
          </div>

          <div className="sm:flex sm:space-x-10 mb-5">
            <div>
              <label
                className="block text-gray-700 text-[12px] sm:text-[16px] font-semibold mb-2"
                htmlFor="category"
              >
                Category
              </label>
              <select
                id="category"
                name="category"
                className="w-80 shadow appearance-none border border-[#BBC8D4] rounded py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
              >
                <option autoFocus selected disabled>
                  Select Category
                </option>
                <option value="Student">Student</option>
                <option value="Tutor">Tutor</option>
                <option value="Other">Other</option>
              </select>
            </div>
          </div>

          <div className="flex space-x-2 mb-10">
            <input type="checkbox" required />
            <label className="text-[#6D7D8B] text-sm">
              I accept all terms and conditions.
            </label>
          </div>

          <Button
            type="submit"
            className="btn w-full rounded-[30px] mb-4 text-[12px] sm:text-[16px] font-bold"
          >
            Sign Up
          </Button>
        </form>
      </div>

      <div className="flex justify-center sm:absolute top-10 right-20 mt-4 mb-10">
        <DropdownMenu>
          <DropdownMenuTrigger className="bg-accent-blue text-primary-100 w-80 sm:w-36 sm:h-8 rounded-md text-xs p-3 sm:p-0 border-[1px] border-accent-blue outline-none text-center">
            Select a Role <FaChevronDown className="inline ml-3 sm:ml-2" />
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
  );
};

export default Signup;

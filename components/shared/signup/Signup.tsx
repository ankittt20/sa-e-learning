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
    event.preventDefault();

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
      <div className="h-64 bg-[#F8BC12] p-7 max-sm:hidden">
        <h3 className="text-3xl font-bold">
          <a href="/">SAelearning</a>
        </h3>
        <h3 className="mt-24 flex justify-center text-4xl font-bold">
          Sign Up
        </h3>
        <Image
          src="/assets/images/signup-page-image.png"
          alt="Signup"
          width={500}
          height={500}
          className="absolute right-80 top-0 h-64 w-56"
        />
      </div>
      <div>
        <h3 className="mb-10 pl-7 text-2xl font-bold sm:hidden">Sign Up</h3>
      </div>
      <div className="flex justify-center sm:py-16">
        <form onSubmit={handleSubmit}>
          <div className="mb-4 sm:flex sm:space-x-10">
            <div className="mb-4 sm:mb-0">
              <label
                className="text-gray-700 mb-2 block text-[12px] font-semibold sm:text-[16px]"
                htmlFor="name"
              >
                Full Name
              </label>
              <input
                type="name"
                id="name"
                name="name"
                className="focus:shadow-outline w-80 appearance-none rounded border border-[#BBC8D4] px-3 py-2 leading-tight shadow placeholder:text-[#BBC8D4] focus:outline-none"
                placeholder="Enter your Full Name"
              />
            </div>
            <div>
              <label
                className="text-gray-700 mb-2 block text-[12px] font-semibold sm:text-[16px]"
                htmlFor="email"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="focus:shadow-outline w-80 appearance-none rounded border border-[#BBC8D4] px-3 py-2 leading-tight shadow placeholder:text-[#BBC8D4] focus:outline-none"
                placeholder="Enter your Email"
              />
            </div>
          </div>

          <div className="mb-4 sm:flex sm:space-x-10">
            <div className="mb-4 sm:mb-0">
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
                className="focus:shadow-outline w-80 appearance-none rounded border border-[#BBC8D4] px-3 py-2 leading-tight shadow placeholder:text-[#BBC8D4] focus:outline-none"
                placeholder="Enter your Password"
              />
            </div>
            <div>
              <label
                className="text-gray-700 mb-2 block text-[12px] font-semibold sm:text-[16px]"
                htmlFor="gender"
              >
                Select your Gender
              </label>
              <select
                id="gender"
                name="gender"
                className="focus:shadow-outline w-80 appearance-none rounded border border-[#BBC8D4] px-3 py-2 leading-tight shadow focus:outline-none"
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

          <div className="mb-5 sm:flex sm:space-x-10">
            <div>
              <label
                className="text-gray-700 mb-2 block text-[12px] font-semibold sm:text-[16px]"
                htmlFor="category"
              >
                Category
              </label>
              <select
                id="category"
                name="category"
                className="focus:shadow-outline w-80 appearance-none rounded border border-[#BBC8D4] px-3 py-2 leading-tight shadow focus:outline-none"
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

          <div className="mb-10 flex space-x-2">
            <input type="checkbox" required />
            <label className="text-sm text-[#6D7D8B]">
              I accept all terms and conditions.
            </label>
          </div>

          <Button
            type="submit"
            className="btn mb-4 w-full rounded-[30px] text-[12px] font-bold sm:text-[16px]"
          >
            Sign Up
          </Button>
        </form>
      </div>

      <div className="right-20 top-10 mb-10 mt-4 flex justify-center sm:absolute">
        <DropdownMenu>
          <DropdownMenuTrigger className="w-80 rounded-md border-DEFAULT border-accent-blue bg-accent-blue p-3 text-center text-xs text-primary-100 outline-none sm:h-8 sm:w-36 sm:p-0">
            Select a Role <FaChevronDown className="ml-3 inline sm:ml-2" />
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

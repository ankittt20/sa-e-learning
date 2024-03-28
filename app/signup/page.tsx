"use client";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import React from "react";

type Props = {};

const page = (props: Props) => {
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
      console.log("Something went wrong!");
    }
  };

  return (
    <div>
      <div className="bg-[#F8BC12] h-64 p-7">
        <h3 className="text-3xl font-bold">
          <a href="/">SAelearning</a>
        </h3>
        <h3 className="flex justify-center mt-24 text-4xl font-bold">
          Sign Up
        </h3>
      </div>
      <div className="flex justify-center py-16">
        <form onSubmit={handleSubmit}>
          <div className="flex space-x-10 mb-4">
            <div>
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
                className="w-80 shadow appearance-none border rounded py-2 px-3 text-[#BBC8D4] leading-tight focus:outline-none focus:shadow-outline"
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
                className="w-80 shadow appearance-none border rounded py-2 px-3 text-[#BBC8D4] leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter your Email"
              />
            </div>
          </div>

          <div className="flex space-x-10 mb-4">
            <div>
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
                className="w-80 shadow appearance-none border rounded py-2 px-3 text-[#BBC8D4] leading-tight focus:outline-none focus:shadow-outline"
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
              <input
                type="gender"
                id="gender"
                name="gender"
                className="w-80 shadow appearance-none border rounded py-2 px-3 text-[#BBC8D4] leading-tight focus:outline-none focus:shadow-outline"
                placeholder="M/F/Others"
              />
            </div>
          </div>

          <div className="flex space-x-10 mb-10">
            <div>
              <label
                className="block text-gray-700 text-[12px] sm:text-[16px] font-semibold mb-2"
                htmlFor="name"
              >
                Category
              </label>
              <input
                type="category"
                id="category"
                name="category"
                className="w-80 shadow appearance-none border rounded py-2 px-3 text-[#BBC8D4] leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Student/Teacher/Other"
              />
            </div>
          </div>
          <Button
            type="submit"
            className="btn w-full rounded-[30px] mb-4 text-[12px] sm:text-[16px] font-bold"
          >
            Sign Up
          </Button>
        </form>
      </div>
    </div>
  );
};

export default page;

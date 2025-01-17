"use client";
import { addUserToNewsletter } from "@/actions/user.actions";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { FaEnvelope } from "react-icons/fa";
import { z } from "zod";

type Props = {};

const Newsletter = (props: Props) => {
  // email state
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const subscribeNewsLetterHandler = async () => {
    // check if the entered email is valid with zod
    const emailSchema = z.string().email();

    try {
      emailSchema.parse(email);
      const res = await addUserToNewsletter(email);
      if (res.success) {
        setEmail("");
        alert(
          "An email has been sent to your email address. Please verify your email to subscribe to the newsletter"
        );
      }
    } catch (err: any) {
      setError(err.errors[0].message);
    }
  };

  // if error exists clear the error after 5 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      if (error) setError("");
    }, 3000);

    return () => clearTimeout(timer);
  }, [error]);

  return (
    <div className="pt-10 sm:pt-0">
      <div className="rounded-3xl bg-accent-secondary px-4 pb-[82px] pt-[70px] sm:px-[75px]">
        <div className="flex flex-col items-center justify-center">
          <div>
            <Image
              src="/assets/icons/newsletter.svg"
              alt="Newsletter Icon"
              width={188}
              height={180.67}
            />
          </div>
          <div className="flex flex-col items-center justify-center">
            <h2 className="mb-5 text-[20px] font-bold sm:text-[48px]">
              Newsletter
            </h2>
            <p className="mb-12 text-center text-base sm:text-2xl">
              Subscribe to our newsletter for discounts.
            </p>
          </div>

          <form className="flex flex-col items-center justify-center gap-5 sm:flex-row">
            <div className="relative flex items-center">
              <FaEnvelope className="pointer-events-none absolute ml-5 text-[20px] font-bold text-[#000] sm:text-[30px]" />
              <input
                type="email"
                placeholder="Your Email"
                className="h-[56px] w-[240px] rounded-md border border-none border-[rgb(209,213,219)] px-[41px] py-[23px] pl-16 font-[#000] text-[20px] font-semibold outline-none placeholder:text-dark-100 sm:h-[90px] sm:w-[661px]"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            {error && <p className="text-[rgb(255,0,0)]">{error}</p>}
            <Button
              className="mx-auto h-[59px] w-[240px] rounded-lg bg-accent-blue px-[70px] py-[26px] sm:h-[90px]"
              onClick={subscribeNewsLetterHandler}
              type="button"
            >
              <p className="text-base font-bold text-primary-100 sm:text-[20px]">
                Subscribe
              </p>
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;

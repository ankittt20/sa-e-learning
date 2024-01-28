import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";
import { FaEnvelope } from "react-icons/fa";

type Props = {};

const Newsletter = (props: Props) => {
  return (
    <div className="rounded-3xl bg-[#E0DAFD] px-[75px] pb-[82px] pt-[70px]">
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
          <h2 className="mb-5 text-[48px] font-bold">Newsletter</h2>
          <p className="mb-12 text-center text-base sm:text-2xl">
            Subscribe to our newsletter for discounts.
          </p>
        </div>

        <form className="flex flex-col items-center justify-center gap-5 sm:flex-row">
          <div className="relative flex items-center">
            <FaEnvelope className="absolute ml-5 text-[#000] text-[20px] sm:text-[30px] font-bold pointer-events-none" />
            <input
              type="email"
              placeholder="Your Email"
              className="pl-16 h-[56px] sm:h-[90px] w-[240px] sm:w-[661px] rounded-md border border-none border-[rgb(209,213,219)] px-[41px] py-[23px] font-[#000] text-[20px] font-semibold placeholder-dark-100 outline-none"
            />
          </div>
          <Button className="h-[59px] sm:h-[90px] w-[240px] mx-auto rounded-xl bg-accent-blue px-[70px] py-[26px]">
            <p className="text-base font-bold text-primary-100 sm:text-[20px]">
              Subscribe
            </p>
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Newsletter;

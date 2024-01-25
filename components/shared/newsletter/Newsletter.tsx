import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

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
          <input
            type="email"
            placeholder="&#xf0e0; Your Email"
            className="h-[56px] w-[240px] rounded-md border border-none border-[rgb(209,213,219)] px-[41px] py-[23px] font-[#000] text-[20px] font-semibold  outline-none sm:h-[90px] sm:w-[661px]"
          />
          <Button className="mx-auto rounded-xl bg-accent-blue px-[70px] py-[26px] sm:h-[56px] sm:w-[240px]">
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

import React from "react";

type Props = {};

const Newsletter = (props: Props) => {
  return (
    <div className="bg-[#E0DAFD] pt-[70px] pr-[75px] pb-[82px] pl-[75px] rounded-3xl">
      <div className="flex flex-col justify-center items-center">
        <div>
          <img
            src="./assets/icons/newsletter.svg"
            alt="Newsletter Icon"
            className="w-[188px] h-[180.67px]"
          />
        </div>
        <div className="flex flex-col items-center justify-center">
          <h2 className="text-[48px] font-bold mb-5">Newsletter</h2>
          <p className="mb-12 text-[24px]">Subscribe to our newsletter for discounts.</p>
        </div>

        <form className="flex flex-row items-center space-x-[76px]">
          <input
            type="email"
            placeholder="&#xf0e0; Your Email"
            className="border border-gray-300 rounded-md px-[41px] py-[23px] w-[661px] h-[90px] font-inter text-[20px] font-semibold outline-none border-none placeholder-[#111]"
          />
          <button
            type="submit"
            className="bg-accent-blue font-inter text-[20px] font-semibold text-[#fff] px-[70px] py-[26px] rounded-md w-[240px] h-[90px]"
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
};

export default Newsletter;

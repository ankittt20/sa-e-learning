import React from "react";
import { FaChevronDown } from "react-icons/fa6";

const PresentEarnings = () => {
  return (
    <div className="rounded-2xl border border-[#E5E5E5] px-[2px] pt-3">
      <h6 className="text-center text-sm font-bold sm:text-[10px]">Today</h6>
      <div className="flex-center my-3 flex-col">
        <div className="flex gap-5 border-b border-dashed border-[rgba(0,0,0,0.15)] p-2">
          <div className="flex items-center gap-3">
            <div className="size-[18px] rounded bg-accent-pink"></div>
            <h6 className="text-sm font-medium text-[#292638] sm:text-[10px]">
              Parija faiza Freeza
            </h6>
            <div className="flex items-center gap-1">
              <span className="text-[10px] font-bold text-[#4DA33F]">+</span>
              <span className="text-[10px] font-medium text-[#4DA33F]">
                &#8377;3000/-
              </span>
            </div>
          </div>
        </div>
        <div className="flex-between w-full border-b border-dashed border-[rgba(0,0,0,0.15)] p-2">
          <div className="flex items-center gap-3">
            <div className="size-[18px] rounded bg-[#8181FF]"></div>
            <h6 className="text-sm font-medium text-[#292638] sm:text-[10px]">
              Adif collecyoung
            </h6>
            <div className="flex items-center gap-1">
              <span className="text-[10px] font-bold text-[#E48072]">-</span>
              <span className="text-[10px] font-medium text-[#E48072]">
                &#8377;2000/-
              </span>
            </div>
          </div>
        </div>
        <div className="flex w-full border-b border-dashed border-[rgba(0,0,0,0.15)] p-2">
          <div className="flex items-center gap-3">
            <div className="size-[18px] rounded bg-accent-pink"></div>
            <h6 className="text-sm font-medium text-[#292638] sm:text-[10px]">
              Parija faiza Freeza
            </h6>
            <div className="flex items-center gap-1">
              <span className="text-[10px] font-bold text-[#4DA33F]">+</span>
              <span className="text-[10px] font-medium text-[#4DA33F]">
                &#8377;3000/-
              </span>
            </div>
          </div>
        </div>
        <div className="flex-between border-b border-dashed border-[rgba(0,0,0,0.15)] p-2">
          <div className="flex items-center gap-3">
            <div className="size-[18px] rounded bg-accent-pink"></div>
            <h6 className="text-sm font-medium text-[#292638] sm:text-[10px]">
              Parija faiza Freeza
            </h6>
            <div className="flex items-center gap-1">
              <span className="text-[10px] font-bold text-[#4DA33F]">+</span>
              <span className="text-[10px] font-medium text-[#4DA33F]">
                &#8377;3000/-
              </span>
            </div>
          </div>
        </div>
        <div className="flex-between border-b border-dashed border-[rgba(0,0,0,0.15)] p-2">
          <div className="flex items-center gap-3">
            <div className="size-[18px] rounded bg-accent-pink"></div>
            <h6 className="text-sm font-medium text-[#292638] sm:text-[10px]">
              Parija faiza Freeza
            </h6>
            <div className="flex items-center gap-1">
              <span className="text-[10px] font-bold text-[#4DA33F]">+</span>
              <span className="text-[10px] font-medium text-[#4DA33F]">
                &#8377;3000/-
              </span>
            </div>
          </div>
        </div>
        <div className="flex w-full border-b border-dashed border-[rgba(0,0,0,0.15)] p-2">
          <div className="flex items-center justify-start gap-3">
            <div className="size-[18px] rounded bg-accent-pink"></div>
            <h6 className="text-sm font-medium text-[#292638] sm:text-[10px]">
              Parija faiza Freeza
            </h6>
            <div className="flex items-center gap-1">
              <span className="text-[10px] font-bold text-[#E48072]">-</span>
              <span className="text-[10px] font-medium text-[#E48072]">
                &#8377;3000/-
              </span>
            </div>
          </div>
        </div>
        <div className="flex-between border-b border-dashed border-[rgba(0,0,0,0.15)] p-2">
          <div className="flex items-center gap-3">
            <div className="size-[18px] rounded bg-accent-pink"></div>
            <h6 className="text-sm font-medium text-[#292638] sm:text-[10px]">
              Parija faiza Freeza
            </h6>
            <div className="flex items-center gap-1">
              <span className="text-[10px] font-bold text-[#4DA33F]">+</span>
              <span className="text-[10px] font-medium text-[#4DA33F]">
                &#8377;3000/-
              </span>
            </div>
          </div>
        </div>
        <div className="mx-auto">
          <FaChevronDown
            size={24}
            className="size-6 cursor-pointer text-[#D3E0FB]"
          />
        </div>
      </div>
    </div>
  );
};

export default PresentEarnings;

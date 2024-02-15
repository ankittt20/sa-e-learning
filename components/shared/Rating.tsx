import React from "react";
import { LiaStarSolid } from "react-icons/lia";

export const Rating = () => {
  return (
    <div className="flex gap-2">
      <LiaStarSolid className="size-4 text-[#FFAC0A]" />
      <LiaStarSolid className="size-4 text-[#FFAC0A]" />
      <LiaStarSolid className="size-4 text-[#FFAC0A]" />
      <LiaStarSolid className="size-4 text-[#FFAC0A]" />
      <LiaStarSolid className="size-4" />
    </div>
  );
};

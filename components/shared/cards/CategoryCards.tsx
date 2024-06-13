import Image from "next/image";
import Link from "next/link";
import React from "react";

interface categoryProps {
  heading: string;
  numbers: string;
  image: string;
  bgColor: string;
  category: number;
}

const CategoryCards = ({
  image,
  heading,
  numbers,
  bgColor,
  category,
}: categoryProps) => {
  return (
    <Link href={`/courses?category=${category}`}>
      <div
        className={`${bgColor} flex w-[286px] flex-col flex-wrap items-center justify-center gap-7 rounded-[10px] px-12 py-5 drop-shadow-2xl`}
      >
        <Image src={image} alt={heading} width={44} height={44} />
        <div className="text-center">
          <h4 className="text-xl font-bold sm:text-2xl">{heading}</h4>
          <p className="text-sm opacity-50 sm:text-lg">{numbers}</p>
        </div>
      </div>
    </Link>
  );
};

export default CategoryCards;

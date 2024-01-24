import CategoryCards from "@/components/shared/cards/CategoryCards";
import { categoryTypes } from "@/types/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const categories: categoryTypes[] = [
  {
    id: 1,
    image: "/assets/icons/design.svg",
    heading: "Design",
    numbers: "3.5k Courses",
    bgColor: "bg-[#E1F7E2]",
  },
  {
    id: 2,
    image: "/assets/icons/maths.svg",
    heading: "Mathmatics",
    numbers: "3.5k Courses",
    bgColor: "bg-[#FFF2E5]",
  },
  {
    id: 3,
    image: "/assets/icons/dev.svg",
    heading: "Development",
    numbers: "3.5k Courses",
    bgColor: "bg-[#FEF1F0]",
  },
  {
    id: 4,
    image: "/assets/icons/design.svg",
    heading: "Design",
    numbers: "3.5k Courses",
    bgColor: "bg-[#F4F4F4]",
  },
];

const Categories = () => {
  return (
    <div>
      <div className="flex items-center justify-between">
        <h2 className="h2-bold">Browse from our Top Categories</h2>

        <Link
          href="/"
          className="header-nav flex items-center justify-center gap-7"
        >
          Browse More{" "}
          <Image
            src="/assets/icons/arrow-right.svg"
            alt="browse more"
            width={24}
            height={24}
          />
        </Link>
      </div>
      <div className="mt-20 flex items-center justify-center gap-8 bg-[url('/assets/images/backgroundCategories.svg'),url('/assets/images/backgroundCategories3.svg'),url('/assets/images/backgroundCategories2.svg')]">
        {categories.map((category) => {
          return (
            <CategoryCards
              key={category.id}
              heading={category.heading}
              numbers={category.numbers}
              bgColor={category.bgColor}
              image={category.image}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Categories;

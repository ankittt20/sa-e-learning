import TopicAndMore from "@/components/shared/TopicAndMore";
import CategoryCards from "@/components/shared/cards/CategoryCards";
import { categoryTypes } from "@/types/types";
import Link from "next/link";
import React from "react";
import { FaArrowRight } from "react-icons/fa";

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
      <div className="max-sm:hidden">
        <TopicAndMore link="/categories" heading="Browser our Top Categories" />
      </div>
      <div className="flex justify-between text-sm font-semibold sm:hidden">
        <p>Browser our Top Categories</p>
        <Link href="/categories" className="text-accent-blue">
          Browse More
          <FaArrowRight className="inline-block ml-2" />
        </Link>
      </div>
      <div className="mt-10 sm:mt-20 flex flex-wrap items-center justify-center gap-4 bg-[url('/assets/images/backgroundCategories.svg'),url('/assets/images/backgroundCategories3.svg'),url('/assets/images/backgroundCategories2.svg')]">
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

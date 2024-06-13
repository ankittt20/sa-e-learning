import { getAllCategories } from "@/actions/generalFunctions.actions";
import TopicAndMore from "@/components/shared/TopicAndMore";
import CategoryCards from "@/components/shared/cards/CategoryCards";
import Link from "next/link";
import React from "react";
import { FaArrowRight } from "react-icons/fa";

// const categories: categoryTypes[] = [
//   {
//     id: 1,
//     image: "/assets/icons/design.svg",
//     heading: "Design",
//     numbers: "3.5k Courses",
//     bgColor: "bg-[#E1F7E2]",
//   },
//   {
//     id: 2,
//     image: "/assets/icons/maths.svg",
//     heading: "Mathmatics",
//     numbers: "3.5k Courses",
//     bgColor: "bg-[#FFF2E5]",
//   },
//   {
//     id: 3,
//     image: "/assets/icons/dev.svg",
//     heading: "Development",
//     numbers: "3.5k Courses",
//     bgColor: "bg-[#FEF1F0]",
//   },
//   {
//     id: 4,
//     image: "/assets/icons/design.svg",
//     heading: "Design",
//     numbers: "3.5k Courses",
//     bgColor: "bg-[#F4F4F4]",
//   },
// ];

const Categories = async () => {
  const res = await getAllCategories();

  return (
    <div>
      <div className="max-sm:hidden">
        <TopicAndMore link="/categories" heading="Browser our Top Categories" />
      </div>
      <div className="flex justify-between text-sm font-semibold sm:hidden">
        <p>Browser our Top Categories</p>
        <Link href="/categories" className="text-accent-blue">
          Browse More
          <FaArrowRight className="ml-2 inline-block" />
        </Link>
      </div>
      <div className="mt-10 flex flex-wrap items-center justify-center gap-4 bg-[url('/assets/images/backgroundCategories.svg'),url('/assets/images/backgroundCategories3.svg'),url('/assets/images/backgroundCategories2.svg')] sm:mt-20">
        {res.categories.map((category) => {
          return (
            <CategoryCards
              key={category.id}
              heading={category.name}
              numbers={category._count.course + " Courses"}
              bgColor={"bg-[#F4F4F4]"}
              image={category.icon || "/assets/icons/design.svg"}
              category={category.id}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Categories;

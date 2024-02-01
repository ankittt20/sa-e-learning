import Footer from "@/components/shared/footer/Footer";
import Filter from "@/components/shared/forms/filters/Filter";
import FilterInput from "@/components/shared/forms/inputs/FilterInput";
import Navbar from "@/components/shared/navbar/Navbar";
import { Button } from "@/components/ui/button";
import { FaSearch } from "react-icons/fa";
import React from "react";
import SideFilter from "@/components/shared/SideFilter";
// import Caraousel from "@/components/shared/Caraousel";

type Props = {};

// const caraouselItems = [
//   {
//     id: 1,
//     title: "Black Friday Sale",
//     image: "/assets/icons/refresh.svg",
//   },
//   {
//     id: 2,
//     title: "C Programming",
//     image: "/assets/icons/c.png",
//   },
//   {
//     id: 3,
//     title: "React",
//     image: "/assets/icons/react.png",
//   },
//   {
//     id: 4,
//     title: "C Programming",
//     image: "/assets/icons/c1.svg",
//   },
//   {
//     id: 5,
//     title: "Java",
//     image: "/assets/icons/java.png",
//   },
//   {
//     id: 6,
//     title: "Operating System",
//     image: "/assets/icons/os.svg",
//   },
//   {
//     id: 7,
//     title: "CSS",
//     image: "/assets/icons/css.png",
//   },
//   {
//     id: 8,
//     title: "C Programming",
//     image: "/assets/icons/c2.svg",
//   },
// ];

const page = (props: Props) => {
  return (
    <div className="w-full bg-no-repeat sm:bg-[url('/assets/images/navborder.svg')]">
      <div className="container">
        <Navbar />
        <div className="my-28">
          <div>
            <h3 className="h3-bold-extra text-center leading-9 sm:text-left">
              Browse Courses & More{" "}
              <span className="whitespace-nowrap text-accent-pink">
                “100 Products”
              </span>
            </h3>
            <div className="mt-11 flex flex-wrap items-end justify-between gap-6">
              <Filter label="Sort By" forType="sort" placeholder="Popular" />
              <Filter label="Categories" forType="sort" placeholder="All" />
              <FilterInput
                label="Search"
                forType="search"
                placeholder="Filter by Course"
              />
              <Button className="rounded-lg bg-accent-blue">
                <FaSearch size={17} color="#fff" />
              </Button>
            </div>
            {/* <Caraousel items={caraouselItems} /> */}
            <div className="mt-28">
              <SideFilter />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default page;

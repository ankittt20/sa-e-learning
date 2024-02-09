"use client";
import React from "react";
// import { useParams } from "next/navigation";
import Image from "next/image";
import Navbar from "@/components/shared/navbar/Navbar";
import FilterInput from "@/components/shared/forms/inputs/FilterInput";
import { Button } from "@/components/ui/button";
import { FaSearch } from "react-icons/fa";

const CourseDetails = () => {
  //   const params = useParams();

  return (
    <div className="bg-no-repeat sm:bg-[url('/assets/images/navborder.svg')]">
      <div className="container">
        <Navbar />
        <div className="mt-28 flex flex-wrap justify-between gap-8">
          <h3 className="h3-bold-extra max-sm:text-center">
            System Administration and IT{" "}
            <span className="text-accent-pink">
              Infrastructure <br />
              Services
            </span>
          </h3>
          <div className="flex items-end justify-end gap-4">
            <FilterInput
              label="Search"
              forType="search"
              placeholder="Find Your Course"
            />
            <Button className="rounded-lg bg-accent-blue">
              <FaSearch size={17} color="#fff" />
            </Button>
          </div>
        </div>
        <div className="mt-28">
          <div className="flex">
            <div>
              <div className="relative max-w-[811px] rounded-xl">
                <div className="">
                  <Image
                    src="/assets/images/courseDetail.png"
                    width={811}
                    height={506}
                    alt="course"
                    className="rounded-t-xl"
                  />
                  <div>
                    <h5 className="absolute left-[24px] top-[28px] text-[10px] font-bold uppercase text-primary-100">
                      Programming
                    </h5>
                    <div className="absolute right-[12px] top-[12px] flex justify-between rounded-full bg-primary-100 p-2">
                      <Image
                        src="/assets/icons/star.svg"
                        width={16}
                        height={16}
                        alt="play"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-12">
                <h4 className="heading-semibold text-[#333333]">Description</h4>
                <p className="">
                  Though the gravity still dragged at him, his muscles were
                  making great efforts to adjust. After the daily classes he no
                  longer collapsed immediately into bed. Only the nightmares got
                  worse. What looked like a small patch of purple grass, above
                  five feet square, was moving across the sand in their
                  direction. When it came near enough he perceived that it was
                  not grass; there were no blades, but only purple roots. The
                  roots were revolving, for each small plant in the whole patch,
                  like the spokes of a rimless wheel.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;

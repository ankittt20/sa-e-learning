"use client";
import React, { useState } from "react";
import { SUITALBE_FOR } from "@/constants/filters";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Slider } from "@/components/ui/slider";
import { Button } from "../ui/button";
import { filterCourses } from "@/actions/course.action";

interface Props {
  categories: {
    id: number;
    name: string;
    value: number;
  }[];
  handleSearch: (courses: any) => void;
}

const SideFilter = ({ categories, handleSearch }: Props) => {
  // create a filter state
  const [filter, setFilter] = useState({
    category: 0,
    price: -1,
    suitableFor: "",
  });

  // handle filter
  const handleFilter = async () => {
    const res = await filterCourses(filter);
    console.log(res.courses);
    if (res.success) {
      handleSearch(res.courses);
    }
  };

  return (
    <div className="h-fit w-[350px] rounded-xl border border-[rgba(0,0,0,0.2)] p-5 max-sm:hidden">
      <div className="flex items-center justify-between">
        <h3 className="text-2xl font-bold">Filter</h3>
        <span className="cursor-pointer text-xs font-bold text-accent-pink underline underline-offset-4">
          Reset Filter
        </span>
      </div>

      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger className=" items-center justify-between border-b  text-left font-bold">
            Shop By Category
          </AccordionTrigger>
          <AccordionContent className="mt-4">
            {categories.map((category) => {
              return (
                <div
                  className={`flex cursor-pointer items-center justify-between  gap-3 border-b ${
                    category.id === filter.category && "bg-accent-secondary"
                  }`}
                  key={category.id}
                  onClick={() => {
                    setFilter({ ...filter, category: category.id });
                  }}
                >
                  <div className="flex items-center">
                    <span className="my-4 text-[15px] font-medium">
                      {category.name}
                    </span>
                  </div>
                </div>
              );
            })}
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger className=" items-center justify-between border-b  text-left font-bold">
            Price
          </AccordionTrigger>
          <AccordionContent className="mt-4">
            <div>
              <Slider
                step={1}
                max={100}
                min={1}
                onValueChange={(value) => {
                  setFilter({ ...filter, price: +value });
                }}
              />
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger className=" items-center justify-between border-b  text-left font-bold">
            Suitable For
          </AccordionTrigger>
          <AccordionContent className="mt-4">
            {SUITALBE_FOR.map((v) => {
              return (
                <div
                  className={`flex cursor-pointer items-center justify-between  gap-3 border-b ${
                    v.name === filter.suitableFor && "bg-accent-secondary"
                  }`}
                  key={v.id}
                  onClick={() => {
                    setFilter({ ...filter, suitableFor: v.name });
                  }}
                >
                  <div className="flex items-center">
                    <span className="my-4 text-[15px] font-medium">
                      {v.name}
                    </span>
                  </div>
                </div>
              );
            })}
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      <div className="flex items-center justify-center">
        <Button
          className="mx-auto mt-5 rounded-[50px] bg-accent-pink px-20 py-6 text-[20px] font-medium text-[#fff]"
          onClick={handleFilter}
        >
          {" "}
          Save Filter
        </Button>
      </div>
    </div>
  );
};

export default SideFilter;

import React from "react";
import { FILTERS } from "@/constants/filters";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Slider } from "@/components/ui/slider";
import { Button } from "../ui/button";

const SideFilter = () => {
  return (
    <div className="h-fit w-[350px] rounded-xl border border-[rgba(0,0,0,0.2)] p-5 max-sm:hidden">
      <div className="flex items-center justify-between">
        <h3 className="text-2xl font-bold">Filter</h3>
        <span className="text-xs font-bold text-accent-pink underline underline-offset-4">
          Reset Filter
        </span>
      </div>
      {FILTERS.map((filter) => {
        return (
          <Accordion type="single" collapsible key={filter.id}>
            <AccordionItem value="item-1">
              <AccordionTrigger className=" items-center justify-between border-b  text-left font-bold">
                {filter.name}
              </AccordionTrigger>
              <AccordionContent className="mt-4">
                {filter?.type === "slider" ? (
                  <div>
                    <Slider step={1} max={100} min={1} />
                  </div>
                ) : (
                  filter?.subFilters?.map((subFilter) => {
                    return (
                      <div
                        className="flex items-center justify-between gap-3  border-b"
                        key={subFilter.id}
                      >
                        <div className="flex items-center">
                          <span className="my-4 text-[15px] font-medium">
                            {subFilter.name}
                          </span>
                        </div>
                      </div>
                    );
                  })
                )}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        );
      })}
      <div className="flex items-center justify-center">
        <Button className="mx-auto mt-5 rounded-[50px] bg-accent-pink px-20 py-6 text-[20px] font-medium text-[#fff]">
          {" "}
          Save Filter
        </Button>
      </div>
    </div>
  );
};

export default SideFilter;

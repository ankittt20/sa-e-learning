import React from "react";
import CUD from "../actions/CUD";
import { FaCheckSquare } from "react-icons/fa";

const categories = [
  "LANGUAGE",
  "DESIGNING",
  "PROGRAMMING",
  "IT SERVICES",
  "CYBER SECURITY",
  "CLOUD",
  "ML",
  "SQL",
  "AI",
];

type Props = {};

const Categories = (props: Props) => {
  return (
    <div>
      <div className="flex items-center justify-between">
        <h1 className="text-[15px] font-medium">Categories</h1>
        <p className="text-accent-blue text-xs font-semibold">See all</p>
      </div>
      <div className="border-1 border-[#EDEDED] shadow-sm rounded-lg py-5">
        <div className="flex justify-between px-2 mb-5">
          <div className="flex items-center space-x-2">
            <FaCheckSquare />
            <p className="text-accent-blue text-xs font-poppins font-semibold">
              Select All
            </p>
          </div>
        </div>
        <div className="px-2 space-y-2">
          {categories.map((category, index) => (
            <div key={index} className="flex justify-between">
              <div className="flex items-center space-x-2">
                <FaCheckSquare />
                <p className="text-[#292638] text-xs font-medium">
                  {category}
                </p>
              </div>
              <CUD />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Categories;

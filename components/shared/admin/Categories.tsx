"use client";
import React, { useEffect, useState } from "react";
import CUD from "../actions/CUD";
import { FaCheckSquare } from "react-icons/fa";
import {
  getCategories,
  deleteCategory,
  addCategory,
} from "@/actions/admin.actions";

// const categories = [
//   "LANGUAGE",
//   "DESIGNING",
//   "PROGRAMMING",
//   "IT SERVICES",
//   "CYBER SECURITY",
//   "CLOUD",
//   "ML",
//   "SQL",
//   "AI",
// ];

type Props = {};

const Categories = (props: Props) => {
  const [categories, setCategories] = useState<any>();

  useEffect(() => {
    const fetchCategories = async () => {
      const { categories, success } = await getCategories();

      if (success) {
        setCategories(categories);
      }
    };

    fetchCategories();
  }, []);
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
          {categories?.map((category: any) => (
            <div key={category?.id} className="flex justify-between">
              <div className="flex items-center space-x-2">
                <p className="text-[#292638] text-xs font-medium uppercase tracking-wide">
                  {category?.name}
                </p>
              </div>
              <CUD
                selectedItemId={category.id}
                handleDeleteClick={() => deleteCategory(category.id)}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Categories;

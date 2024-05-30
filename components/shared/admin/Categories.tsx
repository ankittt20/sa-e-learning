"use client";
import React, { useEffect, useState } from "react";
import CUD from "../actions/CUD";
import { FaCheckSquare } from "react-icons/fa";
import { getCategories, deleteCategory } from "@/actions/admin.actions";
import AddCategory from "./AddCategory";

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
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center">
          <h1 className="text-[15px] font-medium">Categories</h1>
        </div>
        <AddCategory />
      </div>
      <div className="rounded-lg border border-[#EDEDED] py-5 shadow-sm">
        <div className="mb-5 flex justify-between px-2">
          <div className="flex items-center space-x-2">
            <FaCheckSquare />
            <p className="font-poppins text-xs font-semibold text-accent-blue">
              Select All
            </p>
          </div>
        </div>
        <div className="space-y-2 px-2">
          {categories?.map((category: any) => (
            <div key={category?.id} className="flex justify-between">
              <div className="flex items-center space-x-2">
                <p className="text-xs font-medium uppercase tracking-wide text-[#292638]">
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

import React from "react";
import Image from "next/image";
import { FaRegBell, FaSearch } from "react-icons/fa";
import SideNav from "@/components/shared/navbar/SideNav";
import { Button } from "@/components/ui/button";
import FilterInput from "@/components/shared/forms/inputs/FilterInput";
import Filter from "@/components/shared/forms/filters/Filter";
import DataTable from "@/components/shared/table/DataTable";
import { mebersTableLabels, memberTableData } from "@/constants/tableHeaders";
import UserMap from "@/components/shared/UserMap";

const page = () => {
  return (
    <div className="flex gap-3">
      <SideNav />
      <div className="container">
        <div className="flex-between container p-5 sm:hidden">
          <h2 className="font-lalezar text-[20px]">SAelearning</h2>
          <div className="flex items-center gap-4">
            <FaRegBell size={18} className="size-[18px] text-[#7D6DD8]" />
            <Image
              src="/assets/icons/hamburger.svg"
              alt="menu"
              width={18}
              height={24}
              className="cursor-pointer"
            />
          </div>
        </div>
        <main className="py-12">
          <h4 className="text-semibold-lg-xl max-sm:text-[20px]">
            All Members
          </h4>
          <div>
            <div className="flex flex-wrap items-center gap-3">
              <Filter
                label=""
                forType=""
                placeholder="Admin"
                width="w-[100px]"
              />
              <div className="flex items-center gap-6">
                <FilterInput
                  label=""
                  forType="search-admins"
                  placeholder="Find Admins, Tutors, Students...."
                />
                <Button className="mb-[-12px] size-10 rounded-md bg-accent-blue">
                  <FaSearch className="size-5 text-primary-100" />
                </Button>
              </div>
              <UserMap />
            </div>
            <div className="mt-12 max-sm:hidden">
              <DataTable labels={mebersTableLabels} data={memberTableData} />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default page;

import TopicAndMore from "@/components/shared/TopicAndMore";
import Header from "@/components/shared/dashboard/Header";
import Filter from "@/components/shared/forms/filters/Filter";
import FilterInput from "@/components/shared/forms/inputs/FilterInput";
import SideNav from "@/components/shared/navbar/SideNav";
import DataTable from "@/components/shared/table/DataTable";
import AdminCard from "@/components/shared/super-admin/AdminCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FaSearch } from "react-icons/fa";
import { IoIosMore } from "react-icons/io";
import Image from "next/image";
import {
  mebersTableLabels,
  memberTableData,
  permissionsTableLabels,
  permissionsTableValues,
} from "@/constants/tableHeaders";
import React from "react";

const page = () => {
  return (
    <div className="flex gap-6">
      <SideNav />
      <div>
        <Header heading="Super Admin" />
        <div className="flex">
          <div className="w-full">
            <TopicAndMore
              heading="All Members"
              linkContent="See all"
              styles="text-2xl font-semibold text-[#292638]"
              linkStyle="text-xs font-semibold text-accent-blue"
            />
            <div className="flex items-center gap-3">
              <Filter
                label=""
                forType=""
                placeholder="Admin"
                width="w-[100px]"
              />
              <FilterInput
                label=""
                forType="search-admins"
                placeholder="Find Admins, Tutors, Students...."
              />
              <Button className="mb-[-12px] size-10 rounded-md bg-accent-blue">
                <FaSearch className="size-5 text-primary-100" />
              </Button>
              <div className="flex-center mb-[-12px] ml-6 gap-4 py-3">
                <div className="flex-center gap-2">
                  <div className="relative size-[18px] rounded bg-[#8181FF]"></div>
                  <span className="text-xs font-semibold">Students</span>
                </div>
                <div className="flex-center gap-2">
                  <div className="size-[18px] rounded bg-accent-pink"></div>
                  <span className="text-xs font-semibold">Teachers</span>
                </div>
                <div className="flex-center gap-2">
                  <div className="size-[18px] rounded bg-[#FFAC0A]"></div>
                  <span className="text-xs font-semibold">Admin</span>
                </div>
              </div>
            </div>
            <div className="mt-12">
              <DataTable labels={mebersTableLabels} data={memberTableData} />
            </div>
            <div className="mt-12">
              <div className="flex gap-6">
                <div>
                  <h4 className="text-semibold-2">Manage Admins</h4>
                  <div className="mt-4">
                    <AdminCard />
                    <AdminCard />
                    <AdminCard />
                  </div>
                </div>
                <div>
                  <h4 className="text-semibold-2">Chat</h4>
                  <div className="mt-4 flex items-center gap-3">
                    <Input
                      placeholder="Teachers,Admins"
                      className="rounded-3xl border border-[#E5E2F7] bg-[url('/assets/icons/search.png')] bg-[220px] bg-no-repeat sm:w-[265px]"
                    />
                    <IoIosMore className="size-8 text-[#0094FF]" />
                  </div>
                  <div className="mt-4 rounded-2xl bg-[rgba(0,148,255,0.2)] px-3 py-2">
                    <div className="flex-between">
                      <div className="flex items-center gap-4">
                        <div className="size-[18px] rounded bg-accent-pink"></div>
                        <Image
                          src="/assets/images/user.png"
                          alt="user"
                          width={28}
                          height={28}
                          className="rounded-full"
                        />
                        <p className="text-xs font-bold">Raul Fernandez</p>
                      </div>
                      <span className="text-[10px]">11:04</span>
                    </div>
                  </div>
                  <div className="mt-4 rounded-2xl bg-primary-100 px-3 py-2">
                    <div className="flex-between">
                      <div className="flex items-center gap-4">
                        <div className="size-[18px] rounded bg-[#FFAC0A]"></div>
                        <Image
                          src="/assets/images/user.png"
                          alt="user"
                          width={28}
                          height={28}
                          className="rounded-full"
                        />
                        <p className="text-xs font-bold">Hiral Wallia</p>
                      </div>
                      <span className="text-[10px]">Thu</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-12">
              <div className="flex-between">
                <h4 className="text-semibold-2">Manage Permissions</h4>
                <div className="flex items-center gap-4">
                  <div className="flex-center gap-2">
                    <div className="relative size-[18px] rounded bg-[#8181FF]"></div>
                    <span className="text-xs font-semibold">Students</span>
                  </div>
                  <div className="flex-center gap-2">
                    <div className="size-[18px] rounded bg-accent-pink"></div>
                    <span className="text-xs font-semibold">Teachers</span>
                  </div>
                  <div className="flex-center gap-2">
                    <div className="size-[18px] rounded bg-[#FFAC0A]"></div>
                    <span className="text-xs font-semibold">Admin</span>
                  </div>
                  <span className="ml-4 text-xs font-semibold text-accent-blue">
                    See all
                  </span>
                </div>
              </div>
              <div className="mt-4">
                <DataTable
                  labels={permissionsTableLabels}
                  data={permissionsTableValues}
                  hideControls
                />
              </div>
            </div>
            <div className="mt-12">
              <h4 className="text-semibold-2">Financial Trasactions</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;

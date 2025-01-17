import TopicAndMore from "@/components/shared/TopicAndMore";
import Header from "@/components/shared/super-admin/Header";
import Filter from "@/components/shared/forms/filters/Filter";
import FilterInput from "@/components/shared/forms/inputs/FilterInput";
import DataTable from "@/components/shared/table/DataTable";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FaSearch, FaArrowRight, FaRegBell } from "react-icons/fa";
import { IoIosMore } from "react-icons/io";
import Image from "next/image";
import {
  discountTableLabels,
  mebersTableLabels,
} from "@/constants/tableHeaders";
import Chart from "@/components/shared/charts/Chart";
import PresentEarnings from "@/components/shared/super-admin/PresentEarnings";
import DiscountTable from "@/components/shared/table/DiscountTable";
import ClassCard from "@/components/shared/super-admin/ClassCard";
import ClashCard from "@/components/shared/super-admin/ClashCard";
import Link from "next/link";
import PermissionTableMobile from "@/components/shared/table/PermissionTableMobile";
import DiscountTableMobile from "@/components/shared/table/DiscountTableMobile";
import MobileFooter from "@/components/shared/footer/MobileFooter";
import UserMap from "@/components/shared/UserMap";
import AddUserDialogue from "@/components/shared/AddUserDialogue";
import ManageAdmin from "@/components/shared/super-admin/ManageAdmin";
import PermissionTable from "@/components/shared/table/PermissionTable";
import Sidebar from "@/components/shared/navbar/Sidebar";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import AdminNav from "@/components/shared/navbar/AdminNav";

const page = async () => {
  const session = await getServerSession(authOptions);

  if (session?.user?.role !== "super-admin") {
    redirect("/login");
  }
  return (
    <>
      <div className="sm:flex w-full bg-no-repeat sm:bg-[url('/assets/images/navborder.svg')]">
        <AdminNav user={session?.user} />
        <div className="h-full w-[224px] bg-[#F3F1FC] max-sm:hidden">
          <Sidebar />
        </div>
        <div className="container sm:pb-16 sm:w-[calc(100vw-224px)]">
          <Header user={session?.user} title="Super Admin" />
          <div className="sm:flex sm:space-x-5">
            <div className="sm:w-2/3">
              <div className="flex-between">
                <h4 className="text-semibold-lg-xl max-sm:text-[20px]">
                  All Members
                </h4>
                <Link href="/all-members" className="text-xs text-accent-blue">
                  See all
                </Link>
              </div>
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
                <DataTable labels={mebersTableLabels} />
              </div>
              <div className="mt-12">
                <div className="flex flex-wrap gap-6 max-sm:justify-center">
                  <div>
                    <div className="flex flex-col items-center gap-5 sm:flex-row">
                      <h4 className="text-semibold-2">Manage Admins</h4>
                      <AddUserDialogue />
                    </div>
                    <ManageAdmin />
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
                  <h4 className="text-semibold-2 max-sm:px-4">
                    Manage Permissions
                  </h4>
                  <div className="flex items-center gap-3">
                    <UserMap />
                    <Link
                      href="/all-members"
                      className="mb-[-13px] p-0 text-xs text-accent-blue"
                    >
                      See all
                    </Link>
                  </div>
                </div>
                <div className="mt-4 max-sm:hidden">
                  <PermissionTable />
                </div>

                <div className="mt-4 sm:hidden">
                  <PermissionTableMobile />
                </div>
              </div>
              <div className="mt-12">
                <TopicAndMore
                  heading="Financial Transactions"
                  linkContent="View all transactions"
                  linkStyle="text-xs font-semibold"
                  styles="text-xs font-semibold sm:text-lg "
                />
                <div className="mt-6 flex flex-wrap gap-2 max-sm:items-center max-sm:justify-center">
                  <Chart />
                  <PresentEarnings />
                </div>
              </div>
              <div className="mt-12 w-full">
                <h4 className="text-lg font-semibold text-[#292638]">
                  Discounts and More
                </h4>
                <div className="mt-6 max-sm:hidden">
                  <DiscountTable labels={discountTableLabels} />
                </div>
                <div className="mt-6 sm:hidden">
                  <DiscountTableMobile />
                </div>
              </div>
            </div>

            <div>
              <TopicAndMore
                heading="Class Booking"
                linkContent="See all"
                styles="font-semibold"
                linkStyle="text-xs font-semibold text-accent-blue"
              />
              <div className="mt-6 flex flex-col gap-3">
                <ClassCard />
                <ClassCard />
                <ClassCard />
                <div className="mt-12">
                  <div className="flex items-center gap-3">
                    <h6 className="font-semibold">Booking Clashes</h6>
                    <FaArrowRight size={18} className="size-[18px]" />
                  </div>
                  <div className="mt-4 flex flex-col gap-3">
                    <ClashCard cardType="clash" />
                    <ClashCard cardType="clash" />
                    <Button className="flex-center gap-3 rounded-2xl bg-[rgba(92,169,98,0.6)] px-3 text-xs font-bold text-[#06610E]">
                      Notification Creature
                      <FaRegBell className="size-4" />
                    </Button>
                    <ClashCard cardType="notification" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mt-16 sm:hidden">
        <MobileFooter />
      </div>
    </>
  );
};

export default page;

import Feedback from "@/components/shared/admin/Feedback";
import Header from "@/components/shared/admin/Header";
import Sidebar from "@/components/shared/admin/Sidebar";
import About from "@/components/shared/tutor/About";
import Bookings from "@/components/shared/tutor/Bookings";
import Categories from "@/components/shared/tutor/Categories";
import ConnectWithStudent from "@/components/shared/tutor/ConnectWithStudent";
import ManageCertificates from "@/components/shared/tutor/ManageCertificates";
import ManageEvents from "@/components/shared/tutor/ManageEvents";
import PerformanceTab from "@/components/shared/tutor/PerformanceTab";
import Reviews from "@/components/shared/tutor/Reviews";
import SchoolRoomBooking from "@/components/shared/tutor/SchoolRoomBooking";
import SubjectAndArticles from "@/components/shared/tutor/SubjectAndArticles";
import TopPerformingTutor from "@/components/shared/tutor/TopPerformingTutor";
import UploadVideo from "@/components/shared/tutor/UploadVideo";
import React from "react";

type Props = {};

const page = (props: Props) => {
  return (
    <div className="flex pb-12 sm:pb-20 w-full bg-no-repeat sm:bg-[url('/assets/images/navborder.svg')]">
      <div className="h-full w-[224px] bg-[#F3F1FC] max-sm:hidden">
        <Sidebar />
      </div>
      <div className="container">
        <Header title="Tutor Dashboard" />
        <div className="flex space-x-5">
          <div className="space-y-10">
            <About />
            <Reviews />
            <div className="flex space-x-5">
              <PerformanceTab
                name="Students Performance"
                date="Grade Wise"
                progress={75}
                gradient="from-[#FFB167] to-[#FF6B8B]"
              />
              <PerformanceTab
                name="Subjects"
                date="Subject Wise"
                progress={26}
                gradient="from-[#FFB167] to-[#FF6B8B]"
              />
            </div>
            <div className="flex space-x-5">
              <SubjectAndArticles />
              <UploadVideo />
            </div>
            <Bookings />
            <ManageEvents />
            <SchoolRoomBooking />
            <ConnectWithStudent />
          </div>
          <div className="grow flex-col space-y-8 max-sm:items-center max-sm:justify-center">
            <Categories />
            <ManageCertificates />
            <Feedback />
            <TopPerformingTutor />
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;

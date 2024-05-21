import React from "react";
import ProgressTab from "./ProgressTab";
import PerformanceTab from "./PerformanceTab";
import Courses from "./Courses";
import Growth from "./Growth";
import ManageTutors from "./ManageTutors";
import ManageStudents from "./ManageStudents";
import ManageCourses from "./ManageCourses";
import ManageArticles from "./ManageArticles";
import ManageSessions from "./ManageSessions";
import ManageCertificates from "./ManageCertificates";
import ManageOffers from "./ManageOffers";

type Props = {};

const Stats = (props: Props) => {
  return (
    <>
      <div className="space-y-8">
        <div className="flex space-x-5">
          <ProgressTab
            name="Students Performance"
            progress={78}
            gradient="linear-gradient(90deg, #D7244F 0%, #D7244F 100%)"
          />
          <ProgressTab
            name="Tutor Performance"
            progress={22}
            gradient="linear-gradient(90deg, #1086B9 0%, #1086B9 100%)"
          />
        </div>
        <div>
          <h1 className="text-2xl text-[#222222 font-poppins] font-semibold">
            Performances
          </h1>
          <div className="flex space-x-5">
            <PerformanceTab
              name="Subjects"
              date="August 20, 2023"
              progress={75}
              gradient="linear-gradient(90deg, #0C6DFE 0%, #0C6DFE 100%)"
            />
            <PerformanceTab
              name="Articles"
              date="August 22, 2023"
              progress={60}
              gradient="linear-gradient(90deg, #D7244F 0%, #D7244F 100%)"
            />
          </div>
        </div>
        {/* <div className="flex space-x-5">
          <Courses />
          <Growth />
        </div> */}
        <div className="flex space-x-10">
          <ManageTutors />
          <ManageStudents />
        </div>
        <div>
          <ManageCourses />
        </div>
        <div className="space-y-8">
          <ManageArticles />
          <ManageSessions />
        </div>
        <div className="flex space-x-10 pb-8 sm:pb-16">
          <ManageCertificates />
          <ManageOffers />
        </div>
      </div>
    </>
  );
};

export default Stats;

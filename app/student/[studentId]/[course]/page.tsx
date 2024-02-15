import React from "react";
import Navbar from "@/components/shared/navbar/Navbar";
import CourseVideoPlayer from "@/components/shared/videos/CourseVideoPlayer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import CourseOverview from "@/components/shared/course/CourseOverview";
import FAQ from "@/components/shared/course/FAQ";
import Notes from "@/components/shared/course/Notes";
import CourseReview from "@/components/shared/course/CourseReview";

// import { useParams } from "next/navigation";

const StudentCourseDetail = () => {
  //   const { studentId, course } = useParams();

  return (
    <div className="bg-no-repeat sm:bg-[url('/assets/images/navborder.svg')]">
      <div className="container">
        <Navbar />
        <div className="mt-28">
          <div className="flex-center flex flex-col">
            <CourseVideoPlayer />
            <div className="mt-7">
              <div>
                <p className="h3-bold-extra text-center sm:text-left">
                  System Administration and IT{" "}
                  <span className="text-accent-pink">
                    {" "}
                    Infrastructure Services
                  </span>
                </p>
                <div className="mt-3 flex items-center gap-1 sm:gap-3">
                  <p className="text-sm sm:text-2xl">
                    Ruth Clowes, Professional Programmer
                  </p>
                  <div className="size-2 rounded-full bg-[#D9D9D9]"></div>
                  <p className="text-semibold text-accent-blue max-sm:text-xs max-sm:font-bold">
                    Follow
                  </p>
                </div>
                <div className="mt-6">
                  <Tabs
                    defaultValue="overview"
                    className="w-[1232px] max-sm:w-[326px]"
                  >
                    <TabsList className="h-[100px] w-full justify-start gap-5 bg-[#F2F0FB]">
                      <TabsTrigger
                        value="overview"
                        className="text-medium-lg max-sm:text-xs max-sm:font-medium"
                      >
                        Overview
                      </TabsTrigger>
                      <TabsTrigger
                        value="faq"
                        className="text-medium-lg max-sm:text-xs max-sm:font-medium"
                      >
                        FAQ
                      </TabsTrigger>
                      <TabsTrigger
                        value="notes"
                        className="text-medium-lg max-sm:text-xs max-sm:font-medium"
                      >
                        Notes
                      </TabsTrigger>
                      <TabsTrigger
                        value="reviews"
                        className="text-medium-lg max-sm:text-xs max-sm:font-medium"
                      >
                        Reviews
                      </TabsTrigger>
                    </TabsList>
                    <TabsContent value="overview">
                      <CourseOverview />
                    </TabsContent>
                    <TabsContent value="faq">
                      <FAQ />
                    </TabsContent>
                    <TabsContent value="notes">
                      <Notes />
                    </TabsContent>
                    <TabsContent value="reviews">
                      <CourseReview />
                    </TabsContent>
                  </Tabs>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentCourseDetail;

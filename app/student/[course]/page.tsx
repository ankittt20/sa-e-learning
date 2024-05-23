"use client";
import React, { useState, useEffect, useCallback } from "react";
import CourseVideoPlayer from "@/components/shared/videos/CourseVideoPlayer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import CourseOverview from "@/components/shared/course/CourseOverview";
import FAQ from "@/components/shared/course/FAQ";
import Notes from "@/components/shared/course/Notes";
import CourseReview from "@/components/shared/course/CourseReview";
import CourseProvider from "@/store/course/CourseProvider";
import { useParams } from "next/navigation";
import {
  getCourseById,
  getTotalCourseLessonCount,
} from "@/actions/course.action";
import CreateReviewModal from "@/components/shared/reviews/CreateReviewModal";
import { SessionProvider } from "next-auth/react";

const StudentCourseDetail = () => {
  const { course } = useParams();
  const [courseDetails, setCourseDetails] = useState<any>({});
  const [lessonCount, setLessonCount] = useState(0);
  const [lesson, setSelectedLesson] = useState(0);

  const lessonSelectHandler = useCallback((id: number) => {
    setSelectedLesson(id);
  }, []);

  const getCourseDetails = useCallback(async () => {
    const courseInfo = await getCourseById(+course);
    setCourseDetails(courseInfo.course);
  }, [course]);

  const getLessonCount = useCallback(async () => {
    const lessonCountInfo = await getTotalCourseLessonCount(+course);
    setLessonCount(lessonCountInfo.totalLessonCount);
  }, [course]);

  useEffect(() => {
    getCourseDetails();
    getLessonCount();
  }, [getCourseDetails, getLessonCount]);

  return (
    <SessionProvider>
      <CourseProvider>
        <div className="bg-no-repeat sm:bg-[url('/assets/images/navborder.svg')]">
          <div className="container">
            <div className="mt-28">
              <div className="flex-center flex flex-col">
                <CourseVideoPlayer lesson={lesson} />
                <div className="mt-7">
                  <div>
                    <p className="h3-bold-extra text-center sm:text-left">
                      {courseDetails?.name}
                    </p>
                    <div className="mt-3 flex items-center gap-1 sm:gap-3">
                      <p className="text-sm sm:text-2xl">
                        {courseDetails?.tutor?.name},{" "}
                        {courseDetails?.tutor?.speciality || ""}
                      </p>
                      <div className="size-2 rounded-full bg-[#D9D9D9]"></div>
                      <CreateReviewModal course={course} />
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
                          <CourseOverview
                            lessonCount={lessonCount}
                            course={courseDetails}
                            handleLessonSelect={lessonSelectHandler}
                          />
                        </TabsContent>
                        <TabsContent value="faq">
                          <FAQ />
                        </TabsContent>
                        <TabsContent value="notes">
                          <Notes />
                        </TabsContent>
                        <TabsContent value="reviews">
                          <CourseReview courseId={course} />
                        </TabsContent>
                      </Tabs>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </CourseProvider>
    </SessionProvider>
  );
};

export default StudentCourseDetail;

"use client";
import React, { useState, useEffect, useCallback } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import { CiStar } from "react-icons/ci";
import CurriculumCard from "@/components/shared/cards/CurriculumCard";
import CourseReview from "@/components/shared/reviews/CourseReview";
import CourseInfo from "@/components/shared/course/CourseInfo";
import Blog from "@/components/shared/course/Blog";
import LearningNow from "@/components/shared/LearningNow";
import Footer from "@/components/shared/footer/Footer";
import { getCourseById } from "@/actions/course.action";
import Link from "next/link";
import CreateReviewModal from "@/components/shared/reviews/CreateReviewModal";

const CourseDetails = () => {
  const params = useParams();
  const [course, setCourse] = useState<any>({});

  const fetchCourseById = useCallback(async (courseId: string | string[]) => {
    try {
      // get the course by id
      const course = await getCourseById(+courseId);
      setCourse(course?.course);
    } catch (err) {
      console.log(err);
      return { msg: "Error fetching course", success: false };
    }
  }, []);

  useEffect(() => {
    const getCourseDetails = async () => {
      await fetchCourseById(params.id);
    };
    getCourseDetails();
  }, [params.id, fetchCourseById]);

  return (
    <div className="bg-no-repeat sm:bg-[url('/assets/images/navborder.svg')]">
      <div className="container">
        <div className="mt-28 flex flex-wrap justify-between gap-8 max-sm:items-center max-sm:justify-center">
          <h3 className="h3-bold-extra max-sm:text-center">{course.name}</h3>
        </div>
        <div className="mt-28">
          <div className="flex flex-col gap-12 sm:flex-row">
            <div>
              <div className="relative w-fit rounded-xl">
                <div className="">
                  <Image
                    src={course.image}
                    width={500}
                    height={300}
                    alt="course"
                    className="rounded-t-xl"
                  />
                  <div>
                    <h5 className="absolute left-[24px] top-[28px] text-[10px] font-bold uppercase text-primary-100">
                      Programming
                    </h5>
                    <div className="absolute right-[12px] top-[12px] flex justify-between rounded-full bg-primary-100 p-2">
                      <Image
                        src="/assets/icons/star.svg"
                        width={16}
                        height={16}
                        alt="play"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-12">
                <h4 className="heading-semibold text-[#333333]">Description</h4>
                <p className="mt-4">{course.description}</p>
              </div>
              <div className="mt-12">
                <h4 className="text-2xl font-bold text-[#333333]">
                  Curriculum
                </h4>
                <div className="mt-9">
                  {
                    // Loop through the sections and display the curriculum
                    course?.sections?.map((section: any, idx: number) => {
                      return (
                        <CurriculumCard
                          title={section.name}
                          duration={"35min"}
                          count={idx + 1}
                          key={section.id}
                          id={section.id}
                        />
                      );
                    })
                  }
                  <div className="flex justify-center">
                    <Button className="border border-accent-blue px-6 text-accent-blue">
                      See All
                    </Button>
                  </div>
                </div>
              </div>
              <div className="mt-12">
                <h4 className="text-2xl font-bold text-[#333333]">
                  Instructor
                </h4>
                <div className="mt-6 flex flex-col gap-4 sm:flex-row">
                  <Image
                    src="/assets/images/user.png"
                    alt="instructor"
                    width={112}
                    height={112}
                    className="size-[112px] rounded-full"
                  />
                  <div>
                    <p>{course?.tutor?.about || "Description not available"}</p>
                    <h5 className="text-[20px] font-semibold text-[#333333]">
                      {course?.tutor?.name}
                    </h5>
                    <p className="text-sm text-[rgba(51,51,51,0.5)]">
                      {course?.tutor?.speciality || "Speciality not available"}
                    </p>
                    <div className="mt-6 flex flex-col-reverse justify-between gap-3 sm:flex-row sm:items-center">
                      <div className="flex gap-3">
                        <Link href={course?.tutor?.fbUrl || ""}>
                          <FaFacebook size={20} color="#7D6DD8" />
                        </Link>
                        <Link href={course?.tutor?.twitterUrl || ""}>
                          <FaTwitter size={20} color="#7D6DD8" />
                        </Link>
                        <Link href={course?.tutor?.instagramUrl || ""}>
                          <FaInstagram size={20} color="#7D6DD8" />
                        </Link>
                      </div>
                      <div className="flex gap-4">
                        (50 reviews)
                        <div className="flex gap-2">
                          <CiStar size={24} color="#F07867" />
                          <CiStar size={24} color="#F07867" />
                          <CiStar size={24} color="#F07867" />
                          <CiStar size={24} color="#F07867" />
                          <CiStar size={24} />
                        </div>
                      </div>
                      <CreateReviewModal
                        type="tutor"
                        placeholder="Review Tutor"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-12">
                <h4 className="text-2xl font-bold text-[#333333]">Reviews</h4>
                <div className="mt-6 flex flex-col justify-center gap-5">
                  <CourseReview />
                  <CourseReview />
                  <Button className="mx-auto mt-5 bg-accent-blue text-primary-100">
                    Load More
                  </Button>
                </div>
              </div>
            </div>
            <div>
              <CourseInfo course={course} />
              <div className="mt-9">
                <h4 className="text-2xl font-bold text-[#333333]">
                  Related Blogs
                </h4>
                <div className="mt-6 flex flex-col gap-4">
                  <Blog
                    category="Learning"
                    title="Powerful mental tools to help you master"
                    author="John Doe"
                    date="29 Dec 2023"
                  />
                  <Blog
                    category="Business"
                    title="Essential Strategies and Skills"
                    author="Farhad Tarokh"
                    date="29 Dec 2019"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="mt-28">
            <LearningNow />
          </div>
        </div>
        <div className="mt-28">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;

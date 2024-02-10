"use client";
import React from "react";
// import { useParams } from "next/navigation";
import Image from "next/image";
import Navbar from "@/components/shared/navbar/Navbar";
import FilterInput from "@/components/shared/forms/inputs/FilterInput";
import { Button } from "@/components/ui/button";
import { FaSearch, FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import { CiStar } from "react-icons/ci";
import CurriculumCard from "@/components/shared/cards/CurriculumCard";
import CourseReview from "@/components/shared/reviews/CourseReview";
import CourseInfo from "@/components/shared/course/CourseInfo";
import Blog from "@/components/shared/course/Blog";
import LearningNow from "@/components/shared/LearningNow";
import Footer from "@/components/shared/footer/Footer";

const CourseDetails = () => {
  //   const params = useParams();

  return (
    <div className="bg-no-repeat sm:bg-[url('/assets/images/navborder.svg')]">
      <div className="container">
        <Navbar />
        <div className="mt-28 flex flex-wrap justify-between gap-8 max-sm:items-center max-sm:justify-center">
          <h3 className="h3-bold-extra max-sm:text-center">
            System Administration and IT{" "}
            <span className="text-accent-pink">
              Infrastructure <br />
              Services
            </span>
          </h3>
          <div className="flex items-end justify-end gap-4">
            <FilterInput
              label="Search"
              forType="search"
              placeholder="Find Your Course"
            />
            <Button className="rounded-lg bg-accent-blue">
              <FaSearch size={17} color="#fff" />
            </Button>
          </div>
        </div>
        <div className="mt-28">
          <div className="flex flex-col gap-12 sm:flex-row">
            <div>
              <div className="relative max-w-[811px] rounded-xl">
                <div className="">
                  <Image
                    src="/assets/images/courseDetail.png"
                    width={811}
                    height={506}
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
                <p className="mt-4">
                  Though the gravity still dragged at him, his muscles were
                  making great efforts to adjust. After the daily classes he no
                  longer collapsed immediately into bed. Only the nightmares got
                  worse.
                </p>
                <p className="mt-4">
                  What looked like a small patch of purple grass, above five
                  feet square, was moving across the sand in their direction.
                  When it came near enough he perceived that it was not grass;
                  there were no blades, but only purple roots. The roots were
                  revolving, for each small plant in the whole patch, like the
                  spokes of a rimless wheel.
                </p>
              </div>
              <div className="mt-12">
                <h4 className="text-2xl font-bold text-[#333333]">
                  Curriculum
                </h4>
                <div className="mt-9">
                  <CurriculumCard
                    title="Course Overview"
                    duration="35 min"
                    isViewable
                    count={1}
                  />
                  <CurriculumCard
                    title="Introduction to Basic"
                    duration="25 min"
                    isViewable={false}
                    count={2}
                  />
                  <CurriculumCard
                    title="The mechanics of forwards"
                    duration="17 min"
                    isViewable={false}
                    count={3}
                  />
                  <CurriculumCard
                    title="Derivatives pricing"
                    duration="42 min"
                    isViewable={false}
                    count={4}
                  />
                  <CurriculumCard
                    title="Multi-Period Binomial Model"
                    duration="8 min"
                    isViewable={false}
                    count={5}
                  />
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
                <div className="mt-6 flex flex-col justify-center gap-4 sm:flex-row">
                  <Image
                    src="/assets/images/user.png"
                    alt="instructor"
                    width={112}
                    height={112}
                    className="size-[112px] rounded-full"
                  />
                  <div>
                    <p>
                      Distant orb has power to raise and purify our thoughts
                      like a strain of sacred music, or a noble picture, or a
                      passage from the grander poets. It always does one{" "}
                    </p>
                    <h5 className="text-[20px] font-semibold text-[#333333]">
                      Afonso Pinto
                    </h5>
                    <p className="text-sm text-[rgba(51,51,51,0.5)]">
                      Designer
                    </p>
                    <div className="mt-6 flex flex-col-reverse justify-between max-sm:gap-3 sm:flex-row sm:items-center">
                      <div className="flex gap-3">
                        <FaFacebook size={20} color="#7D6DD8" />
                        <FaTwitter size={20} color="#7D6DD8" />
                        <FaInstagram size={20} color="#7D6DD8" />
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
              <CourseInfo />
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

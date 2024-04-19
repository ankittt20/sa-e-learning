import CourseDetail from "@/components/shared/add-course/CourseDetail";
import LessonCard from "@/components/shared/add-course/LessonCard";
import MobileNav from "@/components/shared/navbar/MobileNav";
import { Button } from "@/components/ui/button";
import { PlusIcon } from "lucide-react";
import React from "react";
import { FaPlay } from "react-icons/fa";

type Props = {};

const page = (props: Props) => {
  return (
    <>
      <div className="container flex justify-between p-7 sm:hidden">
        <h3 className="text-xl font-bold">
          <a href="/">SAelearning</a>
        </h3>
        <MobileNav />
      </div>
      <div>
        <h3 className="p-7 text-xl font-bold max-sm:hidden">
          <a href="/">SAelearning</a>
        </h3>
      </div>
      <div className="space-x-24 px-7 pb-10 sm:flex sm:px-16">
        <div className="space-y-5">
          <div className="space-y-2">
            <h3 className="text-xl font-semibold">Course Details</h3>
            <p className="opacity-70">
              Share personal details and links about yourself
            </p>
            <div className="flex space-x-12">
              <p className="opacity-70">Your Course Style</p>
              <p className="text-accent-blue">Change Course Style</p>
            </div>
            <div className="flex w-fit cursor-pointer space-x-5 rounded-lg border border-[#000]/20 p-3 hover:shadow-sm">
              <PlusIcon className="size-10 text-accent-pink" />
              <div>
                <h6>Video Course</h6>
                <p className="text-sm opacity-70">
                  Visually show and display the lessons
                </p>
              </div>
            </div>
            <CourseDetail />
          </div>
          <div className="space-y-2">
            <div className="flex justify-between">
              <h3 className="text-xl font-semibold">Add Course Modules</h3>
              <p className="text-xs text-accent-blue">New Module</p>
            </div>
            <div className="space-y-2 rounded-lg bg-accent-blue/20 px-5 py-3">
              <h1 className="text-sm font-medium">
                1. Introduction to Vis a Vis
              </h1>
              <p className="text-xs font-medium opacity-50">
                Add a short text description of this module below Make your
                Etherel login experienc right at home on your websiteall
                through.
              </p>
            </div>
            <div className="flex space-x-2">
              <input type="radio" id="html" name="save_as" value="draft" />
              <label>
                <h6>Publish this Module</h6>
                <p className="text-xs opacity-50">
                  This will make it public to everyone with access to course
                </p>
              </label>
            </div>
            <div className="space-x-2">
              <input type="radio" id="html" name="save_as" value="draft" />
              <label>Save Module as Draft</label>
            </div>
            <div className="w-fit rounded-lg border border-[#000]/20 px-5 py-3">
              <h6 className="text-sm font-medium opacity-50">
                Module Description
              </h6>
              <p className="text-xs">
                Make your Ethereum login experience feel right at home on your
                websiteall through an easy-to-use API. Get a feel for it below!
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-5">
          <div>
            <h3 className="text-xl font-semibold">Your Lesson Content</h3>
            <p className="text-xs font-medium opacity-50">
              This is what your learners are going to consume
            </p>
          </div>

          <div className="space-y-2">
            <LessonCard
              image="/assets/images/course-preview.png"
              title="Introduction to Ancestral ...ents"
              description="This lesson teaches you all the bad things of life"
              duration="12:02"
              type="VIDEO"
            />
          </div>

          <div className="space-y-5">
            <div>
              <div className="flex justify-between">
                <h3>You are Creating a New Lesson</h3>
                <p className="text-xs text-[#FD2121]">Cancel</p>
              </div>
              <p className="text-xs font-medium opacity-50">
                This is what your learners are going to consume
              </p>
            </div>
            <div className="w-fit space-y-1 rounded-lg border border-[#000]/20 px-5 py-3">
              <h6 className="text-sm font-medium opacity-50">Lesson Title</h6>
              <p className="text-xs">Lesson 1 - Vis a Vis of the Most Hight</p>
            </div>
            <div className="w-fit space-y-1 rounded-lg border border-[#000]/20 px-5 py-3">
              <h6 className="text-sm font-medium opacity-50">
                Lesson Description
              </h6>
              <p className="text-xs">
                Make your Ethereum login experience feel right at home on your
                websiteall through an easy-to- use API. Get a feel for it below!
              </p>
            </div>
          </div>

          <div className="flex justify-between">
            <div className="space-x-2">
              <input
                type="radio"
                id="html"
                name="lesson_type"
                value="text_lesson"
              />
              <label>Text Lesson</label>
            </div>
            <div className="space-x-2">
              <input
                type="radio"
                id="html"
                name="lesson_type"
                value="video_lesson"
              />
              <label>Video Lesson</label>
            </div>
            <div className="space-x-2">
              <input
                type="radio"
                id="html"
                name="lesson_type"
                value="audio_lesson"
              />
              <label>Audio Lesson</label>
            </div>
          </div>

          <div className="space-y-5">
            <div className="flex w-fit space-x-5 rounded-lg border border-[#000]/20 px-5 py-3">
              <FaPlay className="my-auto size-6 text-accent-blue" />
              <div className="space-y-1">
                <h6 className="text-sm font-medium">
                  Uploading <span className="ml-10 opacity-50">42%</span>
                </h6>
                <p className="text-xs opacity-50">
                  Lesson 2 - Video - course.mp4
                </p>
              </div>
              <p className="text-xs text-[#FD2121]">Cancel</p>
            </div>
            <Button className="bg-accent-blue px-5 text-primary-100">
              Save Lesson to Module
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;

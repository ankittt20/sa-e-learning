import React from "react";
import CurrentVideo from "./CurrentVideo";
import { MdKeyboardArrowDown } from "react-icons/md";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import SocialMedia from "../SocialMedia";
import { Rating } from "../Rating";

const CourseOverview = () => {
  return (
    <div className="mt-6">
      <p className="text-bold-lg-xl">17 Lessons (1h 43m)</p>
      <div>
        <CurrentVideo
          title="Introduction"
          description="UI/UX Design for beginners"
          duration="04:32"
          number={1}
          extraClasses="bg-active border-b-[5px] border-accent-blue"
        />
        <CurrentVideo
          title="Chapter 1 - Notes"
          description="UI/UX Design for beginners"
          duration="01:00"
          number={2}
          isNotes
        />
        <CurrentVideo
          title="Chapter 2 - Shortcuts in Figma"
          description="UI/UX Design for beginners"
          duration="01:00"
          number={3}
        />
        <CurrentVideo
          title="Chapter 2 - Shortcuts in Figma"
          description="UI/UX Design for beginners"
          duration="01:00"
          number={4}
        />
        <div className="flex-center">
          <Button className="mt-3 flex gap-3 rounded-lg border border-accent-blue p-4 text-accent-blue">
            <p className="text-lg font-bold">View More</p>
            <MdKeyboardArrowDown className="size-6" color="#8D7FDD" />
          </Button>
        </div>
      </div>
      <div className="mt-8 w-[60%]">
        <h4 className="text-bold-lg-xl text-accent-pink">Instructor</h4>
        <div className="flex-between mt-5 flex-wrap gap-3 max-sm:items-center">
          <Image
            src="/assets/images/user.png"
            width={112}
            height={112}
            alt="instructor"
            className="max-sm:size-20"
          />
          <div>
            <p className="text-bold-lg-xl max-sm:text-lg max-sm:font-semibold">
              Ruth Clowes (MBA)
            </p>
            <p className="text-medium-lg-2 text-[rgba(51,51,51,0.5)]">
              Designer
            </p>
          </div>
          <div>
            <p>(50 review)</p>
            <Rating />
          </div>
        </div>
        <SocialMedia />
      </div>
      <div className="mt-8">
        <h4 className="text-bold-lg-xl text-accent-pink">About Us</h4>
        <p className="text-[22px]">
          Lorem ipsum dolor sit amet consectetur. Ullamcorper arcu in
          scelerisque fusce gravida tellus. Feugiat elit suspendisse porttitor
          donec erat. Nulla hendrerit pharetra aliquet auctor placerat.
        </p>
        <p className="mt-4 text-[22px]">
          Pellentesque sit suspendisse ullamcorper sagittis. Lorem habitasse id
          sit quisque. Posuere purus mauris egestas aliquam dui porttitor
          faucibus gravida pellentesque.
        </p>
        <div className="mt-12 flex items-center gap-2">
          <p className="text-[20px]">Rate Us:</p>
          <Rating />
        </div>
      </div>
    </div>
  );
};

export default CourseOverview;

import React, { useContext, useEffect } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import SocialMedia from "../SocialMedia";
import { Rating } from "../Rating";
import CurriculumCard from "../cards/CurriculumCard";
import { CourseContext } from "@/store/course/CourseContext";

interface CourseOverviewProps {
  lessonCount: number;
  course: any;
  handleLessonSelect: (id: number) => void;
}

const CourseOverview = ({
  lessonCount,
  course,
  handleLessonSelect,
}: CourseOverviewProps) => {
  // initialize course context
  const { selectedCourseLessonId } = useContext(CourseContext);

  useEffect(() => {
    handleLessonSelect(selectedCourseLessonId);
  }, [selectedCourseLessonId, handleLessonSelect]);

  return (
    <div className="mt-6">
      <p className="text-bold-lg-xl">{lessonCount} Lessons (1h 43m)</p>
      <div>
        {course?.sections?.map((section: any, idx: number) => {
          return (
            <CurriculumCard
              title={section.name}
              duration={"35min"}
              count={idx + 1}
              key={section.id}
              id={section.id}
              isActive={true}
            />
          );
        })}
        <div className="flex-center">
          <Button className="mt-3 flex gap-3 rounded-lg border border-accent-blue p-4 text-accent-blue">
            <p className="text-lg font-bold">View More</p>
            <MdKeyboardArrowDown className="size-6" color="#8D7FDD" />
          </Button>
        </div>
      </div>
      <div className="mt-8 w-3/5">
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
              {course?.tutor?.name || ""}
            </p>
            <p className="text-medium-lg-2 text-[rgba(51,51,51,0.5)]">
              {course?.tutor?.speciality || ""}
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

import React, { useContext } from "react";
import { FaRegThumbsUp, FaPlayCircle } from "react-icons/fa";
import { MdAudiotrack } from "react-icons/md";
import { CgNotes } from "react-icons/cg";
import { CourseContext } from "@/store/course/CourseContext";

interface Props {
  title: string;
  description: string;
  duration: string;
  number: number;
  isNotes?: boolean;
  extraClasses?: string;
  id: number;
  type: string;
}

const CurrentVideo = ({
  title,
  description,
  duration,
  number,
  isNotes,
  extraClasses,
  id,
  type,
}: Props) => {
  const { toggleSelectedCourseLesson } = useContext(CourseContext);

  const handleLessonClick = (id: number) => {
    toggleSelectedCourseLesson(id);
  };

  return (
    <div
      className={`${extraClasses} mt-4 flex rounded-md px-8 py-4`}
      onClick={handleLessonClick.bind(null, id)}
    >
      <div className="flex-between w-full">
        <div className="flex items-center gap-3">
          <div className="flex-center size-16 rounded-full bg-accent-blue p-3 max-sm:size-3">
            <span className="text-bold-lg-xl text-center text-primary-100 max-sm:text-[10px] max-sm:font-bold">
              {number}
            </span>
          </div>
          <div>
            <h6 className="text-medium-lg-xl max-sm:text-xs max-sm:font-medium">
              {title}
            </h6>
            <p className="text-normal-lg max-sm:text-[10px]">{description}</p>
          </div>
        </div>
        <div className="flex-center gap-4">
          <span className="text-semibold-lg-xl max-sm:text-[10px] max-sm:font-semibold">
            {duration}
          </span>
          <FaRegThumbsUp
            width="33px"
            height="33px"
            className="size-3 sm:size-6"
          />
          {type === "TEXT" ? (
            <CgNotes width="33px" height="33px" className="size-3 sm:size-6" />
          ) : type === "VIDEO" ? (
            <FaPlayCircle
              width="33px"
              height="33px"
              className="size-3 sm:size-6"
            />
          ) : (
            <MdAudiotrack
              width="33px"
              height="33px"
              className="size-3 sm:size-6"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default CurrentVideo;

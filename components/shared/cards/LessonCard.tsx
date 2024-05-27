import { CourseContext } from "@/store/course/CourseContext";
import React, { useContext } from "react";
import { FaFileAlt } from "react-icons/fa";
import { FaDisplay } from "react-icons/fa6";
import { MdAudiotrack } from "react-icons/md";

interface LessonCardProps {
  name: string;
  type: string;
  duration: string | null;
  isPreview: boolean;
  id: number;
  lesson: any;
}

const LessonCard = ({
  name,
  type,
  duration,
  isPreview,
  id,
  lesson,
}: LessonCardProps) => {
  const { toggleSelectedCourseLesson, toggleSelectedCourse } =
    useContext(CourseContext);

  const handleClickedLesson = (id: number) => {
    toggleSelectedCourseLesson(id);
    toggleSelectedCourse(lesson);
  };

  return (
    <div
      className="mb-2 w-full cursor-pointer rounded-md p-5 hover:bg-accent-secondary"
      onClick={handleClickedLesson.bind(null, id)}
    >
      <div className="flex items-center gap-6">
        <p className="text-lg font-semibold">{name}</p>
        <span className="text-sm text-[#33333]">{isPreview && "Preview"}</span>
      </div>
      <div className="mt-2 flex items-center gap-3">
        {type === "VIDEO" ? (
          <FaDisplay className="text-lg" />
        ) : type === "AUDIO" ? (
          <MdAudiotrack className="text-lg" />
        ) : (
          <FaFileAlt className="text-lg" />
        )}
        <span className="text-sm text-[#33333]">{duration || "1 min"}</span>
      </div>
    </div>
  );
};

export default LessonCard;

"use client";
import React, { useContext } from "react";
import ReactPlayer from "react-player/lazy";
import { CourseContext } from "@/store/course/CourseContext";
import { updateLessonStatus } from "@/actions/user.actions";

const CourseVideoPlayer = () => {
  const { selectedCourse, selectedCourseLessonId } = useContext(CourseContext);

  const manageLessonStatus = async () => {
    const res = await updateLessonStatus(+selectedCourseLessonId);

    if (res.success) {
      console.log("Lesson status updated successfully");
    }
  };

  return (
    <div>
      {Object.keys(selectedCourse).length !== 0 && (
        <div className="relative mx-auto w-[326px] sm:w-[900px]">
          <ReactPlayer
            // @ts-ignore
            url={selectedCourse?.videoUrl}
            width="100%"
            height="100%"
            controls
            onEnded={manageLessonStatus}
          />
        </div>
      )}
    </div>
  );
};

export default CourseVideoPlayer;

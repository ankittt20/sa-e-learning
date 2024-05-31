"use client";
import React, { useContext } from "react";
import ReactPlayer from "react-player/lazy";
import { CourseContext } from "@/store/course/CourseContext";

const CourseVideoPlayer = () => {
  const { selectedCourse } = useContext(CourseContext);

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
          />
        </div>
      )}
    </div>
  );
};

export default CourseVideoPlayer;

"use client";
import React, { useCallback, useContext, useEffect, useRef } from "react";
import ReactPlayer from "react-player/lazy";
import { useParams } from "next/navigation";
import { CourseContext } from "@/store/course/CourseContext";
import {
  getVideoWatchedDuration,
  updateLessonStatus,
  updateVideoWatchedDuration,
} from "@/actions/user.actions";

const CourseVideoPlayer = () => {
  const { selectedCourse, selectedCourseLessonId } = useContext(CourseContext);
  const videoRef = useRef<ReactPlayer>(null);
  const progressRef = useRef<number>(0);

  // get the course ID from the URL
  const { course } = useParams();

  // get the progress of the video and resume the video from there
  useEffect(() => {
    const getVideoProgress = async () => {
      const res = await getVideoWatchedDuration(+selectedCourseLessonId);
      if (res.success) {
        if (videoRef?.current) {
          if (res.success && res.videoWatchedDuration) {
            const progress = res?.videoWatchedDuration;
            if (progress === null) {
              // Add null check here
              videoRef.current.seekTo(progress, "seconds");
            }
          }
        }
      }
    };
    getVideoProgress();
  }, [selectedCourseLessonId]);

  // update the status of the lesson to completed when the video ends
  const manageLessonStatus = async () => {
    console.log(+course);
    const res = await updateLessonStatus(+selectedCourseLessonId, +course);

    if (res.success) {
      console.log("Lesson status updated successfully");
    }
    resetVideoProgressOnEnd();
  };

  // function to update the video progress
  const handleVideoProgress = useCallback(
    async (duration: number) => {
      try {
        await updateVideoWatchedDuration(
          +selectedCourseLessonId,
          duration,
          +course
        );
      } catch (e) {
        console.log(e);
      }
    },
    [selectedCourseLessonId, course]
  );

  // useEffect to update the video progress every 30 seconds
  useEffect(() => {
    const interval = setInterval(async () => {
      if (videoRef?.current) {
        const currentTime = videoRef?.current?.getCurrentTime();
        if (progressRef.current !== currentTime) {
          progressRef.current = currentTime;
          await handleVideoProgress(currentTime);
        }
      }
    }, 30000);

    return () => clearInterval(interval);
  }, [handleVideoProgress]);

  // function to update the video when the user pauses the video
  const handlePause = useCallback(async () => {
    if (videoRef?.current) {
      await handleVideoProgress(videoRef?.current?.getCurrentTime());
    }
  }, [handleVideoProgress]);

  // function to reset the video progress when the video ends
  const resetVideoProgressOnEnd = useCallback(async () => {
    if (videoRef?.current) {
      await handleVideoProgress(0);
    }
  }, [handleVideoProgress]);

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
            onPause={handlePause}
            ref={videoRef}
          />
        </div>
      )}
    </div>
  );
};

export default CourseVideoPlayer;

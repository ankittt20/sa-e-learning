"use client";
import React, { useRef } from "react";
import { FaPlay } from "react-icons/fa";
import { IoPlaySkipForward } from "react-icons/io5";
import { HiSpeakerWave } from "react-icons/hi2";
import { IoMdSettings } from "react-icons/io";
import { MdOpenInFull } from "react-icons/md";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";

interface Props {
  lesson: any;
}

const CourseVideoPlayer = ({ lesson }: Props) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleVideoPlay = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
      } else {
        videoRef.current.pause();
      }
    }
  };
  return (
    <div>
      <div className="relative mx-auto w-[326px] sm:w-[900px]">
        <video className="mx-auto size-full rounded-2xl" ref={videoRef}>
          <source src="/assets/videos/Video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Custom controls */}
        <div className="absolute inset-x-0 bottom-[23%] sm:bottom-[15%]">
          <Slider className="h-2 rounded-none bg-[rgba(0,0,0,0.6)]" />
        </div>
        <div className="absolute bottom-2 left-3 flex w-full items-center justify-between px-6 sm:bottom-[%]">
          <div className="flex items-center justify-center gap-3">
            <FaPlay
              size={20}
              color="#fff"
              className="max-sm:size-3"
              onClick={() => handleVideoPlay()}
            />
            <IoPlaySkipForward
              size={25}
              color="#fff"
              className="max-sm:size-4"
            />
            <p className="text-lg font-medium text-primary-100 max-sm:text-[10px]">
              04:32 / 14:01
            </p>
          </div>
          <div className="flex items-center justify-center gap-3">
            <Button className="rounded-[20px] bg-accent-pink px-5 max-sm:h-2 max-sm:rounded-md max-sm:p-3">
              <div className="size-3 rounded-full bg-primary-100 max-sm:size-1"></div>
              <p className="ml-3 text-lg font-bold text-primary-100 max-sm:ml-1 max-sm:text-[10px]">
                Live
              </p>
            </Button>
            <HiSpeakerWave size={25} color="#fff" className="max-sm:size-4" />
            <IoMdSettings size={25} color="#fff" className="max-sm:size-4" />
            <MdOpenInFull size={25} color="#fff" className="max-sm:size-4" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseVideoPlayer;

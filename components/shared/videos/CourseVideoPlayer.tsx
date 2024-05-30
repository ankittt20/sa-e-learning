"use client";
import React, { useRef, useContext, useState } from "react";
import { FaPlay, FaPause } from "react-icons/fa";
import { IoPlaySkipForward, IoVolumeMute } from "react-icons/io5";
import { HiSpeakerWave } from "react-icons/hi2";
import { IoMdSettings } from "react-icons/io";
import { MdOpenInFull } from "react-icons/md";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { CourseContext } from "@/store/course/CourseContext";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const CourseVideoPlayer = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  // video states
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(50);
  const [showVolume, setShowVolume] = useState(false);

  const { selectedCourse } = useContext(CourseContext);

  const handleVideoPlay = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
        setIsPlaying(true);
      } else {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    }
  };

  // toggle fullscreen
  const handleFullScreen = () => {
    if (videoRef.current) {
      if (videoRef.current.requestFullscreen) {
        videoRef.current.requestFullscreen();
      }
    }
  };

  // handle volume change
  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setVolume(Number(value));
    if (videoRef.current) {
      videoRef.current.volume = Number(value) / 100;
    }
  };

  return (
    <div>
      {Object.keys(selectedCourse).length !== 0 && (
        <div className="relative mx-auto w-[326px] sm:w-[900px]">
          <video className="mx-auto size-full rounded-2xl" ref={videoRef}>
            <source
              src={(selectedCourse as { videoUrl: string })?.videoUrl}
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
          {/* Custom controls */}
          <div className="absolute inset-x-0 bottom-[23%] sm:bottom-[15%]">
            <Slider className="h-2 rounded-none bg-[rgba(0,0,0,0.6)]" />
          </div>
          <div className="absolute bottom-[10%] left-3 flex w-full items-center justify-between px-6 sm:-bottom-4">
            <div className="flex items-center justify-center gap-3">
              {isPlaying ? (
                <FaPause
                  size={20}
                  color="#fff"
                  className="max-sm:size-3"
                  onClick={() => handleVideoPlay()}
                />
              ) : (
                <FaPlay
                  size={20}
                  color="#fff"
                  className="max-sm:size-3"
                  onClick={() => handleVideoPlay()}
                />
              )}
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
              <div className="flex h-32 items-center">
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger>
                      {volume === 0 ? (
                        <IoVolumeMute
                          size={25}
                          color="#fff"
                          className="peer cursor-pointer max-sm:size-4"
                          onMouseEnter={() => setShowVolume(true)}
                          onMouseLeave={() => setShowVolume(false)}
                        />
                      ) : (
                        <HiSpeakerWave
                          size={25}
                          color="#fff"
                          className="peer cursor-pointer max-sm:size-4"
                          onMouseEnter={() => setShowVolume(true)}
                          onMouseLeave={() => setShowVolume(false)}
                        />
                      )}
                    </TooltipTrigger>
                    <TooltipContent className="border-none bg-primary-100 text-lg font-semibold">{`${volume} %`}</TooltipContent>
                  </Tooltip>
                </TooltipProvider>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={volume}
                  onChange={handleVolumeChange}
                  className={`${
                    showVolume ? "block" : "hidden"
                  } h-2 w-32 rounded-lg bg-accent-blue peer-hover:block`}
                  onMouseEnter={() => setShowVolume(true)}
                  onMouseLeave={() => setShowVolume(false)}
                />
              </div>
              <IoMdSettings size={25} color="#fff" className="max-sm:size-4" />
              <MdOpenInFull
                size={25}
                color="#fff"
                className="max-sm:size-4"
                onClick={() => handleFullScreen()}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CourseVideoPlayer;

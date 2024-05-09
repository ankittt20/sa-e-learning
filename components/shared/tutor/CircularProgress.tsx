"use client";
import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

interface Props {
  progress: number;
  gradient: string;
}

const CircularProgress = ({
  progress,
  gradient,
}: Props) => {
  return (
    <div className="flex items-center justify-center">
      <CircularProgressbar
        value={progress}
        strokeWidth={20}
        text={`${progress}%`}
        className="size-[106px]"
        styles={buildStyles({
          pathColor: gradient,
        })}
      />
    </div>
  );
};

export default CircularProgress;

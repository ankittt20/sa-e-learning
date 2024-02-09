"use client";
import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

interface Props {
  progress: number;
  gradient: string;
  text1: string;
  text2: string;
  highlight: string;
  highlightClass?: string;
}

const CircularProgress = ({
  progress,
  gradient,
  text1,
  text2,
  highlight,
  highlightClass,
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
      <div>
        <h5 className="font-medium">Attendance</h5>
        <p className="text-[10.75px] text-[rgba(0,0,0,0.7)]">
          {text1}{" "}
          <span className={`${highlightClass} underline underline-offset-4`}>
            {highlight}
          </span>{" "}
          {text2}
        </p>
      </div>
    </div>
  );
};

export default CircularProgress;

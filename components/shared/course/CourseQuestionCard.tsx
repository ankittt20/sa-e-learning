import Image from "next/image";
import { IoArrowUpCircleOutline, IoBookmarks } from "react-icons/io5";
import React from "react";

const CourseQuestionCard = () => {
  return (
    <div className="mt-8">
      <div className="flex-between w-[326px] max-sm:items-start max-sm:gap-3 sm:w-[1170px]">
        <Image
          src="/assets/images/user.png"
          width={66}
          height={66}
          alt="user"
          className="rounded-full max-sm:size-6"
        />
        <div>
          <p className="text-bold-lg-xl max-sm:text-[7px] max-sm:font-bold">
            Js Delivr up-To-Date Solution
          </p>
          <p className="line-clamp-1 text-[20px] max-sm:text-[6px]">
            {" "}
            Hi guys, As youmay have noticed, the jsDelivr website changed its
            interface since Jonas filmed
          </p>
          <div className="mt-6 flex gap-2">
            <p className="text-semibold-2 text-accent-blue underline underline-offset-2 max-sm:text-[6px] max-sm:font-semibold">
              Sebastian
            </p>
            -
            <p className="text-semibold-2 text-accent-blue max-sm:text-[6px] max-sm:font-semibold">
              Lecture 1
            </p>
            <p className="text-semibold-2 text-[rgba(0,0,0,0.5)] max-sm:text-[6px] max-sm:font-semibold">
              {" "}
              - 5 years ago
            </p>
          </div>
        </div>
        <div className="flex-center flex-col gap-3">
          <div className="flex gap-3">
            <span className="text-semibold max-sm:text-[6px] max-sm:font-semibold">
              533
            </span>
            <IoArrowUpCircleOutline
              size={30}
              color="rgba(0,0,0,0.5)"
              className="max-sm:size-2"
            />
          </div>
          <div className="flex-center gap-3">
            <span className="text-semibold max-sm:text-[6px] max-sm:font-semibold">
              53
            </span>
            <IoBookmarks size={20} color="#AB9E9E" className="max-sm:size-2" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseQuestionCard;

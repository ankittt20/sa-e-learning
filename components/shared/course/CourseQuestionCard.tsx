import Image from "next/image";
import { IoArrowUpCircleOutline, IoBookmarks } from "react-icons/io5";
import React from "react";
import moment from "moment";
import HTMLParser from "@/lib/htmlParser";
interface CourseQuestionCardProps {
  question: any;
  seeQuestionDetail: (question: any) => void;
}

const CourseQuestionCard = ({
  question,
  seeQuestionDetail,
}: CourseQuestionCardProps) => {
  return (
    <div className="mt-8">
      <div className="flex w-[326px] items-start gap-4 max-sm:gap-3 sm:w-[1170px]">
        <Image
          src={question.user.profilePicture || "/assets/images/user.png"}
          width={66}
          height={66}
          alt="user"
          className="rounded-full max-sm:size-6"
        />
        <div>
          <p
            className="text-bold-2 cursor-pointer max-sm:text-[7px] max-sm:font-bold"
            onClick={seeQuestionDetail.bind(this, question)}
          >
            {question?.questionTitle}
          </p>
          <p className="line-clamp-1 text-lg max-sm:text-[6px]">
            <HTMLParser html={question?.questionBody} />
          </p>
          <div className="mt-6 flex gap-2">
            <p className="text-semibold-2 text-accent-blue underline underline-offset-2 max-sm:text-[6px] max-sm:font-semibold">
              {question.user.name}
            </p>
            -
            <p className="text-semibold-2 text-accent-blue max-sm:text-[6px] max-sm:font-semibold">
              Lecture 1
            </p>
            <p className="text-semibold-2 text-[rgba(0,0,0,0.5)] max-sm:text-[6px] max-sm:font-semibold">
              {" "}
              {moment(question.createdAt, "YYYYMMDD").fromNow()}
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

"use client";
import React, { useState } from "react";
import { IoArrowUpCircleOutline, IoBookmarks } from "react-icons/io5";
import Image from "next/image";
import HTMLParser from "@/lib/htmlParser";
import moment from "moment";
import { upvoteCourseFAQAnswer } from "@/actions/course.action";

interface AnswerCardProps {
  answer: any;
}

const AnswerCard = ({ answer }: AnswerCardProps) => {
  const [answerUpvotes, setAnswerUpvotes] = useState<number>(answer.upvotes);

  return (
    <div className="mt-8">
      <div className="flex w-[326px] items-start gap-4 max-sm:gap-3 sm:w-[1170px]">
        <div className="flex items-start gap-5">
          <Image
            src={answer.user.profilePicture || "/assets/images/user.png"}
            width={66}
            height={66}
            alt="user"
            className="rounded-full max-sm:size-6"
          />
          <div>
            <p className="text-semibold-2 text-accent-blue underline underline-offset-2 max-sm:text-[6px] max-sm:font-semibold">
              {answer?.user.name}
            </p>
            <p className="text-semibold-2 text-[rgba(0,0,0,0.5)] max-sm:text-[6px] max-sm:font-semibold">
              {" "}
              {moment(answer.createdAt, "YYYYMMDD").fromNow()}
            </p>
          </div>
        </div>
        <div>
          <p className="line-clamp-1 text-lg max-sm:text-[6px]">
            <HTMLParser html={answer?.answer} />
          </p>
        </div>
        <div className="flex-center flex-col gap-3">
          <div className="flex gap-3">
            <span className="text-semibold max-sm:text-[6px] max-sm:font-semibold">
              {answerUpvotes}
            </span>
            <IoArrowUpCircleOutline
              size={30}
              color="rgba(0,0,0,0.5)"
              className="max-sm:size-2"
              onClick={async () => {
                // upvote answer
                setAnswerUpvotes(answerUpvotes + 1);
                const res = await upvoteCourseFAQAnswer(answer.id);
                if (!res.success) {
                  setAnswerUpvotes(answerUpvotes - 1);
                }
              }}
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

export default AnswerCard;

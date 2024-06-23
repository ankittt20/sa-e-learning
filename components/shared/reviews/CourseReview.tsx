import React from "react";
import Image from "next/image";
import { CiStar } from "react-icons/ci";

interface CourseReviewProps {
  creator: {
    id: number;
    name: string;
    profilePicture: string;
  };
  createdAt: string;
  body: string;
  rating: number;
}

const CourseReview = ({
  creator,
  createdAt,
  body,
  rating,
}: CourseReviewProps) => {
  return (
    <div className="rounded-lg bg-[#FFF3F8] p-5">
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
        <div className="flex items-center justify-between gap-4 ">
          <Image
            src={creator.profilePicture || "/assets/images/user.png"}
            alt="instructor"
            width={80}
            height={80}
          />
          <span className="text-sm text-[rgba(51,51,51,0.5)] sm:hidden">
            {createdAt}
          </span>
        </div>
        <div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-5">
              <h6 className="text-[20px] font-semibold">{creator.name}</h6>
              <div className="flex gap-2">
                {Array.from({ length: rating }, (_, idx) => (
                  <CiStar key={idx} size={24} color="#F07867" />
                ))}
              </div>
            </div>
            <span className="text-sm text-[rgba(51,51,51,0.5)] max-sm:hidden">
              {createdAt}
            </span>
          </div>
          <p>&quot;{body}&quot;</p>
        </div>
      </div>
    </div>
  );
};

export default CourseReview;

import React from "react";
import Image from "next/image";
import { CiStar } from "react-icons/ci";

const CourseReview = () => {
  return (
    <div className="rounded-lg bg-[#FFF3F8] p-5">
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
        <div className="flex items-center justify-between gap-4 ">
          <Image
            src="/assets/images/user.png"
            alt="instructor"
            width={80}
            height={80}
          />
          <span className="text-sm text-[rgba(51,51,51,0.5)] sm:hidden">
            5 Jan 2020
          </span>
        </div>
        <div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-5">
              <h6 className="text-[20px] font-semibold">Chakrika Joyanto</h6>
              <div className="flex gap-2">
                <CiStar size={24} color="#F07867" />
                <CiStar size={24} color="#F07867" />
                <CiStar size={24} color="#F07867" />
                <CiStar size={24} color="#F07867" />
                <CiStar size={24} />
              </div>
            </div>
            <span className="text-sm text-[rgba(51,51,51,0.5)] max-sm:hidden">
              5 Jan 2020
            </span>
          </div>
          <p>
            &quot;Apparently we had reached a great height in the atmosphere,
            for the sky was a dead black, and the stars had ceased to
            twinkle.&quot;
          </p>
        </div>
      </div>
    </div>
  );
};

export default CourseReview;

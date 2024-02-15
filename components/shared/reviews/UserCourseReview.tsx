import Image from "next/image";
import React from "react";

const UserCourseReview = () => {
  return (
    <div className="w-[326px] rounded-xl bg-[#F2F0FB] p-3 sm:w-[601px]">
      <div className="flex items-center gap-4">
        <Image
          src="/assets/images/user.png"
          width={44}
          height={44}
          alt="user"
        />
        <div>
          <p className="font-bold">Taraash</p>
          <p>On my arc of learning everything</p>
        </div>
      </div>
      <div className="mt-4">
        <p>
          <span className="font-bold">Yes,</span> this class met my expectations
        </p>
        <p>
          Recommending for <span className="font-bold">Beginner Levels </span>
        </p>
      </div>
      <div className="mt-9 w-[278px] border-t border-[rgba(0,0,0,0.5)] py-4 sm:w-[513px]">
        <p className="text-[rgba(0,0,0,0.5)]">Posted 1 day ago</p>
      </div>
    </div>
  );
};

export default UserCourseReview;

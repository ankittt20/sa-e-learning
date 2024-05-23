import Image from "next/image";
import React from "react";
import moment from "moment";
import { useSession } from "next-auth/react";

interface UserCourseReviewProps {
  review: any;
}

const UserCourseReview = ({ review }: UserCourseReviewProps) => {
  const { data: session } = useSession();

  return (
    <div className="w-[326px] rounded-xl bg-[#F2F0FB] p-3 sm:w-[601px]">
      <div className="flex items-center gap-4">
        <Image
          src={session?.user?.image || "/assets/images/user.png"}
          width={44}
          height={44}
          alt="user"
        />
        <div>
          <p className="font-bold">{session?.user?.name}</p>
        </div>
      </div>
      <div className="mt-4">
        <p>{review.review}</p>
      </div>
      <div className="mt-9 w-[278px] border-t border-[rgba(0,0,0,0.5)] py-4 sm:w-[513px]">
        <p className="text-[rgba(0,0,0,0.5)]">
          Posted {moment(review.createdAt, "YYYYMMDD").fromNow()}
        </p>
      </div>
    </div>
  );
};

export default UserCourseReview;

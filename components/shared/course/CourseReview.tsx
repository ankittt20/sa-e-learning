import React, { useCallback, useEffect, useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import ProgressInfo from "../info/Progress";
import { Button } from "@/components/ui/button";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { Badge } from "@/components/ui/badge";
import UserCourseReview from "../reviews/UserCourseReview";
import { getCourseReviews } from "@/actions/course.action";

const CourseReview = ({ courseId }: { courseId: string | string[] }) => {
  const [reviews, setReviews] = useState<any[]>([]);

  const getReviews = useCallback(async () => {
    const reviewInfo = await getCourseReviews(+courseId);
    setReviews(reviewInfo.reviews);
  }, [courseId]);

  useEffect(() => {
    getReviews();
  }, [getReviews]);

  return (
    <div className="my-6">
      <div className="flex-between">
        <div className="flex items-center gap-3">
          <h6 className="text-bold">Reviews</h6>
          <span className="mt-[2px] text-[20px]">42 reviews</span>
        </div>
        <div>
          <Select>
            <SelectTrigger className="h-fit w-[272px] rounded-[30px] bg-primary-100 font-bold focus:border-none max-sm:hidden sm:max-w-[325px]">
              <SelectValue placeholder="Sort by: Most Recent" />
            </SelectTrigger>
            <SelectContent className="rounded-lg border-[#DADADA] bg-primary-100">
              <SelectItem value="light">Light</SelectItem>
              <SelectItem value="dark">Dark</SelectItem>
              <SelectItem value="system">System</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className="mt-6 flex flex-wrap items-start justify-between max-sm:items-center max-sm:justify-center max-sm:gap-4">
        <div className="bg-[#F2F0FB] px-8 py-4">
          <h6 className="text-bold max-sm:text-lg max-sm:font-bold">
            Expectations Met?
          </h6>
          <div className="mt-4">
            <ProgressInfo info="Exceeded" value={69} />
            <ProgressInfo info="Yes" value={26} />
            <ProgressInfo info="Somewhat" value={0} />
            <ProgressInfo info="No" value={5} />
          </div>
          <Button className="mt-6 w-full bg-[#728AE7] py-5">
            <p className="text-bold text-primary-100">Leave a review</p>
          </Button>
          <div className="mt-6">
            <h6 className="text-bold max-sm:text-lg">Best suited for</h6>
            <div className="mt-4 flex items-end gap-4">
              <div className="flex items-end gap-1">
                <div className="h-5 w-2 bg-accent-blue"></div>
                <div className="h-7 w-2 bg-[#D9D9D9]"></div>
                <div className="h-10 w-2 bg-[#D9D9D9]"></div>
              </div>
              <h6 className="text-bold-2">Beginner</h6>
            </div>
            <p className="mt-4 flex items-center gap-1 text-lg">
              Based on 42 reviews{" "}
              <IoIosInformationCircleOutline
                size={24}
                color="rgba(0,0,0,0.4)"
              />
            </p>
            <div>
              <h6 className="text-bold mt-6 max-sm:text-lg">Most Liked</h6>
              <div className="flex flex-col gap-6">
                <Badge className="mt-4 w-fit border-0 bg-accent-secondary px-3 py-[10px]">
                  <p className="text-semibold-2">Clarity of Instruction 36</p>
                </Badge>
                <Badge className="mt-4 w-fit border-0 bg-accent-secondary px-3 py-[10px]">
                  <p className="text-semibold-2">Actionable Steps 34</p>
                </Badge>
                <Badge className="mt-4 w-fit border-0 bg-accent-secondary px-3 py-[10px]">
                  <p className="text-semibold-2">Engaging Teacher 31</p>
                </Badge>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          {reviews.map((review, idx) => (
            <UserCourseReview key={idx} review={review} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CourseReview;

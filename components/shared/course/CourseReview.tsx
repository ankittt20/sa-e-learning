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
  const [reviewOrder, setReviewOrder] = useState<"asc" | "desc">("desc");
  const [stars, setStars] = useState({
    fiveStar: 0,
    fourStar: 0,
    threeStar: 0,
    twoStar: 0,
    oneStar: 0,
  });

  const getReviews = useCallback(async () => {
    const reviewInfo = await getCourseReviews(+courseId, reviewOrder);
    reviewInfo.reviews.forEach((rev) => {
      return setStars((prev) => ({
        ...prev,
        fiveStar: rev.rating === 5 ? prev.fiveStar + 1 : prev.fiveStar,
        fourStar: rev.rating === 4 ? prev.fourStar + 1 : prev.fourStar,
        threeStar: rev.rating === 3 ? prev.threeStar + 1 : prev.threeStar,
        twoStar: rev.rating === 2 ? prev.twoStar + 1 : prev.twoStar,
        oneStar: rev.rating === 1 ? prev.oneStar + 1 : prev.oneStar,
      }));
    });
    setReviews(reviewInfo.reviews);
  }, [courseId, reviewOrder]);

  useEffect(() => {
    getReviews();
  }, [getReviews]);

  return (
    <div className="my-6">
      <div className="flex-between">
        <div className="flex items-center gap-3">
          <h6 className="text-bold">Reviews</h6>
          <span className="mt-[2px] text-[20px]">{reviews.length} reviews</span>
        </div>
        <div>
          <Select
            onValueChange={(value) => setReviewOrder(value as "asc" | "desc")}
          >
            <SelectTrigger className="h-fit w-[272px] rounded-[30px] bg-primary-100 font-bold focus:border-none max-sm:hidden sm:max-w-[325px]">
              <SelectValue placeholder="Sort by: Most Recent" />
            </SelectTrigger>
            <SelectContent className="rounded-lg border-[#DADADA] bg-primary-100">
              <SelectItem value="desc">Most Recent</SelectItem>
              <SelectItem value="asc">Oldest to Newest</SelectItem>
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
            <ProgressInfo
              info="Exceeded"
              value={(stars.fiveStar / reviews.length) * 100}
            />
            <ProgressInfo
              info="Yes"
              value={(stars.fourStar / reviews.length) * 100}
            />
            <ProgressInfo
              info="Somewhat"
              value={(stars.threeStar / reviews.length) * 100}
            />
            <ProgressInfo
              info="No"
              value={(stars.twoStar / reviews.length) * 100}
            />
            <ProgressInfo
              info="Not at all"
              value={(stars.oneStar / reviews.length) * 100}
            />
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

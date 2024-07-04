import React from "react";
import { FaStar } from "react-icons/fa";

interface ReviewStarProps {
  rating: number;
  setRating: (rating: number) => void;
  isNotPointer?: boolean;
}

const ReviewStar = ({ rating, setRating, isNotPointer }: ReviewStarProps) => {
  return (
    <div className="flex items-center gap-5">
      {[1, 2, 3, 4, 5].map((star) => {
        const color = rating >= star ? "text-[#F69C08]" : "text-[#000]";
        return (
          <span key={star}>
            <FaStar
              className={`size-6 ${color} ${
                isNotPointer ? "cursor-default" : "cursor-pointer"
              }`}
              onClick={() => {
                setRating(star);
              }}
              floodColor={color}
            />
          </span>
        );
      })}
    </div>
  );
};

export default ReviewStar;

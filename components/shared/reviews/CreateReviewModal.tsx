"use client";
import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import ReviewStar from "./ReviewStar";
import { Button } from "@/components/ui/button";
import { submitUserReview } from "@/actions/user.actions";

const CreateReviewBody = ({ courseId }: { courseId: number }) => {
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const submitReview = async () => {
    setSubmitting(true);
    const res = await submitUserReview({ rating, review, courseId });
    if (res.success) {
      alert("Review submitted successfully");
      setRating(0);
      setReview("");
    } else alert("Failed to submit review");
    setSubmitting(false);
  };

  return (
    <DialogContent className="bg-primary-100">
      <DialogHeader>
        <DialogTitle>How did this course meet your expectations?</DialogTitle>
        <DialogDescription>
          <div className="flex items-center gap-5">
            <ReviewStar rating={rating} setRating={setRating} />
          </div>
          <div>
            <textarea
              className="mt-3 h-24 w-full rounded-md border p-3"
              placeholder="Write a review"
              onChange={(e) => setReview(e.target.value)}
            ></textarea>
          </div>
          <p className="text-accent-pink">
            Your review will help us make ourselves better.
          </p>
          <Button
            className="mt-6 bg-accent-blue py-3 font-bold text-primary-100"
            onClick={submitReview}
            disabled={submitting}
          >
            Submit
          </Button>
        </DialogDescription>
      </DialogHeader>
    </DialogContent>
  );
};

const CreateReviewModal = ({ course }: { course: string | string[] }) => {
  return (
    <Dialog>
      <DialogTrigger className="font-semibold text-accent-blue">
        Leave a rating
      </DialogTrigger>
      <CreateReviewBody courseId={+course} />
    </Dialog>
  );
};

export default CreateReviewModal;

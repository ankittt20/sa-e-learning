"use client";
import React from "react";
import { Button } from "../../ui/button";
import {
  markCartProductsSavedForLater,
  removeCourseFromCart,
  removeSavedForLaterProducts,
} from "@/actions/user.actions";

interface CartControllerProps {
  courseId: number;
  isSavedForLater: boolean;
}

const CartController = ({ courseId, isSavedForLater }: CartControllerProps) => {
  const removeProductFromCart = async () => {
    const res = await removeCourseFromCart(courseId);
    if (res.success) {
      alert(res.msg);
      window.location.reload();
    } else {
      alert(res.msg);
    }
  };

  const markCourseForLater = async () => {
    // mark course for later
    const res = await markCartProductsSavedForLater(courseId);
    if (res.success) {
      alert(res.msg);
      window.location.reload();
    } else {
      alert(res.msg);
    }
  };

  const unmarkCourseForLater = async () => {
    // unmark course from later
    const res = await removeSavedForLaterProducts(courseId);
    if (res.success) {
      alert(res.msg);
      window.location.reload();
    } else {
      alert(res.msg);
    }
  };

  return (
    <div className="flex flex-wrap items-end gap-2 sm:flex-col">
      <Button
        className="text-lg text-accent-blue"
        onClick={removeProductFromCart}
      >
        Remove
      </Button>
      <Button
        className="text-lg text-accent-blue"
        onClick={isSavedForLater ? markCourseForLater : unmarkCourseForLater}
      >
        {isSavedForLater ? "Move to Cart" : "Save for Later"}
      </Button>
      <Button className="text-lg text-accent-blue">Move to Wishlist</Button>
    </div>
  );
};

export default CartController;

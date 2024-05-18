"use client";
import React from "react";
import { Button } from "../ui/button";
import { removeCourseFromCart } from "@/actions/user.actions";

interface CartControllerProps {
  courseId: number;
}

const CartController = ({ courseId }: CartControllerProps) => {
  const removeProductFromCart = async () => {
    const res = await removeCourseFromCart(courseId);
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
      <Button className="text-lg text-accent-blue">Save for Later</Button>
      <Button className="text-lg text-accent-blue">Move to Wishlist</Button>
    </div>
  );
};

export default CartController;

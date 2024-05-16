import React from "react";
import { Button } from "../ui/button";

const CartController = () => {
  return (
    <div className="flex flex-wrap items-end gap-2 sm:flex-col">
      <Button className="text-lg text-accent-blue">Remove</Button>
      <Button className="text-lg text-accent-blue">Save for Later</Button>
      <Button className="text-lg text-accent-blue">Move to Wishlist</Button>
    </div>
  );
};

export default CartController;

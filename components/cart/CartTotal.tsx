import React from "react";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";
import Promotions from "./Promotions";

const CartTotal = () => {
  return (
    <div className="flex flex-col">
      <h6 className="text-bold text-[#6A6F73]">Total:</h6>
      <div className="flex flex-col gap-1">
        <span className="text-3xl text-bold text-{#000}">Rs 499</span>
        <h6 className="text-bold text-[#6A6F73] line-through">Rs 2000</h6>
        <span className="text-semibold text-[#000]">86% Off</span>
      </div>
      <Button className="mt-3 w-full bg-accent-blue py-3 text-primary-100 sm:w-[400px]">
        <span className="text-bold">Checkout</span>
      </Button>
      <Separator className="my-4 bg-[#D1D7DC]" />
      <Promotions />
    </div>
  );
};

export default CartTotal;

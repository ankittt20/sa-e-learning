import CartTotal from "@/components/cart/CartTotal";
import CartCard from "@/components/shared/cards/CartCard";
import { Separator } from "@/components/ui/separator";
import React from "react";

const page = () => {
  return (
    <div>
      <h3 className="h3-bold-extra">Shopping Cart</h3>
      <p className="text-semibold mt-9">1 Item in Cart</p>
      <Separator className="my-4 bg-[#D1D7DC]" />
      <div className="flex flex-wrap justify-between gap-10">
        <CartCard />
        <CartTotal />
      </div>
    </div>
  );
};

export default page;

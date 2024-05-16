import React from "react";
import CouponCard from "./CouponCard";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

const Promotions = () => {
  return (
    <div>
      <h6 className="text-2xl text-bold text-{#000}"> Promotions</h6>
      <div className="mt-4 flex flex-col gap-2">
        <CouponCard />
        <div className="mt-2 flex">
          <Input
            placeholder="Enter coupon code"
            className="rounded-none border"
          />
          <Button className="rounded-none bg-accent-blue text-primary-100">
            Apply
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Promotions;

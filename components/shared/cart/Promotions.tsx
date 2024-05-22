import React, { useState } from "react";
import { Input } from "../../ui/input";
import { Button } from "../../ui/button";
import { validateCoupon } from "@/actions/cart.actions";
import { FaXmark } from "react-icons/fa6";

interface PromotionsProps {
  applyDiscount: (discountValue: any) => void;
}

const Promotions = ({ applyDiscount }: PromotionsProps) => {
  const [validated, setValidated] = useState(false);
  const [couponCode, setCouponCode] = useState("");
  const [failure, setFailure] = useState(false);

  const handleClick = async () => {
    const { success, discountValue } = await validateCoupon(couponCode);
    if (success) {
      setValidated(true);
      setFailure(false);
      applyDiscount(discountValue);
    } else {
      setValidated(false);
      setFailure(true);
      applyDiscount(0);
    }
  };

  const handleRemoveCoupon = () => {
    setValidated(false);
    setCouponCode("");
    applyDiscount(0);
  };

  const handleChange = (e: any) => {
    setCouponCode(e.target.value);
    if (failure) {
      setFailure(false);
    }
  };

  return (
    <div>
      <h6 className="text-2xl font-bold text-black">Promotions</h6>
      <div className="mt-4 flex flex-col gap-2">
        {validated && (
          <div className="flex items-center justify-between border border-dotted p-4">
            <h4>
              <span className="font-semibold">{couponCode} </span>
              is applied
            </h4>
            <FaXmark
              className="size-5 cursor-pointer"
              onClick={handleRemoveCoupon}
            />
          </div>
        )}
        {failure && (
          <p className="my-1 italic text-xs text-[#c72c2c]">
            Invalid Coupon Code
          </p>
        )}
        <div className="mt-2 flex">
          <Input
            placeholder="Enter Coupon Code"
            className="rounded-none border"
            required
            value={couponCode}
            onChange={handleChange}
          />
          <Button
            onClick={handleClick}
            className="rounded-none bg-accent-blue text-primary-100"
          >
            Apply
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Promotions;

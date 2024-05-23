"use client";
import React, { useCallback, useEffect, useState } from "react";
import { Separator } from "../../ui/separator";
import Promotions from "./Promotions";
import { makePayment } from "@/actions/payments.action";
import { v4 } from "uuid";

interface CartTotalProps {
  courses: any;
  user: any;
}

const CartTotal = ({ courses, user }: CartTotalProps) => {
  const [cartTotal, setCartTotal] = useState(0);
  const [paymentLink, setPaymentLink] = useState("");
  const [productName, setProductName] = useState("");
  const [discountAmount, setDiscountAmount] = useState(0);

  // concat course names to form product name
  useEffect(() => {
    const productNames = courses?.cart?.cartProducts.map(
      (product: any) => product.course.id
    );
    setProductName(productNames?.join("$"));
  }, [courses]);

  const generatePaymentLink = useCallback(async () => {
    const data = {
      merchant_id: "10033735",
      merchant_key: "6e5on1l1ixuwq",
      return_url: "https://25f2-223-177-225-110.ngrok-free.app/dashboard",
      cancel_url: "https://25f2-223-177-225-110.ngrok-free.app/cancel",
      notify_url: "https://25f2-223-177-225-110.ngrok-free.app/api/payments",
      name_first: user?.name.split(" ")[0],
      name_last: user?.name.split(" ")[1],
      email_address: "www.aditi17@gmail.com",
      amount: cartTotal,
      item_name: v4(),
      custom_str1: productName,
      custom_str2: user?.id,
    };
    if (cartTotal === 0) return;
    const res = await makePayment(data);
    setPaymentLink(res);
  }, [user, cartTotal, productName]);

  useEffect(() => {
    generatePaymentLink();
  }, [cartTotal, generatePaymentLink]);

  const getCartTotal = useCallback(
    () =>
      courses.cart?.cartProducts.reduce((acc: number, product: any) => {
        return acc + product.course.price;
      }, 0),
    [courses]
  );

  useEffect(() => {
    setCartTotal(getCartTotal);
  }, [courses, getCartTotal]);

  const applyDiscount = (discountValue: number) => {
    setDiscountAmount(discountValue);
  };

  return (
    <div className="flex flex-col">
      <h6 className="text-bold text-[#6A6F73]">Total:</h6>
      <div className="flex flex-col gap-1">
        <span className="text-3xl text-bold text-{#000}">
          Rs {cartTotal - (cartTotal * discountAmount) / 100}
        </span>
        {discountAmount > 0 && (
          <>
            <h6 className="text-bold text-[#6A6F73] line-through">
              Rs {(cartTotal * discountAmount) / 100}
            </h6>
            <span className="text-semibold text-[#000]">
              {discountAmount}% Off
            </span>
          </>
        )}
      </div>
      <div dangerouslySetInnerHTML={{ __html: paymentLink }}></div>
      <Separator className="my-4 bg-[#D1D7DC]" />
      <Promotions applyDiscount={applyDiscount} />
    </div>
  );
};

export default CartTotal;

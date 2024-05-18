"use client";
import React, { useCallback, useEffect, useState } from "react";
import { Separator } from "../ui/separator";
import Promotions from "./Promotions";
import { makePayment } from "@/actions/payments.action";
// import { v4 } from "uuid";

interface CartTotalProps {
  courses: any;
  user: any;
}

const CartTotal = ({ courses, user }: CartTotalProps) => {
  const [cartTotal, setCartTotal] = useState(0);
  const [paymentLink, setPaymentLink] = useState("");

  const generatePaymentLink = useCallback(async () => {
    const data = {
      merchant_id: "10033735",
      merchant_key: "6e5on1l1ixuwq",
      return_url: "https://sa-e-learning.vercel.app/dashboard",
      cancel_url: "https://sa-e-learning.vercel.app/cancel",
      notify_url: "https://sa-e-learning.vercel.app/api/payments",
      name_first: user?.name.split(" ")[0],
      name_last: user?.name.split(" ")[1],
      email_address: "www.aditi17@gmail.com",
      amount: cartTotal,
      item_name: "order#123",
    };
    if (cartTotal === 0) return;
    const res = await makePayment(data);
    setPaymentLink(res);
  }, [user, cartTotal]);

  useEffect(() => {
    generatePaymentLink();
  }, [cartTotal, generatePaymentLink]);

  const getCartTotal = useCallback(
    () =>
      courses.cart.cartProducts.reduce((acc: number, product: any) => {
        return acc + product.course.price;
      }, 0),
    [courses]
  );

  useEffect(() => {
    setCartTotal(getCartTotal);
  }, [courses, getCartTotal]);

  return (
    <div className="flex flex-col">
      <h6 className="text-bold text-[#6A6F73]">Total:</h6>
      <div className="flex flex-col gap-1">
        <span className="text-3xl text-bold text-{#000}">Rs {cartTotal}</span>
        <h6 className="text-bold text-[#6A6F73] line-through">Rs 2000</h6>
        <span className="text-semibold text-[#000]">86% Off</span>
      </div>
      <div dangerouslySetInnerHTML={{ __html: paymentLink }}></div>
      <Separator className="my-4 bg-[#D1D7DC]" />
      <Promotions />
    </div>
  );
};

export default CartTotal;

import React from "react";
import Image from "next/image";
import { Rating } from "../Rating";
import Info from "@/components/Info";
import CartController from "@/components/cart/CartController";
import { Separator } from "@/components/ui/separator";

const CartCard = () => {
  return (
    <article className="flex flex-col">
      <div className="flex flex-wrap justify-between gap-9">
        <div className="flex items-start gap-9">
          <Image
            src="/assets/images/typescript.png"
            alt="typescript"
            width={150}
            height={100}
          />
          <div className="flex flex-col gap-2 ">
            <h3 className="text-semibold">TypeScript</h3>
            <p className="text-sm font-medium">By: Stephen Girder</p>
            <div className="flex items-center gap-3">
              <p className="text-sm font-medium">
                <span className="text-[#000]">4.7</span>
              </p>
              <Rating />
            </div>
            <div className="flex items-center gap-4 max-sm:hidden">
              <p className="text-sm">27.5 Hours</p>
              <Info infoMsg="339 lectures" />
              <Info infoMsg="All levels" />
            </div>
          </div>
        </div>
        <div className="flex items-start gap-4">
          <div>
            <CartController />
          </div>
          <div className="py-1">
            <p className="text-bold text-accent-blue">$12.99</p>
          </div>
        </div>
      </div>
      <Separator className="my-4 bg-[#D1D7DC]" />
    </article>
  );
};

export default CartCard;

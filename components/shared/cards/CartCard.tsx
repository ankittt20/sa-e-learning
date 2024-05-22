import React from "react";
import Image from "next/image";
import { Rating } from "../Rating";
import Info from "@/components/Info";
import CartController from "@/components/shared/cart/CartController";
import { Separator } from "@/components/ui/separator";
import { getTotalCourseLessonCount } from "@/actions/course.action";

interface CartCardProps {
  product: any;
  isSavedForLater: boolean;
}

const CartCard = async ({ product, isSavedForLater }: CartCardProps) => {
  const courseLessonCount = await getTotalCourseLessonCount(product.id);

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
            <h3 className="text-semibold">{product?.name}</h3>
            <p className="text-sm font-medium">By: {product?.tutor?.name}</p>
            <div className="flex items-center gap-3">
              <p className="text-sm font-medium">
                <span className="text-[#000]">
                  {product?.rating || "No ratings to show"}
                </span>
              </p>
              <Rating />
            </div>
            <div className="flex items-center gap-4 max-sm:hidden">
              <p className="text-sm">27.5 Hours</p>
              <Info
                infoMsg={`${courseLessonCount.totalLessonCount} lectures`}
              />
              <Info infoMsg={product.level} />
            </div>
          </div>
        </div>
        <div className="flex items-start gap-4">
          <div>
            <CartController
              courseId={+product.id}
              isSavedForLater={isSavedForLater}
            />
          </div>
          <div className="py-1">
            <p className="text-bold text-accent-blue">{`Rs. ${product?.price}`}</p>
          </div>
        </div>
      </div>
      <Separator className="my-4 bg-[#D1D7DC]" />
    </article>
  );
};

export default CartCard;

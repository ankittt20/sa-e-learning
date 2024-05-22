"use server";
import { db } from "@/lib/prisma";

// get all offers & discounts
export const getDiscounts = async () => {
    try {
      const discounts = await db.discount.findMany();
  
      return { discounts, success: true };
    } catch (err) {
      return { msg: "An error occurred", success: false };
    }
};

// validate coupon code
export const validateCoupon = async (couponCode: string) => {
    try {
      const coupon = await db.discount.findFirst({
        where: { code: couponCode },
      });
  
      if (coupon) {
        return { success: true, discountValue: coupon.discount };
      } else {
        return { success: false, msg: "Coupon Not Found" };
      }
    } catch (err) {
      return { success: false, msg: "An error occurred" };
    }
  };
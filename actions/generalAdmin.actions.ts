"use server";
import { db } from "@/lib/prisma";

// add a new discount code
export const addDiscountCode = async (
  code: string,
  discount: number,
  expiryDate: Date,
  purpose: string
) => {
  try {
    // check if the code already exists
    const discountCode = await db.discount.findUnique({
      where: {
        code,
      },
    });

    if (discountCode) {
      return { msg: "Discount code already exists", success: false };
    }

    // create a new discount code
    await db.discount.create({
      data: {
        code,
        discount,
        expiryDate,
        purpose,
      },
    });

    return { msg: "Discount code created successfully", success: true };
  } catch (err) {
    return { msg: "Error creating discount code", success: false };
  }
};

// update discount code
export const updateDiscountCode = async (
  id: number,
  code: string,
  discount: number,
  expiryDate: Date,
  purpose: string
) => {
  try {
    // check if the discount code exists
    const discountCode = await db.discount.findUnique({
      where: {
        id,
      },
    });

    if (!discountCode) {
      return { msg: "Discount code not found", success: false };
    }

    // update the discount code
    await db.discount.update({
      where: {
        id,
      },
      data: {
        code,
        discount,
        expiryDate,
        purpose,
      },
    });

    return { msg: "Discount code updated successfully", success: true };
  } catch (err) {
    return { msg: "An error occurred", success: false };
  }
};

// delete discount code
export const deleteDiscountCode = async (id: number) => {
  try {
    // check if the discount code exists
    const discountCode = await db.discount.findUnique({
      where: {
        id,
      },
    });

    if (!discountCode) {
      return { msg: "Discount code not found", success: false };
    }

    // delete the discount code
    await db.discount.delete({
      where: {
        id,
      },
    });

    return { msg: "Discount code deleted successfully", success: true };
  } catch (err) {
    return { msg: "An error occurred", success: false };
  }
};

// get all discount codes
export const getDiscountCodes = async () => {
  try {
    const discountCodes = await db.discount.findMany();

    return {
      msg: "Discount codes fetched successfully",
      success: true,
      discountCodes,
    };
  } catch (err) {
    return { msg: "An error occurred", success: false };
  }
};

// get all categories
export const getCategories = async () => {
  try {
    const categories = await db.category.findMany();

    return {
      msg: "Categories fetched successfully",
      success: true,
      categories,
    };
  } catch (err) {
    return { msg: "An error occurred", success: false };
  }
};

// get all courses
export const getCourses = async () => {
  try {
    const courses = await db.course.findMany();

    return { msg: "Courses fetched successfully", success: true, courses };
  } catch (err) {
    return { msg: "An error occurred", success: false };
  }
};

// get all articles
export const getArticles = async () => {
  try {
    const articles = await db.article.findMany();

    return { msg: "Articles fetched successfully", success: true, articles };
  } catch (err) {
    return { msg: "An error occurred", success: false };
  }
};

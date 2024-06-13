"use server";
import { db } from "@/lib/prisma";

// get all categories
export const getAllCategories = async () => {
  try {
    const categories = await db.category.findMany({
      include: {
        _count: {
          select: {
            course: true,
          },
        },
      },
    });
    return { categories, success: true, message: "" };
  } catch (err) {
    return {
      message: "Could not fetch categories",
      success: false,
      categories: [],
    };
  }
};

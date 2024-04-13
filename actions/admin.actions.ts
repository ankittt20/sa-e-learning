"use server";
import { db } from "@/lib/prisma";

// get tutor performance
export const getTutorPerformance = async (tutorId: number) => {
  try {
    const tutorPerformance = await db.tutor.findUnique({
      where: {
        id: tutorId,
      },
      select: {
        id: true,
        name: true,
        forDisabled: true,
        speciality: true,
        rating: true,
        courses: {
          select: {
            id: true,
            name: true,
            rating: true,
            price: true,
            student: true,
          },
        },
        _count: {
          select: {
            courses: true,
          },
        },
      },
    });

    return { tutorPerformance, success: true };
  } catch (err) {
    return { msg: "Tutor not found", success: false };
  }
};

// add new category
export const addCategory = async (name: string, type: number) => {
  try {
    // check if the category already exists
    const category = await db.category.findUnique({
      where: {
        name,
      },
    });

    if (category) {
      return { msg: "Category already exists", success: false };
    }

    // create a new category
    await db.category.create({
      data: {
        name,
        type,
      },
    });

    return { msg: "Category created successfully", success: true };
  } catch (err) {
    return { msg: "An error occurred", success: false };
  }
};

// update category
export const updateCategory = async (
  id: number,
  name: string,
  type: number
) => {
  try {
    // check if the category exists
    const category = await db.category.findUnique({
      where: {
        id,
      },
    });

    if (!category) {
      return { msg: "Category not found", success: false };
    }

    // update the category
    await db.category.update({
      where: {
        id,
      },
      data: {
        name,
        type,
      },
    });

    return { msg: "Category updated successfully", success: true };
  } catch (err) {
    return { msg: "An error occurred", success: false };
  }
};

// delete category
export const deleteCategory = async (id: number) => {
  try {
    // check if the category exists
    const category = await db.category.findUnique({
      where: {
        id,
      },
    });

    if (!category) {
      return { msg: "Category not found", success: false };
    }

    // delete the category
    await db.category.delete({
      where: {
        id,
      },
    });

    return { msg: "Category deleted successfully", success: true };
  } catch (err) {
    return { msg: "An error occurred", success: false };
  }
};

// add new article
export const addArticle = async (
  title: string,
  content: string,
  authorId: number,
  publishedAt: Date
) => {
  try {
    // create a new article
    await db.article.create({
      data: {
        title,
        content,
        authorId,
        publishedAt,
        verified: false,
      },
    });

    return { msg: "Article created successfully", success: true };
  } catch (err) {
    return { msg: "An error occurred", success: false };
  }
};

// update article
export const updateArticle = async (
  id: number,
  title: string,
  content: string,
  authorId: number,
  publishedAt: Date
) => {
  try {
    // check if the article exists
    const article = await db.article.findUnique({
      where: {
        id,
      },
    });

    if (!article) {
      return { msg: "Article not found", success: false };
    }

    // update the article
    await db.article.update({
      where: {
        id,
      },
      data: {
        title,
        content,
        authorId,
        publishedAt,
      },
    });

    return { msg: "Article updated successfully", success: true };
  } catch (err) {
    return { msg: "An error occurred", success: false };
  }
};

// delete article
export const deleteArticle = async (id: number) => {
  try {
    // check if the article exists
    const article = await db.article.findUnique({
      where: {
        id,
      },
    });

    if (!article) {
      return { msg: "Article not found", success: false };
    }

    // delete the article
    await db.article.delete({
      where: {
        id,
      },
    });

    return { msg: "Article deleted successfully", success: true };
  } catch (err) {
    return { msg: "An error occurred", success: false };
  }
};

// handle article verification
export const verifyArticle = async (
  id: number,
  verificationStatus: boolean
) => {
  try {
    // check if the article exists
    const article = await db.article.findUnique({
      where: {
        id,
      },
    });

    if (!article) {
      return { msg: "Article not found", success: false };
    }

    // verify the article
    await db.article.update({
      where: {
        id,
      },
      data: {
        verified: verificationStatus,
      },
    });

    return { msg: "Article status updated successfully", success: true };
  } catch (err) {
    return { msg: "An error occurred", success: false };
  }
};

// verify tutor course
export const verifyTutorCourse = async (
  courseId: number,
  verificationStatus: boolean
) => {
  try {
    // check if the tutor course exists
    const course = await db.course.findUnique({
      where: {
        id: courseId,
      },
    });

    if (!course) {
      return { msg: "Tutor course not found", success: false };
    }

    // verify the tutor course
    await db.course.update({
      where: {
        id: courseId,
      },
      data: {
        verified: verificationStatus,
      },
    });

    return { msg: "Course status updated successfully", success: true };
  } catch (err) {
    return { msg: "An error occurred", success: false };
  }
};

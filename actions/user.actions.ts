"use server";
import { db } from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";

// add to course to user cart
export const addCourseToCart = async (courseId: number) => {
  try {
    // get the loggedIn userId
    const session = await getServerSession(authOptions);
    const userId = session?.user.id;

    console.log("userId", userId);

    if (!userId) {
      return {
        msg: "You are not authorized to add course to cart",
        success: false,
      };
    }

    // check if the course is already in the cart
    const isCourseInCart = await db.cart.findFirst({
      where: {
        userId: +userId,
      },
    });

    if (isCourseInCart) {
      // update the cart
      const isCourseAlreadyInCart = await db.cartProducts.findFirst({
        where: {
          cartId: isCourseInCart.id,
          courseId,
        },
      });

      if (isCourseAlreadyInCart) {
        return { msg: "Course is already in the cart", success: false };
      }

      await db.cartProducts.create({
        data: {
          cartId: isCourseInCart.id,
          courseId,
        },
      });
    } else {
      // add the course to the cart
      const newCart = await db.cart.create({
        data: {
          userId: +userId,
        },
      });

      await db.cart.update({
        where: {
          id: newCart.id,
        },
        data: {
          cartProducts: {
            create: {
              courseId,
            },
          },
        },
      });
    }

    return { msg: "Course added to cart successfully", success: true };
  } catch (err) {
    console.log(err);
    return { msg: "Error fetching course", success: false };
  }
};

// remove course from user cart
export const removeCourseFromCart = async (courseId: number) => {
  try {
    // get the loggedIn userId
    const session = await getServerSession(authOptions);
    const userId = session?.user.id;

    if (!userId) {
      return {
        msg: "You are not authorized to remove course from cart",
        success: false,
      };
    }

    // check if the course is in the cart
    const isCourseInCart = await db.cart.findFirst({
      where: {
        userId: +userId,
      },
    });

    if (!isCourseInCart) {
      return { msg: "Course is not in the cart", success: false };
    }

    // remove the course from the cart
    await db.cartProducts.delete({
      where: {
        cartId_courseId: {
          cartId: isCourseInCart.id,
          courseId,
        },
      },
    });

    return { msg: "Course removed from cart successfully", success: true };
  } catch (err) {
    console.log(err);
    return { msg: "Error fetching course", success: false };
  }
};

// add course to user wishlist
export const addCourseToWishlist = async (courseId: number) => {
  try {
    // get the loggedIn userId
    const session = await getServerSession(authOptions);
    const userId = session?.user.id;

    if (!userId) {
      return {
        msg: "You are not authorized to add course to wishlist",
        success: false,
      };
    }

    // check if the course is already in the wishlist
    const isCourseInWishlist = await db.wishlist.findFirst({
      where: {
        userId: +userId,
        wishlistProducts: {
          some: {
            courseId,
          },
        },
      },
    });

    if (isCourseInWishlist) {
      return { msg: "Course is already in the wishlist", success: false };
    }

    // add the course to the wishlist
    await db.wishlist.create({
      data: {
        userId: +userId,
        wishlistProducts: {
          create: {
            courseId,
          },
        },
      },
    });

    return { msg: "Course added to wishlist successfully", success: true };
  } catch (err) {
    console.log(err);
    return { msg: "Error fetching course", success: false };
  }
};

// remove course from user wishlist
export const removeCourseFromWishlist = async (courseId: number) => {
  try {
    // get the loggedIn userId
    const session = await getServerSession(authOptions);
    const userId = session?.user.id;

    if (!userId) {
      return {
        msg: "You are not authorized to remove course from wishlist",
        success: false,
      };
    }

    // check if the course is in the wishlist
    const isCourseInWishlist = await db.wishlist.findFirst({
      where: {
        userId: +userId,
        wishlistProducts: {
          some: {
            courseId,
          },
        },
      },
    });

    if (!isCourseInWishlist) {
      return { msg: "Course is not in the wishlist", success: false };
    }

    // remove the course from the wishlist
    await db.wishlistProducts.delete({
      where: {
        wishlistId_courseId: {
          wishlistId: isCourseInWishlist.id,
          courseId,
        },
      },
    });

    return { msg: "Course removed from wishlist successfully", success: true };
  } catch (err) {
    console.log(err);
    return { msg: "Error fetching course", success: false };
  }
};

// fetch user cart
export const getUserCart = async () => {
  try {
    // get the loggedIn userId
    const session = await getServerSession(authOptions);
    const userId = session?.user.id;

    if (!userId) {
      return {
        msg: "You are not authorized to fetch cart",
        success: false,
      };
    }

    // get the user cart
    const cart = await db.cart.findFirst({
      where: {
        userId: +userId,
      },
      include: {
        cartProducts: {
          include: {
            course: {
              select: {
                id: true,
                name: true,
                price: true,
                image: true,
                level: true,
                rating: true,
                tutor: {
                  select: {
                    name: true,
                    id: true,
                  },
                },
              },
            },
          },
          where: {
            savedForLater: false,
          },
        },
      },
    });

    return { cart, success: true };
  } catch (err) {
    console.log(err);
    return { msg: "Error fetching cart", success: false };
  }
};

export const addCourseToStudentCourses = async (courseId: any, userId: any) => {
  const mappedData = courseId.split("$").map((id: string) => {
    return {
      courseId: +id,
      studentId: +userId,
    };
  });

  try {
    // add course to student courses
    await db.studentCourse.createMany({
      data: mappedData,
    });

    // check if the course is in the cart
    const isCourseInCart = await db.cart.findFirst({
      where: {
        userId: +userId,
      },
    });

    if (!isCourseInCart) {
      return { msg: "Course is not in the cart", success: false };
    }

    // remove the course from the cart
    await db.cartProducts.deleteMany({
      where: {
        cartId: isCourseInCart.id,
        courseId: {
          in: mappedData.map(
            (data: { courseId: number; userId: number }) => data.courseId
          ),
        },
      },
    });

    return {
      msg: "Course added to student courses successfully",
      success: true,
    };
  } catch (err) {
    console.log(err);
    return { msg: "Error adding course to student courses", success: false };
  }
};

export const markCartProductsSavedForLater = async (courseId: number) => {
  try {
    // get the loggedIn userId
    const session = await getServerSession(authOptions);
    const userId = session?.user.id;

    if (!userId) {
      return {
        msg: "You are not authorized to mark products saved for later",
        success: false,
      };
    }

    // check if the course is in the cart
    const isCourseInCart = await db.cart.findFirst({
      where: {
        userId: +userId,
      },
    });

    if (!isCourseInCart) {
      return { msg: "Course is not in the cart", success: false };
    }

    // mark the products saved for later
    await db.cartProducts.updateMany({
      where: {
        cartId: isCourseInCart.id,
        courseId,
      },
      data: {
        savedForLater: true,
      },
    });

    return {
      msg: "Products marked saved for later successfully",
      success: true,
    };
  } catch (err) {
    console.log(err);
    return { msg: "Error marking products saved for later", success: false };
  }
};

export const getSavedForLaterProducts = async () => {
  try {
    // get the loggedIn userId
    const session = await getServerSession(authOptions);
    const userId = session?.user.id;

    if (!userId) {
      return {
        msg: "You are not authorized to fetch saved for later products",
        success: false,
      };
    }

    // get the saved for later products
    const savedForLaterProducts = await db.cartProducts.findMany({
      where: {
        cart: {
          userId: +userId,
        },
        savedForLater: true,
      },
      include: {
        course: {
          select: {
            id: true,
            name: true,
            price: true,
            image: true,
            level: true,
            rating: true,
            tutor: {
              select: {
                name: true,
                id: true,
              },
            },
          },
        },
      },
    });

    return { savedForLaterProducts, success: true };
  } catch (err) {
    console.log(err);
    return {
      msg: "Error fetching saved for later products",
      success: false,
      savedForLaterProducts: [],
    };
  }
};

export const removeSavedForLaterProducts = async (courseId: number) => {
  try {
    // get the loggedIn userId
    const session = await getServerSession(authOptions);
    const userId = session?.user.id;

    if (!userId) {
      return {
        msg: "You are not authorized to remove saved for later products",
        success: false,
      };
    }

    // check if the course is in the cart
    const isCourseInCart = await db.cart.findFirst({
      where: {
        userId: +userId,
      },
    });

    if (!isCourseInCart) {
      return { msg: "Course is not in the cart", success: false };
    }

    // remove the course from the cart
    await db.cartProducts.updateMany({
      where: {
        cartId: isCourseInCart.id,
        courseId,
      },
      data: {
        savedForLater: false,
      },
    });

    return {
      msg: "Saved for later products removed successfully",
      success: true,
    };
  } catch (err) {
    console.log(err);
    return { msg: "Error removing saved for later products", success: false };
  }
};

export const getUserCourses = async (userId: number) => {
  try {
    // get the user courses
    const userCourses = await db.studentCourse.findMany({
      where: {
        studentId: userId,
      },
      include: {
        course: {
          select: {
            id: true,
            name: true,
            price: true,
            image: true,
            level: true,
            rating: true,
            tutor: {
              select: {
                name: true,
                id: true,
              },
            },
            category: {
              select: {
                category: true,
                id: true,
              },
            },
          },
        },
      },
    });

    return { userCourses, success: true };
  } catch (err) {
    console.log(err);
    return {
      msg: "Error fetching user courses",
      success: false,
      userCourses: [],
    };
  }
};

// submit user review for a course
export const submitUserReview = async (data: {
  rating: number;
  review: string;
  courseId: number;
}) => {
  const { courseId, rating, review } = data;
  try {
    // get the loggedIn userId
    const session = await getServerSession(authOptions);
    const userId = session?.user.id;

    if (!userId) {
      return {
        msg: "You are not authorized to submit review",
        success: false,
      };
    }

    // check if the user has already reviewed the course
    const isUserAlreadyReviewed = await db.review.findFirst({
      where: {
        userId: +userId,
        courseId,
      },
    });

    if (isUserAlreadyReviewed) {
      return { msg: "You have already reviewed the course", success: false };
    }

    // submit the review
    await db.review.create({
      data: {
        userId: +userId,
        courseId,
        rating,
        review,
      },
    });

    return { msg: "Review submitted successfully", success: true };
  } catch (err) {
    console.log(err);
    return { msg: "Error submitting review", success: false };
  }
};

// change the lesson status of the user
export const updateLessonStatus = async (lessonId: number) => {
  try {
    // get the loggedIn userId
    const session = await getServerSession(authOptions);
    const userId = session?.user.id;

    console.log("userId", userId);

    if (!userId) {
      return {
        msg: "You are not authorized to update lesson status",
        success: false,
      };
    }

    // update the lesson status
    await db.progressions.create({
      data: {
        studentId: +userId,
        lessonId,
        completed: true,
      },
    });

    return { msg: "Lesson status updated successfully", success: true };
  } catch (err) {
    console.log(err);
    return { msg: "Error updating lesson status", success: false };
  }
};

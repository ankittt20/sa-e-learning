"use server";
import { authOptions } from "@/lib/auth";
import { db } from "@/lib/prisma";
import { getServerSession } from "next-auth";

// get all courses
export const getAllCourses = async () => {
  try {
    const courses = await db.course.findMany({
      include: {
        tutor: true,
        category: {
          select: {
            category: true,
          },
        },
        _count: {
          select: {
            student: true,
          },
        },
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    return { courses, success: true, msg: "Courses fetched successfully" };
  } catch (err) {
    console.log(err);
    return { msg: "Error fetching courses", success: false };
  }
};

// get course by id
export const getCourseById = async (courseId: number) => {
  try {
    // get the course by id
    const course = await db.course.findUnique({
      where: {
        id: courseId,
      },
      include: {
        tutor: {
          select: {
            id: true,
            name: true,
            speciality: true,
            profilePicture: true,
            fbUrl: true,
            instagramUrl: true,
            linkedInUrl: true,
            about: true,
            reviews: {
              select: {
                rating: true,
                review: true,
              },
            },
          },
        },
        category: {
          select: {
            category: true,
          },
        },
        sections: true,
        rating: {
          select: {
            rating: true,
            review: true,
            user: {
              select: {
                id: true,
                name: true,
                profilePicture: true,
              },
            },
            createdAt: true,
          },
        },
        _count: {
          select: {
            student: true,
          },
        },
      },
    });

    return { course, success: true };
  } catch (err) {
    console.log(err);
    return { msg: "Error fetching course", success: false };
  }
};

export const getTotalCourseLessonCount = async (courseId: number) => {
  try {
    const course = await db.course.findUnique({
      where: {
        id: courseId,
      },
      include: {
        sections: {
          select: {
            lessons: true,
          },
        },
      },
    });

    let totalLessonCount = 0;
    course?.sections.forEach((section) => {
      totalLessonCount += section.lessons.length;
    });

    return { totalLessonCount, success: true };
  } catch (err) {
    console.log(err);
    return {
      msg: "Error fetching total lesson count",
      success: false,
      totalLessonCount: 0,
    };
  }
};

export const getPopularCourses = async (categoryId: number) => {
  try {
    if (categoryId === 0) {
      const popularCourses = await db.course.findMany({
        include: {
          _count: {
            select: {
              student: true,
            },
          },
          tutor: {
            select: {
              name: true,
              id: true,
            },
          },
          category: {
            select: {
              category: {
                select: {
                  name: true,
                  id: true,
                },
              },
            },
          },
        },
        orderBy: {
          student: {
            _count: "desc",
          },
        },
      });
      return {
        popularCourses,
        success: true,
        msg: "Popular courses fetched successfully",
      };
    } else {
      const popularCourses = await db.course.findMany({
        where: {
          category: {
            some: {
              categoryId,
            },
          },
        },
        include: {
          _count: {
            select: {
              student: true,
            },
          },
          tutor: {
            select: {
              name: true,
              id: true,
            },
          },
          category: {
            select: {
              category: {
                select: {
                  name: true,
                  id: true,
                },
              },
            },
          },
        },
        orderBy: {
          student: {
            _count: "desc",
          },
        },
      });
      return {
        popularCourses,
        success: true,
        msg: "Popular courses fetched successfully",
      };
    }
  } catch (err) {
    console.log(err);
    return {
      msg: "Error fetching popular courses",
      success: false,
      popularCourses: [],
    };
  }
};

// calculate the average rating of a course
export const getCourseRating = async (courseId: number) => {
  try {
    const avgRating = await db.review.aggregate({
      where: {
        courseId,
      },
      _avg: {
        rating: true,
      },
    });

    return { avgRating, success: true };
  } catch (err) {
    console.log(err);
    return {
      msg: "Error fetching course rating",
      success: false,
      avgRating: 0,
    };
  }
};

export const getCourseReviews = async (courseId: number, order: string) => {
  try {
    const reviews = await db.review.findMany({
      where: {
        courseId,
      },
      include: {
        user: {
          select: {
            id: true,
            name: true,
            profilePicture: true,
          },
        },
      },
      orderBy: {
        createdAt: order === "asc" ? "asc" : "desc",
      },
    });

    return { reviews, success: true };
  } catch (err) {
    console.log(err);
    return { msg: "Error fetching reviews", success: false, reviews: [] };
  }
};

// get course by category
export const getCoursesByCategory = async (category: number) => {
  try {
    const courses = await db.course.findMany({
      where: {
        category: {
          some: {
            categoryId: category,
          },
        },
      },
      include: {
        tutor: true,
        category: {
          select: {
            category: {
              select: {
                name: true,
              },
            },
          },
        },
        _count: {
          select: {
            student: true,
          },
        },
      },
    });

    return { courses, success: true, msg: "Courses fetched successfully" };
  } catch (err) {
    console.log(err);
    return { msg: "Error fetching courses", success: false };
  }
};

// sort courses by different parameters
export const sortCourses = async (sortBy: string) => {
  try {
    const courses = await db.course.findMany({
      include: {
        tutor: true,
        category: {
          select: {
            category: true,
          },
        },
        _count: {
          select: {
            student: true,
          },
        },
      },
      orderBy: {
        createdAt: sortBy === "newest" ? "desc" : "asc",
      },
    });

    return { courses, success: true, msg: "Courses fetched successfully" };
  } catch (err) {
    console.log(err);
    return { msg: "Error fetching courses", success: false };
  }
};

// search courses by title, tutor or keyword
export const searchCourses = async (search: string) => {
  try {
    const courses = await db.course.findMany({
      where: {
        OR: [
          {
            name: {
              contains: search,
              mode: "insensitive",
            },
          },
          {
            tutor: {
              name: {
                contains: search,
                mode: "insensitive",
              },
            },
          },
          {
            keywords: {
              some: {
                keyword: {
                  name: search,
                },
              },
            },
          },
        ],
      },
      include: {
        tutor: true,
        category: {
          select: {
            category: true,
          },
        },
        _count: {
          select: {
            student: true,
          },
        },
      },
    });

    return { courses, success: true, msg: "Courses fetched successfully" };
  } catch (err) {
    console.log(err);
    return { msg: "Error fetching courses", success: false };
  }
};

// filter courses by category, price and suitable for
export const filterCourses = async (filter: {
  category: number;
  price: number;
  suitableFor: string;
}) => {
  try {
    // make dynamic conditions based on the filter
    const conditions = [];
    // check if the category is not 0
    if (filter.category !== 0) {
      conditions.push({
        category: {
          some: {
            categoryId: filter.category,
          },
        },
      });
    }

    // check if the price is not -1
    if (filter.price !== -1) {
      conditions.push({
        price: {
          lte: filter.price,
        },
      });
    }

    // check if the suitableFor is not empty
    if (filter.suitableFor !== "") {
      conditions.push({
        level: filter.suitableFor,
      });
    }

    const courses = await db.course.findMany({
      where: {
        AND: conditions,
      },
      include: {
        tutor: true,
        category: {
          select: {
            category: true,
          },
        },
        _count: {
          select: {
            student: true,
          },
        },
      },
    });

    return { courses, success: true, msg: "Courses fetched successfully" };
  } catch (err) {
    console.log(err);
    return { msg: "Error fetching courses", success: false };
  }
};

// add a new faq question to a course
export const addCourseFAQ = async (
  courseId: number,
  lessonId: number,
  data: { title: string; body: string }
) => {
  try {
    // get the logged in user from nextauth
    const session = await getServerSession(authOptions);
    if (!session) {
      return { msg: "User not authenticated", success: false };
    }

    const faq = await db.courseFAQ.create({
      data: {
        questionTitle: data.title,
        questionBody: data.body,
        lesson: {
          connect: {
            id: lessonId,
          },
        },
        course: {
          connect: {
            id: courseId,
          },
        },
        user: {
          connect: {
            id: +session?.user?.id,
          },
        },
      },
    });

    return { faq, success: true, msg: "Question added successfully" };
  } catch (err) {
    console.log(err);
    return { msg: "Error adding question", success: false };
  }
};

// get all the questions related to a course
export const getCourseFAQs = async (courseId: number) => {
  try {
    const faqs = await db.courseFAQ.findMany({
      where: {
        courseId,
      },
      include: {
        user: {
          select: {
            id: true,
            name: true,
            profilePicture: true,
          },
        },
        answer: {
          include: {
            user: {
              select: {
                id: true,
                name: true,
                profilePicture: true,
              },
            },
          },
        },
      },
    });

    return { faqs, success: true, msg: "FAQs fetched successfully" };
  } catch (err) {
    console.log(err);
    return { msg: "Error fetching FAQs", success: false };
  }
};

// add answer to a course question
export const addCourseFAQAnswer = async (
  questionId: number,
  data: { answer: string }
) => {
  try {
    // get the logged in user from nextauth
    const session = await getServerSession(authOptions);
    if (!session) {
      return { msg: "User not authenticated", success: false };
    }

    const answer = await db.courseFAQAnswers.create({
      data: {
        answer: data.answer,
        faq: {
          connect: {
            id: questionId,
          },
        },
        user: {
          connect: {
            id: +session?.user?.id,
          },
        },
      },
    });

    return { answer, success: true, msg: "Answer added successfully" };
  } catch (err) {
    console.log(err);
    return { msg: "Error adding answer", success: false };
  }
};

// upvote course answer
export const upvoteCourseFAQAnswer = async (answerId: number) => {
  try {
    // get the logged in user from nextauth
    const session = await getServerSession(authOptions);
    if (!session) {
      return { msg: "User not authenticated", success: false };
    }

    await db.courseFAQAnswers.update({
      where: {
        id: answerId,
      },
      data: {
        upvotes: {
          increment: 1,
        },
      },
    });

    return { success: true, msg: "Answer upvoted successfully" };
  } catch (err) {
    console.log(err);
    return { msg: "Error upvoting answer", success: false };
  }
};

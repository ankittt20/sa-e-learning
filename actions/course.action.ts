"use server";
import { db } from "@/lib/prisma";

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

export const getPopularCourses = async () => {
  try {
    const popularCourses = await db.course.findMany({
      include: {
        _count: {
          select: {
            student: true,
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

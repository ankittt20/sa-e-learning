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

"use server";
import { db } from "@/lib/prisma";

// get tutor performance
export const getTutorPerformance = async (tutorId: number) => {
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
};

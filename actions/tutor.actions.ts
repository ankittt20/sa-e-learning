"use server";
import { addTutorTypes } from "@/types/types";
import { db } from "@/lib/prisma";
import { hashSync } from "bcryptjs";
import { mailService } from "@/lib/mailService";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";

export const addTutor = async (data: addTutorTypes) => {
  // destructuring the data
  const {
    name,
    email,
    password,
    cpassword,
    idNumber,
    address,
    forDisabled,
    profilePicture,
  } = data;

  // check if the passwords match
  if (password !== cpassword) {
    return { msg: "Passwords do not match", success: false };
  }

  // check if a tutor with the same email already exists
  const tutor = await db.tutor.findUnique({
    where: {
      email,
    },
  });

  if (tutor) {
    return { msg: "Tutor already exists", success: false };
  }

  // hash the password
  const hashedPassword = hashSync(password, 10);

  // add the tutor
  await db.tutor.create({
    data: {
      name,
      email,
      password: hashedPassword,
      idNumber,
      address,

      forDisabled: Boolean(forDisabled), // eslint-disable-next-line no-use-before-define
      profilePicture,
      about: "",
      experience: "",
      speciality: "",
      education: "",
      rating: 0,
      fbUrl: "",
      linkedInUrl: "",
      twitterUrl: "",
      instagramUrl: "",
      verified: false,
    },
  });

  // send an affirmation email
  const mailOptions = {
    from: "shubhut17@gmail.com",
    to: email,
    subject: "Welcome to the platform",
    text: `Hello ${name}, Welcome to the platform. You have successfully registered as a tutor. Once verified by our admins, you can access the tutor panel and start publishing your courses. Your login credentials are: Email: ${email}, Password: ${password}`,
  };

  // send the email
  await mailService.sendMail(mailOptions);

  return { msg: "Tutor created successfully", success: true };
};

// create course for a tutor
export const createCourse = async (data: any) => {
  const session = await getServerSession(authOptions);

  if (session?.user.role !== "tutor") {
    return { msg: "You are not authorized to create a course", success: false };
  }

  // destructuring the data
  const {
    title,
    description,
    price,
    category,
    level,
    requirements,
    objectives,
    image,
  } = data;

  // add the course to the category
  const categoryExists = await db.category.findUnique({
    where: {
      id: +category,
    },
  });

  if (!categoryExists) {
    return { msg: "Category does not exist", success: false };
  }

  // add the course
  await db.categorisedCourse.create({
    data: {
      category: {
        connect: {
          id: +category,
        },
      },
      course: {
        create: {
          name: title,
          description,
          price,
          level,
          requirements,
          objectives,
          image,
          tutorId: +session?.user.id,
          verified: false,
        },
      },
    },
  });

  return { msg: "Course created successfully", success: true };
};

// add sections to the course
export const addSection = async (data: any) => {
  // destructuring the data
  const { name, courseId } = data;

  try {
    // add the section
    await db.courseSections.create({
      data: {
        name,
        courseId,
      },
    });

    return { msg: "Section created successfully", success: true };
  } catch (err) {
    return { msg: "Error creating section", success: false };
  }
};

// add lessons to the section
export const addLesson = async (data: any) => {
  // destructuring the data
  const { name, courseSectionsId, videoUrl, description } = data;

  try {
    // add the lesson
    await db.lesson.create({
      data: {
        name,
        courseSectionsId,
        videoUrl,
        description,
      },
    });

    return { msg: "Lesson created successfully", success: true };
  } catch (err) {
    return { msg: "Error creating lesson", success: false };
  }
};

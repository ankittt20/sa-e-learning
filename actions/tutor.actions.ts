"use server";
import {
  PostArticleInterface,
  addCoursesInterface,
  addTutorTypes,
} from "@/types/types";
import { db } from "@/lib/prisma";
import { hashSync } from "bcryptjs";
import { mailService } from "@/lib/mailService";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import axios from "axios";
import { PassThrough } from "stream";
import ffmpeg from "fluent-ffmpeg";
import { deleteFile } from "@/lib/fileUpload";

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
export const createCourse = async (data: addCoursesInterface) => {
  const session = await getServerSession(authOptions);

  if (session?.user.role !== "tutor") {
    deleteFile(data.image);
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
    tags,
  } = data;

  try {
    // add the course to the category
    const categoryExists = await db.category.findUnique({
      where: {
        id: +category,
      },
    });

    if (!categoryExists) {
      deleteFile(image);
      return { msg: "Category does not exist", success: false };
    }

    // add tags to the keywords table if they do not exist
    const newKeywords = await db.keywords.createManyAndReturn({
      data: tags.map((tag: string) => ({
        name: tag.toLowerCase(),
      })),
      skipDuplicates: true,
    });

    const keyWordIds = newKeywords.map((keyword) => keyword.id);

    // add the course
    const newCourse = await db.categorisedCourse.create({
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

    // update the articleKeyword table with the new keyword ids and the new article id
    await db.courseKeywords.createMany({
      data: keyWordIds.map((keyword) => ({
        keywordId: keyword,
        courseId: newCourse.id,
      })),
    });

    return {
      msg: "Course created successfully",
      success: true,
      courseId: newCourse.courseId,
    };
  } catch (err) {
    console.log(err);
    deleteFile(image);
    return { msg: "Error creating course", success: false };
  }
};

// update the course
export const updateCourse = async (
  data: addCoursesInterface,
  courseId: number
) => {
  const session = await getServerSession(authOptions);

  if (session?.user.role !== "tutor") {
    deleteFile(data.image);
    return { msg: "You are not authorized to update a course", success: false };
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
    tags,
  } = data;

  try {
    // add the course to the category
    const categoryExists = await db.category.findUnique({
      where: {
        id: +category,
      },
    });

    if (!categoryExists) {
      deleteFile(image);
      return { msg: "Category does not exist", success: false };
    }

    // add tags to the keywords table if they do not exist
    const newKeywords = await db.keywords.createManyAndReturn({
      data: tags.map((tag: string) => ({
        name: tag.toLowerCase(),
      })),
      skipDuplicates: true,
    });

    const keyWordIds = newKeywords.map((keyword) => keyword.id);

    // delete the old image if the image is updated
    const course = await db.course.findUnique({
      where: {
        id: courseId,
      },
    });
    if (course) {
      if (course.image !== image) {
        if (course?.image) deleteFile(course.image);
      }
    }

    // update the course
    await db.course.update({
      where: {
        id: courseId,
      },
      data: {
        name: title,
        description,
        price,
        level,
        requirements,
        objectives,
        image,
        verified: false,
      },
    });

    // update the courseKeywords table with the new keyword ids and the new article id
    await db.courseKeywords.createMany({
      data: keyWordIds.map((keyword) => ({
        keywordId: keyword,
        courseId,
      })),
    });

    return { msg: "Course updated successfully", success: true };
  } catch (err) {
    console.log(err);
    deleteFile(image);
    return { msg: "Error updating course", success: false };
  }
};

// add sections to the course
export const addSection = async (data: any) => {
  // destructuring the data
  const { name, courseId, description } = data;

  try {
    // add the section
    await db.courseSections.create({
      data: {
        name,
        description,
        courseId,
      },
    });

    return { msg: "Section created successfully", success: true };
  } catch (err) {
    console.log(err);
    return { msg: "Error creating section", success: false };
  }
};

// get all modules of the course by course id
export const getCourseModules = async (courseId: number) => {
  try {
    if (courseId === 0) return { msg: "Course not found", success: false };
    // get all the sections of the course
    const sections = await db.courseSections.findMany({
      where: {
        courseId,
      },
    });

    return { sections, success: true };
  } catch (err) {
    console.log(err);
    return { msg: "Error fetching sections", success: false };
  }
};

// get the length of the uploaded lesson
export const getLessonDuration = async (videoUrl: string) => {
  // get the duration of the video

  try {
    const response = await axios.get(videoUrl, { responseType: "stream" });
    const stream = new PassThrough();
    response.data.pipe(stream);
    const metadata: any = await new Promise((resolve, reject) => {
      ffmpeg(stream).ffprobe((err, metadata) => {
        if (err) {
          return reject(err);
        }
        resolve(metadata);
      });
    });
    return { duration: metadata.format.duration, success: true };
  } catch (err) {
    console.log(err);
    return { msg: "Error fetching video duration", success: false };
  }
};

// change state of module publication
export const changeModulePublication = async (
  moduleId: number,
  publication: boolean
) => {
  try {
    // update the publication status of the module
    await db.courseSections.update({
      where: {
        id: moduleId,
      },
      data: {
        published: publication,
      },
    });
    return { msg: "Module publication status changed", success: true };
  } catch (err) {
    return { msg: "Error changing module publication status", success: false };
  }
};

// add lessons to the section
export const addLesson = async (data: any, courseId: number) => {
  // destructuring the data
  const {
    name,
    courseSectionsId,
    videoUrl,
    description,
    courseType,
    isPreview,
    duration,
  } = data;
  const courseTypeEnum =
    courseType === "video" ? "VIDEO" : courseType === "text" ? "TEXT" : "AUDIO";

  try {
    // add the lesson
    await db.lesson.create({
      data: {
        name,
        courseSectionsId,
        videoUrl,
        description,
        type: courseTypeEnum,
        isPreview,
        duration,
      },
    });

    let durationUpdate = 0;
    if (duration === 0) durationUpdate = 60;
    else durationUpdate = duration;

    // update the total duration of the course
    await db.course.update({
      where: {
        id: courseId,
      },
      data: {
        duration: {
          increment: durationUpdate,
        },
      },
    });

    // update the total duration of the module
    await db.courseSections.update({
      where: {
        id: courseSectionsId,
      },
      data: {
        sectionDuration: {
          increment: durationUpdate,
        },
      },
    });

    return { msg: "Lesson created successfully", success: true };
  } catch (err) {
    console.log(err);
    return { msg: "Error creating lesson", success: false };
  }
};

// get all lessons of the module
export const getModuleLessons = async (moduleId: number) => {
  try {
    // get all lessons of the module
    const lessons = await db.lesson.findMany({
      where: {
        courseSectionsId: moduleId,
      },
    });

    return { lessons, success: true };
  } catch (err) {
    console.log(err);
    return { msg: "Error fetching lessons", success: false, lessons: [] };
  }
};

// get all courses of logged in tutor
export const getTutorCourses = async () => {
  const session = await getServerSession(authOptions);

  if (session?.user.role !== "tutor") {
    return { msg: "You are not authorized to view courses", success: false };
  }

  try {
    // get all courses of the tutor
    const courses = await db.course.findMany({
      where: {
        tutorId: +session?.user.id,
      },
    });

    return { courses, success: true };
  } catch (err) {
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
        category: true,
        keywords: {
          select: {
            keyword: {
              select: {
                name: true,
              },
            },
          },
        },
      },
    });

    return { course, success: true };
  } catch (err) {
    return { msg: "Error fetching course", success: false };
  }
};

// add an article by the tutor
export const addArticle = async (data: PostArticleInterface) => {
  // destructuring the data
  const { title, body, tags, image } = data;

  // get the session of the tutor
  const session = await getServerSession(authOptions);
  if (!session)
    return {
      msg: "You are not authorized to create an article",
      success: false,
    };
  if (session?.user?.role !== "tutor")
    return {
      msg: "You are not authorized to create an article",
      success: false,
    };

  try {
    // add tags to the keywords table if they do not exist
    const newKeywords = await db.keywords.createManyAndReturn({
      data: tags.map((tag) => ({
        name: tag.toLowerCase(),
      })),
      skipDuplicates: true,
    });

    const keyWordIds = newKeywords.map((keyword) => keyword.id);

    // add the article
    const newArticle = await db.article.create({
      data: {
        title,
        body,
        coverImage: image,
        authorId: +session?.user?.id,
      },
    });

    // update the articleKeyword table with the new keyword ids and the new article id
    await db.articleKeywords.createMany({
      data: keyWordIds.map((keyword) => ({
        keywordId: keyword,
        articleId: newArticle.id,
      })),
    });

    return { msg: "Article created successfully", success: true };
  } catch (err) {
    console.log(err);
    return { msg: "Error creating article", success: false };
  }
};

// get article by id
export const getArticleById = async (articleId: number) => {
  try {
    // get the article by id
    const article = await db.article.findUnique({
      where: {
        id: articleId,
      },
      include: {
        author: {
          select: {
            name: true,
            id: true,
            profilePicture: true,
          },
        },
      },
    });

    return { article, success: true };
  } catch (err) {
    return { msg: "Error fetching article", success: false };
  }
};

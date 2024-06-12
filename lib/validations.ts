import { z } from "zod";

export const tutorRegistrationSchema = z
  .object({
    idNumber: z.string().min(11).max(11),
    firstName: z.string().min(2),
    lastName: z.string().min(2),
    streetAddress: z.string().min(2),
    streetAddressOptional: z.string().optional(),
    pincode: z.string().min(6).max(6),
    city: z.string().min(2),
    country: z.string().min(2),
    teachDisabled: z.string().min(2),
    email: z.string().email(),
    password: z.string().min(6),
    cpassword: z.string().min(6),
  })
  .refine((data) => data.password === data.cpassword, {
    message: "Passwords do not match",
    path: ["cpassword"],
  });

export const addCourseSchema = z.object({
  title: z.string().min(3),
  description: z.string().min(5),
  category: z.string(),
  price: z.number().min(0),
  level: z.string().min(1),
  requirements: z.string().min(5),
  objectives: z.string().min(5),
});

export const moduleSchema = z.object({
  title: z.string().min(3).max(255),
  description: z.string().min(5).max(5000),
  publish: z.boolean().optional(),
});

export const LessonTitleSchema = z.object({
  title: z.string().min(3).max(255),
});

export const LessonDescriptionSchema = z.object({
  description: z.string().min(5).max(5000),
});

export const CategorySchema = z.object({
  name: z.string().min(3),
});

export const CourseFAQSchema = z.object({
  title: z.string().min(5).max(255),
  body: z.string().min(5),
});

export const ArticleSchema = z.object({
  title: z.string().min(5).max(255),
  body: z.string().min(5),
  tags: z
    .array(
      z
        .string()
        .min(1, { message: "Please select atleast one tag." })
        .max(15, { message: "Please select less than 15 tags." })
    )
    .min(1)
    .max(3, { message: "Please select atmost 3 tags." }),
});

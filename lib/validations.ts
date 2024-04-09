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
    teachDisabled: z.boolean(),
    email: z.string().email(),
    password: z.string().min(6),
    cpassword: z.string().min(6),
  })
  .refine((data) => data.password === data.cpassword, {
    message: "Passwords do not match",
    path: ["cpassword"],
  });

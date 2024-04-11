"use server";
import { mailService } from "@/lib/mailService";
import { db } from "@/lib/prisma";
import { addSuperAdminTypes } from "@/types/types";
import { hashSync } from "bcryptjs";

export const getAllSuperAdmins = async () => {
  const superAdmins = await db.superAdmin.findMany();

  return { superAdmins, success: true };
};

export const addSuperAdmin = async (params: addSuperAdminTypes) => {
  const { email, password, name, role } = params;

  // checking the role

  if (role === "super-admin") {
    // checking if the super admin already exists
    const superAdmin = await db.SuperAdmin.findUnique({
      where: {
        email,
      },
    });

    if (superAdmin) {
      return { msg: "Super admin already exists", success: false };
    }

    const hashedPassword = hashSync(password, 10);

    // creating a super admin
    const user = await db.superAdmin.create({
      data: { name, email, password: hashedPassword },
    });

    // creating an email
    const mailOptions = {
      from: "shubhut17@gmail.com",
      to: email,
      subject: "Welcome to the platform",
      text: `Hello ${name}, Welcome to the platform. You have been assigned the role of the super admin. You can now access the admin panel and manage the platform. Your login credentials are: Email: ${email}, Password: ${password}`,
    };

    // sending the email
    await mailService.sendMail(mailOptions);

    return { msg: "Super admin created successfully", success: true, user };
  } else {
    return { msg: "Invalid role", success: false };
  }
};

// validate the tutor
export const validateTutor = async (id: number, email: string) => {
  // find the tutor
  const tutor = await db.tutor.findUnique({
    where: {
      id,
    },
  });

  if (!tutor) {
    return { msg: "Tutor not found", success: false };
  }

  // update the tutor
  await db.tutor.update({
    where: {
      id,
    },
    data: {
      verified: true,
    },
  });

  // send a confirmation email
  const mailOptions = {
    from: "shubhut17@gmail.com",
    to: email,
    subject: "Your validation status",
    text: `Hello ${tutor.name}, Your account has been validated by the admins. You can now access the tutor panel and start publishing your courses.`,
  };

  // send the email
  await mailService.sendMail(mailOptions);

  return { msg: "Tutor validated successfully", success: true };
};

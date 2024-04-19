"use server";
import { mailService } from "@/lib/mailService";
import { db } from "@/lib/prisma";
import { addSuperAdminTypes } from "@/types/types";
import { hashSync } from "bcryptjs";

export const getAllSuperAdmins = async () => {
  const superAdmins = await db.superAdmin.findMany();

  return { superAdmins, success: true };
};

// get all admins
export const getAllAdmins = async () => {
  const admins = await db.admin.findMany();

  const adminData = admins.map((admin) => {
    return {
      id: admin.id,
      name: admin.name,
      email: admin.email,
      role: "admin",
      availability: admin.availability,
      createdAt: admin.createdAt,
    };
  });

  return { admins: adminData, success: true };
};

export const getAllMembers = async () => {
  const allMembers = [];

  try {
    const superAdmins = await db.superAdmin.findMany();
    const tutors = await db.tutor.findMany();
    const students = await db.user.findMany();
    const admins = await db.admin.findMany();

    const superAdminsInfo = superAdmins.map((superAdmin) => {
      return {
        id: superAdmin.id,
        name: superAdmin.name,
        email: superAdmin.email,
        role: "super-admin",
        availability: superAdmin.availability,
      };
    });

    const adminInfo = admins.map((admin) => {
      return {
        id: admin.id,
        name: admin.name,
        email: admin.email,
        role: "admin",
        availability: admin.availability,
      };
    });

    const tutorsInfo = tutors.map((tutor) => {
      return {
        id: tutor.id,
        name: tutor.name,
        email: tutor.email,
        role: "tutor",
        availability: tutor.availability,
        verified: tutor.verified,
      };
    });

    const studentsInfo = students.map((student) => {
      return {
        id: student.id,
        name: student.name,
        email: student.email,
        role: "student",
        grade: student.grade,
        availability: student.availability,
      };
    });

    allMembers.push(
      ...superAdminsInfo,
      ...adminInfo,
      ...tutorsInfo,
      ...studentsInfo
    );
    return { allMembers, success: true };
  } catch (err) {
    return { msg: "Error fetching members", success: false };
  }
};

// add a super admin or an admin
export const addSuperAdmin = async (params: addSuperAdminTypes) => {
  const { email, password, name, role } = params;

  // checking the role

  if (role === "super-admin") {
    // checking if the super admin already exists
    const superAdmin = await db.superAdmin.findUnique({
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
    const admin = await db.admin.findUnique({
      where: {
        email,
      },
    });

    if (admin) {
      return { msg: "Admin already exists", success: false };
    }

    const hashedPassword = hashSync(password, 10);

    // creating a super admin
    const user = await db.admin.create({
      data: { name, email, password: hashedPassword },
    });

    // creating an email
    const mailOptions = {
      from: "shubhut17@gmail.com",
      to: email,
      subject: "Welcome to the platform",
      text: `Hello ${name}, Welcome to the platform. You have been assigned the role of the admin. You can now access the admin panel and manage the platform. Your login credentials are: Email: ${email}, Password: ${password}`,
    };

    // sending the email
    await mailService.sendMail(mailOptions);

    return { msg: "Super admin created successfully", success: true, user };
  }
};

// delete admin
export const deleteAdmin = async (id: number) => {
  try {
    // check if the admin exists
    const admin = await db.admin.findUnique({
      where: {
        id,
      },
    });

    if (!admin) {
      return { msg: "Admin not found", success: false };
    }

    // delete the admin
    await db.admin.delete({
      where: {
        id,
      },
    });

    return { msg: "Admin deleted successfully", success: true };
  } catch (err) {
    return { msg: "An error occurred", success: false };
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

"use server";
import { mailService } from "@/lib/mailService";
import { db } from "@/lib/prisma";

interface SuperAdmin {
  email: string;
  password: string;
  name: string;
  role: string;
}

export const addSuperAdmin = async (params: SuperAdmin) => {
  const { email, password, name, role } = params;

  // checking the role

  if (role === "super-admin") {
    // checking if the super admin already exists
    console.log(db);
    const superAdmin = await db.SuperAdmin.findUnique({
      where: {
        email,
      },
    });

    if (superAdmin) {
      return { msg: "Super admin already exists", success: false };
    }

    // creating a super admin
    const user = await db.superAdmin.create({
      email,
      password,
      name,
    });

    // creating an email
    const mailOptions = {
      from: "shubhut17@gmail.com",
      to: email,
      subject: "Welcome to the platform",
      text: `Hello ${name}, Welcome to the platform. You have been assigned the role of the super admin. You can now access the admin panel and manage the platform. Your login credentials are: Email: ${email}, Password: ${password}`,
    };

    // sending the email
    const info = await mailService.sendMail(mailOptions);

    console.log(info);

    return { msg: "Super admin created successfully", success: true, user };
  } else {
    return { msg: "Invalid role", success: false };
  }
};

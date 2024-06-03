"use server";
import { db } from "@/lib/prisma";
import { compare, hash } from "bcryptjs";

// get user by id
export const getUserById = async (userId: any) => {
  return await db.user.findUnique({
    where: {
      id: parseInt(userId, 10),
    },
  });
};

// change user profile picture
export const changeProfilePicture = async (userId: any, picture: any) => {
  return await db.user.update({
    where: {
      id: parseInt(userId, 10),
    },
    data: {
      profilePicture: picture,
    },
  });
};

// change password
export const changePassword = async (
  userId: any,
  currentPassword: string,
  newPassword: string
) => {
  try {
    const user = await db.user.findUnique({
      where: { id: parseInt(userId, 10) },
    });

    if (!user) {
      throw new Error("User Not Found");
    }

    if (user?.password === null) {
      throw new Error("User Password is Null");
    }

    const isPasswordMatch = await compare(currentPassword, user.password);

    if (!isPasswordMatch) {
      throw new Error("Current Password is Incorrect");
    }

    const hashedNewPassword = await hash(newPassword, 10);

    const updatedUser = await db.user.update({
      where: { id: parseInt(userId, 10) },
      data: { password: hashedNewPassword },
    });

    return updatedUser;
  } catch (error) {
    console.error("Failed to Change Password :", error);
    throw new Error("Failed to Change Password");
  }
};

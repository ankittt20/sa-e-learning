import { db } from "@/lib/prisma";
import { NextResponse } from "next/server";
import { hash } from "bcryptjs";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, password, gender, category } = body;

    const existingUser = await db.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      return NextResponse.json(
        { user: null, error: "User already exists" },
        { status: 409 }
      );
    }

    const hashedPassword = await hash(password, 10);

    let newUser;

    // if category is student then create a student

    if (category === "student") {
      newUser = await db.user.create({
        data: {
          name,
          email,
          password: hashedPassword,
          gender,
          category,
        },
      });
    }
    if (category === "tutor") {
      newUser = await db.tutor.create({
        data: {
          name,
          email,
          password: hashedPassword,
        },
      });
    }

    const { password: newUserPassword, ...rest } = newUser || {};

    return NextResponse.json(
      {
        user: rest,
        message: "User created successfully",
      },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        message: "Something Went Wrong!",
      },
      { status: 500 }
    );
  }
}

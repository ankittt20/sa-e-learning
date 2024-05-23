import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { FaStar } from "react-icons/fa";

const CourseCards = (course: any) => {
  return (
    <Card className="flex max-w-[268px] cursor-pointer flex-col justify-start rounded-[10px] border border-solid border-[#fff] bg-primary-100 p-3 drop-shadow-2xl transition-all duration-300 hover:drop-shadow-md">
      <Image
        src={course?.image}
        width={500}
        height={500}
        alt="Course"
        className="h-auto w-full"
      />
      <CardHeader className="flex flex-row items-center justify-between px-0">
        <Badge className="flex gap-2 rounded-none border-0 bg-accent-secondary px-2">
          <Image
            src="/assets/icons/circle.svg"
            alt="circle"
            width={11}
            height={11}
          />
          <span className="text-[10px] font-medium uppercase sm:text-sm">
            {course?.level}
          </span>
        </Badge>
        <div className="flex items-center justify-center gap-2">
          <FaStar className="text-[#ffaa48]" />
          <span className="text-sm font-medium sm:text-lg">
            {course?.rating}
          </span>
        </div>
      </CardHeader>
      <CardContent className="px-0">
        <CardTitle className="text-xs font-bold capitalize sm:text-base">
          {course?.name}
        </CardTitle>
        <CardDescription className="mt-3 text-[10px] sm:text-xs">
          {course.description}
        </CardDescription>
      </CardContent>
      <CardFooter className=" border-t border-[#000] px-0">
        <div className="mt-3 flex w-full items-center justify-between">
          <p className="text-sm font-medium">$ {course?.price}</p>
          <p className="text-sm font-bold">
            514
            <span className="opacity-50"> Students</span>
          </p>
        </div>
      </CardFooter>
    </Card>
  );
};

export default CourseCards;

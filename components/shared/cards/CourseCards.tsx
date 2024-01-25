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

const CourseCards = () => {
  return (
    <Card className="flex max-w-[268px] flex-col justify-start rounded-[10px] border border-solid border-[#fff] bg-primary-100 p-3 drop-shadow-2xl">
      <Image
        src="/assets/images/course.png"
        width={260}
        height={201}
        alt="Course"
      />
      <CardHeader className="flex flex-row items-center gap-12 px-0">
        <Badge className="flex gap-2 rounded-none border-0 bg-accent-secondary px-2">
          <Image
            src="/assets/icons/circle.svg"
            alt="circle"
            width={11}
            height={11}
          />
          <span className="text-[10px] font-medium uppercase sm:text-sm">
            Programming
          </span>
        </Badge>
        <div className="flex items-center justify-center gap-2">
          <Image
            src="/assets/icons/star.svg"
            alt="stars"
            width={22}
            height={22}
          />
          <span className="text-sm font-medium sm:text-lg">4.7</span>
        </div>
      </CardHeader>
      <CardContent className="px-0">
        <CardTitle className="text-xs font-bold sm:text-base">
          Intro to Basics of java language
        </CardTitle>
        <CardDescription className="mt-3 text-[10px] font-bold sm:text-xs">
          CH 1
        </CardDescription>
      </CardContent>
      <CardFooter className=" border-t border-[#000] px-0">
        <div className="mt-3 flex w-full items-center justify-between">
          <p className="text-sm font-medium">$23</p>
          <p className="text-sm font-bold">
            514
            <span className="opacity-50"> students</span>
          </p>
        </div>
      </CardFooter>
    </Card>
  );
};

export default CourseCards;

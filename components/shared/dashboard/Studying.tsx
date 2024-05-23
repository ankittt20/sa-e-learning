import React from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Image from "next/image";
import { Progress } from "@/components/ui/progress";
import TopicAndMore from "../TopicAndMore";
import { getUserCourses } from "@/actions/user.actions";
import Link from "next/link";

type Props = {
  userId: string;
};

const Studying = async ({ userId }: Props) => {
  const courses = await getUserCourses(+userId);

  return (
    <>
      <div className="font-poppins max-sm:mt-5">
        <TopicAndMore
          heading="Studying"
          styles="text-lg font-semibold"
          linkStyle="text-xs font-semibold"
          linkContent="See all"
        />
        <div className="mt-5 flex flex-wrap items-center justify-center gap-4">
          {courses.userCourses.map((course) => (
            <Link href={`/student/${course.course.id}`} key={course.id}>
              <Card
                className="h-72 w-64 cursor-pointer border-none bg-primary-100"
                key={course.id}
              >
                <CardHeader className="p-0">
                  <Image
                    className="h-36 w-full rounded-t-lg object-contain"
                    src={
                      course.course.image ||
                      "/assets/images/dashboard-courses-image.png"
                    }
                    alt="course image"
                    width={100}
                    height={100}
                  />
                </CardHeader>
                <CardContent className="space-y-2 p-3">
                  <p className="text-[10px] font-medium text-accent-blue">
                    {course.course.category[0].category.name}
                  </p>
                  <h1 className="text-sm font-semibold">
                    {course.course.name}
                  </h1>
                  <div className="flex items-center space-x-2">
                    <Image
                      src="/assets/icons/bookmark.svg"
                      alt="Bookmark"
                      width={8}
                      height={11}
                    />
                    <p className="text-[10px] text-[#838383]">
                      9/12 Lessons Completed
                    </p>
                  </div>
                  <Progress className="" value={75} />
                  <p className="text-xs text-[#838383]">
                    {course.course.tutor.name}
                  </p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Studying;

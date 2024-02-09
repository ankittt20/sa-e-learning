import React from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Image from "next/image";
import { Progress } from "@/components/ui/progress";
import TopicAndMore from "../TopicAndMore";

type Props = {};

const Studying = (props: Props) => {
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
          <Card className="h-72 w-64 border-none bg-primary-100">
            <CardHeader className="p-0">
              <Image
                className="w-64"
                src="/assets/images/dashboard-courses-image.png"
                alt="placeholder"
                width={256}
                height={140}
              />
            </CardHeader>
            <CardContent className="space-y-2 p-3">
              <p className="text-[10px] font-medium text-accent-blue">
                Graphic Design
              </p>
              <h1 className="text-sm font-semibold">
                Video Production Bootcamp: Videography
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
              <p className="text-xs text-[#838383]">Jerremy Mamika</p>
            </CardContent>
          </Card>
          <Card className="h-72 w-64 border-none bg-primary-100">
            <CardHeader className="p-0">
              <Image
                className="w-64"
                src="/assets/images/dashboard-courses-image.png"
                alt="placeholder"
                width={256}
                height={140}
              />
            </CardHeader>
            <CardContent className="space-y-2 p-3">
              <p className="text-[10px] font-medium text-accent-blue">
                Graphic Design
              </p>
              <h1 className="text-sm font-semibold">
                Video Production Bootcamp: Videography
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
              <p className="text-xs text-[#838383]">Jerremy Mamika</p>
            </CardContent>
          </Card>
          <Card className="h-72 w-64 border-none bg-primary-100">
            <CardHeader className="p-0">
              <Image
                className="w-64"
                src="/assets/images/dashboard-courses-image.png"
                alt="placeholder"
                width={256}
                height={140}
              />
            </CardHeader>
            <CardContent className="space-y-2 p-3">
              <p className="text-[10px] font-medium text-accent-blue">
                Graphic Design
              </p>
              <h1 className="text-sm font-semibold">
                Video Production Bootcamp: Videography
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
              <p className="text-xs text-[#838383]">Jerremy Mamika</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
};

export default Studying;

import React from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Image from "next/image";
import { Progress } from "@/components/ui/progress";

type Props = {};

const Studying = (props: Props) => {
  return (
    <>
      <div className="font-poppins">
        <div className="flex items-center justify-between">
          <h1 className="text-lg font-semibold">Studying</h1>
          <p className="text-xs font-semibold text-accent-blue underline cursor-pointer">
            See all
          </p>
        </div>
        <div className="grid grid-cols-3 gap-x-4">
          <Card className="w-64 h-72 border-none bg-primary-100">
            <CardHeader className="p-0">
              <Image
                className="w-64"
                src="/assets/images/dashboard-courses-image.png"
                alt="placeholder"
                width={256}
                height={140}
              />
            </CardHeader>
            <CardContent className="p-3 space-y-2">
              <p className="text-[10px] text-accent-blue font-medium">
                Graphic Design
              </p>
              <h1 className="text-sm font-semibold">
                Video Production Bootcamp: Videography
              </h1>
              <div className="flex space-x-2 items-center">
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
          <Card className="w-64 h-72 border-none bg-primary-100">
            <CardHeader className="p-0">
              <Image
                className="w-64"
                src="/assets/images/dashboard-courses-image.png"
                alt="placeholder"
                width={256}
                height={140}
              />
            </CardHeader>
            <CardContent className="p-3 space-y-2">
              <p className="text-[10px] text-accent-blue font-medium">
                Graphic Design
              </p>
              <h1 className="text-sm font-semibold">
                Video Production Bootcamp: Videography
              </h1>
              <div className="flex space-x-2 items-center">
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
          <Card className="w-64 h-72 border-none bg-primary-100">
            <CardHeader className="p-0">
              <Image
                className="w-64"
                src="/assets/images/dashboard-courses-image.png"
                alt="placeholder"
                width={256}
                height={140}
              />
            </CardHeader>
            <CardContent className="p-3 space-y-2">
              <p className="text-[10px] text-accent-blue font-medium">
                Graphic Design
              </p>
              <h1 className="text-sm font-semibold">
                Video Production Bootcamp: Videography
              </h1>
              <div className="flex space-x-2 items-center">
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

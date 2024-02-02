import Image from "next/image";
import React from "react";
import Info from "../info/Info";
import { Button } from "@/components/ui/button";

const CourseCardInfo = () => {
  return (
    <div className="relative max-w-[282px] rounded-xl bg-[#F3F1FC]">
      <div className="">
        <Image
          src="/assets/images/course.png"
          width={282}
          height={195}
          alt="course"
          className="rounded-t-xl"
        />
        <div>
          <h5 className="absolute left-[24px] top-[28px] text-[10px] font-bold uppercase text-primary-100">
            Programming
          </h5>
          <div className="absolute left-[233px] top-[12px] flex justify-between rounded-full bg-primary-100 p-3">
            <Image
              src="/assets/icons/star.svg"
              width={16}
              height={16}
              alt="play"
            />
          </div>
        </div>
        <div className="mt-3 px-4 pb-3">
          <p className="text-center text-lg text-[#333333]">
            System Administration and IT Infrastructure Services
          </p>
          <div className="mt-5 rounded-xl bg-[#fff] px-4 py-3">
            <div className="flex justify-between border-b border-[#EFDED5] pb-3">
              <Info
                text="42 Users"
                image="/assets/icons/user.svg"
                isImage={true}
                size={12}
                fontStyles="text-xs text-[#333333]"
              />
              <Info
                text="100 mins"
                image="/assets/icons/clock.svg"
                isImage={true}
                size={12}
                fontStyles="text-xs text-[#333333]"
              />
            </div>
            <div className="mt-3 flex items-center gap-3">
              <Image
                src="/assets/images/user.png"
                width={53.29}
                height={53.29}
                alt="User"
              />
              <div>
                <p className="text-[#333333]">Drivani Kumar </p>
                <p className="text-[10px] text-[rgba(51,51,51,0.5)]">
                  Programmer
                </p>
              </div>
            </div>
          </div>
          <div className="mb-10 mt-4 flex items-center justify-between">
            <div className="mt-3 w-[50px] rounded-lg bg-primary-100 px-4 py-1">
              <p>$19</p>
            </div>
            <Button className="rounded-lg bg-accent-blue">
              <p className="text-sm font-bold text-primary-100">Get Started</p>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseCardInfo;

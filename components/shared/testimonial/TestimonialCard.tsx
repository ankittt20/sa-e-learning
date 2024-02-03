import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";

type Props = {};

const TestimonialCard = (props: Props) => {
  return (
    <div className="mb-28">
      <Card className="border-[#D9D9D9]">
        <CardHeader className="flex flex-row space-x-5 items-center">
          <Image
            className="rounded-full w-14 h-14"
            src="/assets/icons/fahmi.svg"
            alt="fahmi"
            width={100}
            height={100}
          />
          <div className="text-left -space-y-1">
            <CardTitle className="text-lg font-medium">
              Fahmi Fadillah
            </CardTitle>
            <CardDescription className="text-[#728AE7] text-sm">
              @fahmifadli
            </CardDescription>
          </div>
        </CardHeader>
        <CardContent>
          <p className="font-inter italic text-sm text-[#9CA3AF] text-left">
            “The material is really cool! Btw, this is my first class for making
            mobile applications, I hope you can... cheers! Thank you
            Add-Ducation.”
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default TestimonialCard;

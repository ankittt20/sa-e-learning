import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

type Props = {};

const Instructor = (props: Props) => {
  return (
    <div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <div className="col-span-1 space-y-9 pt-[63px] pb-0 md:col-span-1">
          <h1 className="p-2 text-center font-inter text-lg font-bold sm:text-left sm:text-4xl">
            Ready to become an instructor
          </h1>
          <p className="p-2 text-center font-inter text-[16px] sm:text-left sm:text-2xl">
            Lorem ipsum dolor sit amet consectetur. Auctor suspendisse tempus
            vulputate fames. Donec donec nisi neque gravida id purus eu nisl
            urna. odio ultrices nisi egetmetus. Vulputate condimentum tincidunt
            quis maecenas nibh
          </p>
          <Image
            className="mx-auto sm:mx-0 w-32"
            src="/assets/icons/instructor-icon.svg"
            alt="Instructor Icons"
            width={32}
            height={32}
          />
          <p className="p-2 text-center font-inter text-[16px] sm:text-left sm:text-2xl">
            Lorem ipsum dolor sit amet consectetur. Auctor suspendisse tempus
            vulputate fames. Donec donec nisi neque gravida id purus eu nisl
            urna. odio ultrices nisi egetmetus. Vulputate condimentum tincidunt
            quis maecenas nibh
          </p>
          <div className="flex justify-center items-center sm:justify-start">
            <Button className="h-[56px] w-[266px] rounded-2xl bg-accent-blue p-[10px] sm:h-[71px] sm:w-[254px]">
              <p className="font-bold text-primary-100 sm:text-[20px]">
                Become an instructor
              </p>
            </Button>
          </div>
        </div>

        <div className="order-first col-span-1 flex justify-end md:order-none md:col-span-1">
          <Image
            className="w-full p-6 sm:p-8"
            src="/assets/images/instructor.png"
            alt="Become An Instructor"
            width={316}
            height={511}
          />
        </div>
      </div>
    </div>
  );
};

export default Instructor;

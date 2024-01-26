import { Button } from "@/components/ui/button";
import React from "react";

type Props = {};

const Instructor = (props: Props) => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="col-span-1 md:col-span-1 py-[63px] space-y-9">
          <h1 className="text-4xl font-inter font-bold p-2">
            Ready to become an instructor
          </h1>
          <p className="p-2 font-inter text-2xl">
            Lorem ipsum dolor sit amet consectetur. Auctor suspendisse tempus
            vulputate fames. Donec donec nisi neque gravida id purus eu nisl
            urna. odio ultrices nisi egetmetus. Vulputate condimentum tincidunt
            quis maecenas nibh
          </p>
          <img
            className="h-12 w-32"
            src="./assets/icons/instructor-icon.svg"
            alt="Instructor Icons"
          />
          <p className="p-2 font-inter text-2xl">
            Lorem ipsum dolor sit amet consectetur. Auctor suspendisse tempus
            vulputate fames. Donec donec nisi neque gravida id purus eu nisl
            urna. odio ultrices nisi egetmetus. Vulputate condimentum tincidunt
            quis maecenas nibh
          </p>
          <Button className="h-[56px] sm:h-[71px] w-[322px] sm:w-[254px] mx-auto rounded-2xl bg-accent-blue p-[10px]">
            <p className="font-bold text-primary-100 sm:text-[20px]">
              Become an instructor
            </p>
          </Button>
        </div>

        <div className="col-span-1 md:col-span-1 flex justify-end">
          <img
            src="./assets/images/instructor.png"
            alt="Become An Instructor"
            className="w-[316px] h-[511px] sm:w-[496px] sm:h-[800px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Instructor;

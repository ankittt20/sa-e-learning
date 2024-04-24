import Image from "next/image";
import React from "react";
import { FaStar } from "react-icons/fa";

const Card = () => {
  return (
    <div className="flex bg-[#FFF3F8] p-3 rounded-lg space-x-2 text-[10px]">
      <Image
        src="/assets/images/user.png"
        alt="Profile Image"
        width={50}
        height={50}
        className="h-10 w-10 rounded-full"
      />
      <div>
        <div className="flex justify-between mb-2">
          <div className="flex items-center space-x-2">
            <p className="font-semibold">Chakrika Joyanto</p>
            <div>
              <FaStar />
            </div>
          </div>
          <p className="text-[#33333380]">5 Jan, 2023</p>
        </div>
        <div>
          <p>
            "Apparently we had reached a great height in the atmosphere, for the
            sky was a dead black, and the stars had ceased to twinkle."
          </p>
        </div>
      </div>
    </div>
  );
};

type Props = {};

const Reviews = (props: Props) => {
  return (
    <div className="flex space-x-5">
        <Card />
        <Card />
    </div>
  );
};

export default Reviews;

import Image from "next/image";
import React from "react";

type Props = {
  image: string;
  title: string;
  description: string;
  duration: string;
  type: string;
};

const LessonCard = ({ image, title, description, duration, type }: Props) => {
  return (
    <div className="flex space-x-2 p-2">
      <Image src={image} alt="lesson" width={100} height={100} />
      <div className="flex flex-col justify-around text-xs">
        <div className="flex justify-between">
          <h6>{title}</h6>
          <p className="font-medium">{duration}</p>
        </div>
        <p className="opacity-50">{description}</p>
        <div className="flex justify-between">
          <p className="opacity-50">{type}</p>
          <p className="text-accent-blue">Edit Lesson</p>
        </div>
      </div>
    </div>
  );
};

export default LessonCard;

import React from "react";
import Image from "next/image";

interface Props {
  image: string;
  text: string;
  isImage: boolean;
  extraClasses?: string;
  size?: number;
}

const Info = ({ image, text, isImage, extraClasses, size }: Props) => {
  return (
    <div className={`flex items-center justify-start gap-2 ${extraClasses}`}>
      {" "}
      {isImage && <Image src={image} width={size} height={size} alt={text} />}
      <p className="">{text}</p>
    </div>
  );
};

export default Info;

import React from "react";
import Link from "next/link";
import Image from "next/image";

interface TopicAndMoreProps {
  heading: string;
}

const TopicAndMore = ({ heading }: TopicAndMoreProps) => {
  return (
    <div className="flex items-center justify-between">
      <h2 className="h2-bold">{heading}</h2>

      <Link
        href="/"
        className="header-nav flex items-center justify-center gap-7"
      >
        Browse More{" "}
        <Image
          src="/assets/icons/arrow-right.svg"
          alt="browse more"
          width={24}
          height={24}
        />
      </Link>
    </div>
  );
};

export default TopicAndMore;

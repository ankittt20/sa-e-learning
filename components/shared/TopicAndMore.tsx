import React from "react";
import Link from "next/link";
import Image from "next/image";

interface TopicAndMoreProps {
  heading: string;
  styles?: string;
  linkStyle?: string;
  linkContent?: string;
}

const TopicAndMore = ({
  heading,
  styles,
  linkStyle,
  linkContent,
}: TopicAndMoreProps) => {
  return (
    <div className="flex items-center justify-between text-center">
      <h2 className={styles || "h2-bold"}>{heading}</h2>

      <Link
        href="/"
        className={`header-nav flex items-center justify-center gap-7 ${linkStyle}`}
      >
        {linkContent || "Browse More"}{" "}
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

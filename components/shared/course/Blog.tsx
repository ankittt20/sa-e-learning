import Image from "next/image";
import { FaCalendar } from "react-icons/fa";
import React from "react";

interface BlogProps {
  title: string;
  category: string;
  author: string;
  date: string;
}

const Blog = ({ title, category, author, date }: BlogProps) => {
  return (
    <div>
      <div className="bg-[#F3F1FC]">
        <div className="h-[256px] rounded-t-lg bg-[url('/assets/images/blog.png')] bg-cover p-10">
          <p className="text-xs font-bold text-primary-100">{category}</p>
        </div>
        <div className="mt-4 p-6">
          <p className="text-2xl">{title}</p>
        </div>
        <div className="flex items-center justify-between p-6">
          <div className="flex items-center gap-2">
            <Image
              src="/assets/images/user.png"
              width={24}
              height={24}
              alt="author"
              className="rounded-full"
            />
            <p>{author}</p>
          </div>
          <div className="flex items-center gap-2">
            <FaCalendar
              size={20}
              color="#7D6DD8"
              className="h-[17px] w-[15px]"
            />
            <p>{date}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;

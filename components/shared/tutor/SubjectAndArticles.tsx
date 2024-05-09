import Image from "next/image";
import React from "react";
import { FaSearch } from "react-icons/fa";
import CUD from "../actions/CUD";

const Card = ({ subject, name }: { subject: string; name: string }) => {
  return (
    <div className="flex-between mt-3 rounded-lg bg-primary-100 p-3 drop-shadow sm:w-80">
      <div className="flex items-center gap-3">
        <Image
          src="/assets/images/user.png"
          alt="user"
          width={50}
          height={50}
          className="rounded-md"
        />
        <div>
          <p className="text-sm font-medium text-[#292638] uppercase">
            {subject}
          </p>
          <p className="text-xs text-[#7C7A84]">{name}</p>
        </div>
      </div>
      <CUD />
    </div>
  );
};

type Props = {};

const SubjectAndArticles = (props: Props) => {
  return (
    <div>
      <div className="flex justify-between items-center">
        <h1 className="text-lg font-semibold">Subject and Articles</h1>
        <div className="flex justify-center items-center bg-accent-blue text-primary-100 h-7 w-7 rounded-sm">
          <FaSearch />
        </div>
      </div>
      <div>
        <Card subject="IT SOLUTIONS" name="Deepak Bagwat" />
        <Card subject="CYBER SECURITY" name="Farhan Ali" />
        <Card subject="ARTIFICIAL INTELLIGENCE" name="Pinto Fernandise" />
      </div>
    </div>
  );
};

export default SubjectAndArticles;

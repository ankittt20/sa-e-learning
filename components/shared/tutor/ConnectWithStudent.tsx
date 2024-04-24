import React from "react";
import { FaKeyboard, FaVideo } from "react-icons/fa";

type Props = {};

const ConnectWithStudent = (props: Props) => {
  return (
    <div className="bg-[#2563EB] px-3 py-5 text-primary-100 rounded-xl space-y-3">
      <p className="text-xs font-semibold">
        Create Call and Video Conferencing
      </p>
      <h4 className="text-2xl font-poppins font-semibold">
        Connect with Students,
        <br />
        Teachers
      </h4>
      <div className="space-x-5 font-poppins">
        <button className="bg-primary-100 p-2 text-[#2563EB] text-sm font-semibold rounded-md">
          <FaVideo className="inline mr-2 h-4 w-4" />
          New Meeting
        </button>
        <button className="border p-2 text-sm font-semibold rounded-md">
          <FaKeyboard className="inline mr-2 h-4 w-4" />
          Enter a code or link
        </button>
        <button disabled className="text-sm disabled:opacity-45">
          Join
        </button>
      </div>
    </div>
  );
};

export default ConnectWithStudent;

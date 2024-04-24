import React from "react";
import { FaPlus } from "react-icons/fa";

type Props = {};

const UploadVideo = (props: Props) => {
  return (
    <div className="w-full">
      <div className="flex justify-between items-center">
        <h1 className="text-lg font-semibold">Upload Video</h1>
        <div className="flex justify-center items-center bg-accent-blue text-primary-100 h-7 w-7 rounded-sm">
          <FaPlus />
        </div>
      </div>
      <div className="space-y-2">
        <div className="flex space-x-2">
          <div>
            <label className="text-[8px] text-[#00000066]">TITLE</label>
            <input
              type="text"
              placeholder="Name"
              className="w-full p-2 border border-[#BBC8D4] rounded-sm focus:outline-none"
              required
            />
          </div>
          <div>
            <label className="text-[8px] text-[#00000066]">TEACHER</label>
            <input
              type="text"
              placeholder="Teacher Name"
              className="w-full p-2 border border-[#BBC8D4] rounded-sm focus:outline-none"
              required
            />
          </div>
        </div>
        <div className="flex space-x-2">
          <input
            type="file"
            placeholder="Upload and Drag Video"
            className="w-full p-2 border border-[#BBC8D4] rounded-sm focus:outline-none"
            required
          />
          <button className="bg-[#5A4FF3] text-primary-100 font-poppins rounded-sm py-2 w-full">
            Save
          </button>
        </div>
        <button className="bg-[#5A4FF3] text-primary-100 font-poppins rounded-sm py-2 w-full">
          Save
        </button>
      </div>
    </div>
  );
};

export default UploadVideo;

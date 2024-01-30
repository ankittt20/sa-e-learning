import React from "react";

type Props = {};

const page = (props: Props) => {
  return (
    <div className="grid grid-cols-10 h-screen overflow-hidden">
      <div className="col-span-4 bg-[#F8BC12]">
        <img
          className="relative top-24 left-24 w-[450px]"
          src="./assets/icons/login-icon.svg"
          alt="Login"
        />
      </div>
      <div className="col-span-6">
        <h3>Log In</h3>
      </div>
    </div>
  );
};

export default page;

import React from "react";

interface InfoProps {
  infoMsg: string;
}

const Info = ({ infoMsg }: InfoProps) => {
  return (
    <div className="flex items-center">
      <div className="size-3 rounded-full bg-accent-blue"></div>
      <p className="ml-2 text-sm font-medium">{infoMsg}</p>
    </div>
  );
};

export default Info;

import React from "react";

interface SideNavMenuProps {
  text: string;
  icon: React.ReactNode;
  isActive?: boolean;
}

const SideNavMenu = ({ text, icon, isActive }: SideNavMenuProps) => {
  return (
    <div
      className={`${
        isActive
          ? "bg-accent-blue text-[#fff]"
          : "bg-primary-100 text-[#888888]"
      } flex w-full justify-center gap-4 rounded-lg p-2 text-sm`}
    >
      {icon}
      {text}
    </div>
  );
};

export default SideNavMenu;

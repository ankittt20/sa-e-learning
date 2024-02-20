"use client";
import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface Props {
  label: string;
  forType: string;
  placeholder?: string;
  extraClass?: string;
  width?: string;
}

const Filter = ({ label, forType, placeholder, extraClass, width }: Props) => {
  const filterWidth = width || "w-[325px]";
  return (
    <div className="flex flex-col items-start justify-start">
      <p className="mb-3 text-[10px] font-bold uppercase sm:text-xs">{label}</p>
      <Select>
        <SelectTrigger
          className={`${extraClass} ${filterWidth} rounded-lg border-[#DADADA] bg-primary-100 text-[rgba(51,51,51,0.5)] focus:border-none sm:max-w-[325px]`}
        >
          <SelectValue placeholder={placeholder} className={`${extraClass}`} />
        </SelectTrigger>
        <SelectContent className="rounded-lg border-[#DADADA] bg-primary-100">
          <SelectItem value="light">Light</SelectItem>
          <SelectItem value="dark">Dark</SelectItem>
          <SelectItem value="system">System</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
};

export default Filter;

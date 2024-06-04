import React from "react";
import { Input } from "../../../ui/input";

interface Props {
  label: string;
  forType: string;
  placeholder?: string;
  onChangeHandler?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const FilterInput = ({
  label,
  forType,
  placeholder,
  onChangeHandler,
}: Props) => {
  return (
    <div className="flex flex-col items-start justify-start">
      <p className="mb-3 text-[10px] font-bold uppercase sm:text-xs">{label}</p>
      <Input
        className="w-[237px] rounded-lg border-[#DADADA] bg-primary-100 text-[rgba(51,51,51,0.5)] focus:border-none sm:max-w-[284px]"
        placeholder={placeholder}
        onChange={onChangeHandler}
      />
    </div>
  );
};

export default FilterInput;

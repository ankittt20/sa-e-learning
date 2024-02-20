import { TableCell } from "@/components/ui/table";
import React from "react";
import CUD from "../actions/CUD";
import { memberTableDataTypes, permissionsTableDataTypes } from "@/types/types";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";

interface Props {
  item: memberTableDataTypes | permissionsTableDataTypes;
  hideControls?: boolean;
}

const SelectComponent = () => {
  return (
    <Select>
      <SelectTrigger className="mx-auto rounded-lg border border-[#F2F2F2] px-4 py-[6px] sm:w-[125px]">
        <SelectValue
          className="text-xs text-[#888888]"
          placeholder="Permission"
        />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="admin">Admin</SelectItem>
        <SelectItem value="tutor">Tutor</SelectItem>
      </SelectContent>
    </Select>
  );
};

const TableValues = ({ item, hideControls }: Props) => {
  const keys = Object.keys(item);

  return (
    <>
      {keys.map((key) => {
        if (key === "id" || key === "Tag") return null;
        return (
          <TableCell
            key={key}
            className={`text-sm font-medium ${
              key === "availability"
                ? item[
                    key as keyof (
                      | memberTableDataTypes
                      | permissionsTableDataTypes
                    )
                  ] === "Available"
                  ? "text-[#7DC483]"
                  : "text-[#8181FF]"
                : "text-[#7C7A84]"
            } ${key === "decision" && "flex justify-center"} `}
          >
            {item[
              key as keyof (memberTableDataTypes | permissionsTableDataTypes)
            ] === "permission" ? (
              <SelectComponent />
            ) : item[
                key as keyof (memberTableDataTypes | permissionsTableDataTypes)
              ] === "decision" ? (
              <div className="flex gap-3">
                <Button className="flex gap-1 px-2 py-[6px]">
                  <span className="text-sm font-medium text-[#4DA33F]">
                    {" "}
                    Apply
                  </span>{" "}
                  <FaCheckCircle size={12} className="size-3 text-[#4DA33F]" />
                </Button>
                <Button className="flex gap-1 px-2 py-[6px]">
                  <span className="text-sm font-medium text-[#E48072]">
                    {" "}
                    Decline
                  </span>{" "}
                  <FaTimesCircle size={12} className="size-3 text-[#F44336]" />
                </Button>
              </div>
            ) : (
              item[
                key as keyof (memberTableDataTypes | permissionsTableDataTypes)
              ]
            )}
          </TableCell>
        );
      })}
      <TableCell className={`${hideControls && "hidden"}`}>
        <CUD />
      </TableCell>
    </>
  );
};

export default TableValues;

import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { memberTableDataTypes, permissionsTableDataTypes } from "@/types/types";
import TableValues from "./TableValues";

interface Props {
  labels: string[];
  data: memberTableDataTypes[] | permissionsTableDataTypes[];
  hideControls?: boolean;
}

const DataTable = ({ labels, data, hideControls }: Props) => {
  const showTags = labels.includes("Tags");

  return (
    <Table className="sm:w-[809px]">
      <TableHeader>
        <TableRow>
          {labels.map((label) => (
            <TableHead
              key={label}
              className={`${
                label === "Permission" || label === "Decision"
                  ? "text-center"
                  : "text-left"
              } text-sm font-medium text-[#7C7A84]`}
            >
              {label}
            </TableHead>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((item: memberTableDataTypes | permissionsTableDataTypes) => {
          return (
            <TableRow key={item.id}>
              {showTags && (
                <TableCell>
                  <div className={`size-[18px] rounded ${item.Tag}`}></div>
                </TableCell>
              )}
              <TableValues
                key={item.id}
                item={item}
                hideControls={hideControls}
              />
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
};

export default DataTable;

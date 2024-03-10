import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { discountTableDataTypes } from "@/types/types";
import { Button } from "@/components/ui/button";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";
import CUD from "../actions/CUD";

interface Props {
  labels: string[];
  data: discountTableDataTypes[];
  hideControls?: boolean;
}

const DiscountTable = ({ labels, data, hideControls }: Props) => {
  return (
    <Table className="sm:w-[809px]">
      <TableHeader>
        <TableRow>
          {labels.map((label) => (
            <TableHead
              key={label}
              className={`w-full text-center text-sm font-medium text-[#7C7A84]`}
            >
              {label}
            </TableHead>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell className="text-center">
            <span className="text-sm font-semibold text-[#292638]">
              Black Friday
            </span>
          </TableCell>
          <TableCell>
            <Select>
              <SelectTrigger className="mx-auto rounded-lg border border-[#F2F2F2] px-4 py-[6px] sm:w-[114px]">
                <SelectValue
                  className="text-xs text-[#888888]"
                  placeholder="Discount"
                />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="admin">Admin</SelectItem>
                <SelectItem value="tutor">Tutor</SelectItem>
              </SelectContent>
            </Select>
          </TableCell>
          <TableCell>
            <Button className="mx-auto border border-[#F2F2F2] px-3 py-[6px] sm:w-[114px]">
              <p className="text-sm text-[#888888]">FIF code</p>
            </Button>
          </TableCell>
          <TableCell>
            <Select>
              <SelectTrigger className="mx-auto rounded-lg border border-[#F2F2F2] px-4 py-[6px] sm:w-[114px]">
                <SelectValue
                  className="text-xs text-[#888888]"
                  placeholder="% off"
                />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="10">10%</SelectItem>
                <SelectItem value="20">20%</SelectItem>
              </SelectContent>
            </Select>
          </TableCell>
          <TableCell>
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
          </TableCell>
          <TableCell>
            <CUD />
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
};

export default DiscountTable;

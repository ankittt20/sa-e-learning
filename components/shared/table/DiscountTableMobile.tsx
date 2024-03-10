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

const DiscountTableMobile = () => {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="text-sm font-medium text-[#7C7A84]">
            Name
          </TableHead>
          <TableHead className="text-sm font-medium text-[#7C7A84]">
            Discount Purpose
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell>
            <span className="text-sm font-semibold text-[#292638]">
              Black Friday
            </span>
          </TableCell>
          <TableCell className="text-sm font-medium">
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
        </TableRow>
        <TableRow>
          <TableCell>
            <span className="text-sm font-semibold text-[#292638]">
              Black Friday
            </span>
          </TableCell>
          <TableCell className="text-sm font-medium">
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
        </TableRow>
      </TableBody>
    </Table>
  );
};

export default DiscountTableMobile;

import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const PermissionTableMobile = () => {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="text-sm font-medium text-[#7C7A84]">
            Tags
          </TableHead>
          <TableHead className="text-sm font-medium text-[#7C7A84]">
            Name
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell>
            <div className="size-[18px] rounded bg-accent-pink"></div>
          </TableCell>
          <TableCell className="text-sm font-medium">
            Parija faiza Freeza
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            <div className="size-[18px] rounded bg-[#8181FF]"></div>
          </TableCell>
          <TableCell className="text-sm font-medium">#292638</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
};

export default PermissionTableMobile;

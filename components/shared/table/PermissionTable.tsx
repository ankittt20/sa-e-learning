import { getAllSuperAdmins } from "@/actions/super-admin";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import React from "react";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";

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

const DecisionComponent = () => {
  return (
    <div className="flex gap-3">
      <Button className="flex gap-1 px-2 py-[6px]">
        <span className="text-sm font-medium text-[#4DA33F]"> Apply</span>{" "}
        <FaCheckCircle size={12} className="size-3 text-[#4DA33F]" />
      </Button>
      <Button className="flex gap-1 px-2 py-[6px]">
        <span className="text-sm font-medium text-[#E48072]"> Decline</span>{" "}
        <FaTimesCircle size={12} className="size-3 text-[#F44336]" />
      </Button>
    </div>
  );
};

const PermissionTable = async () => {
  const superAdmins = await getAllSuperAdmins();

  if (!superAdmins.success) {
    return <div>Failed to fetch data</div>;
  }

  return (
    <Table className="sm:w-[809px]">
      <TableHeader>
        <TableRow>
          <TableHead className="text-sm font-medium text-[#7C7A84]">
            Tags
          </TableHead>
          <TableHead className="text-sm font-medium text-[#7C7A84]">
            Name
          </TableHead>
          <TableHead className="text-sm font-medium text-[#7C7A84]">
            Role
          </TableHead>
          <TableHead className="text-center text-sm font-medium text-[#7C7A84]">
            Permission
          </TableHead>
          <TableHead className="text-center text-sm font-medium text-[#7C7A84]">
            Decision
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {superAdmins.superAdmins &&
          superAdmins.superAdmins.map((user: any) => {
            const tagColor =
              user.role === "admin" || user.role === "super-admin"
                ? "bg-[#FFAC0A]"
                : user.role === "tutor"
                ? "bg-accent-pink"
                : "bg-[#8181FF]";

            const availabilityColor =
              user.availability === "available"
                ? "text-[#7DC483]"
                : "text-[#8181FF]";

            return (
              <TableRow key={user.id}>
                <TableCell>
                  <div className={`size-[18px] rounded ${tagColor}`}></div>
                </TableCell>
                <TableCell className="text-sm font-medium">
                  {user.name}
                </TableCell>
                <TableCell className="text-sm font-medium text-[#7C7A84]">
                  Super Admin
                </TableCell>
                <TableCell className="text-sm font-medium text-[#7C7A84]">
                  <SelectComponent />
                </TableCell>
                <TableCell className={`${availabilityColor}`}>
                  <DecisionComponent />
                </TableCell>
              </TableRow>
            );
          })}
      </TableBody>
    </Table>
  );
};

export default PermissionTable;

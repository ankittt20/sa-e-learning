import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { allUsersInterface } from "@/types/types";
import { getAllMembers } from "@/actions/super-admin";
import CUD from "../actions/CUD";

interface Props {
  labels: string[];
  hideControls?: boolean;
  isMobile?: boolean;
  data?: any;
}

const DataTable = async ({ labels, hideControls, isMobile, data }: Props) => {
  const showTags = labels.includes("Tags");

  const allUsers = await getAllMembers();
  if (!allUsers.success) {
    <div>Failed to fetch data</div>;
  }

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
        {allUsers.allMembers &&
          allUsers.allMembers.map((user: allUsersInterface) => {
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
                {showTags && (
                  <TableCell>
                    <div className={`size-[18px] rounded ${tagColor}`}></div>
                  </TableCell>
                )}
                <TableCell className="text-sm font-medium">
                  {user.name}
                </TableCell>
                <TableCell className="text-sm font-medium text-[#7C7A84]">
                  {user?.role?.toUpperCase()}
                </TableCell>
                <TableCell className="text-sm font-medium text-[#7C7A84]">
                  {user.grade && `Grade ${user?.grade}`}
                </TableCell>
                <TableCell className={`${availabilityColor}`}>
                  {user?.availability}
                </TableCell>
                <TableCell
                  className={`${hideControls && "hidden"} ${
                    isMobile && "hidden"
                  }`}
                >
                  <CUD />
                </TableCell>
              </TableRow>
            );
          })}
      </TableBody>
    </Table>
  );
};

export default DataTable;

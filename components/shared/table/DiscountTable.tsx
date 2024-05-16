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
import { Button } from "@/components/ui/button";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";
import CUD from "../actions/CUD";
import { getDiscountCodes } from "@/actions/generalAdmin.actions";

interface Props {
  labels: string[];
}

const DiscountTable = async ({ labels }: Props) => {
  const discountData = await getDiscountCodes();

  if (!discountData.success) return <div>Error fetching discounts</div>;

  if (discountData.discountCodes?.length === 0)
    return <div>No discount codes available</div>;

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
        {discountData.discountCodes &&
          discountData.discountCodes.map((discount) => {
            return (
              <TableRow key={discount.id}>
                <TableCell className="text-center">
                  <span className="text-sm font-semibold text-[#292638]">
                    {discount.code}
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
                    <p className="text-sm text-[#888888]">{discount.code}</p>
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
                      <FaCheckCircle
                        size={12}
                        className="size-3 text-[#4DA33F]"
                      />
                    </Button>
                    <Button className="flex gap-1 px-2 py-[6px]">
                      <span className="text-sm font-medium text-[#E48072]">
                        {" "}
                        Decline
                      </span>{" "}
                      <FaTimesCircle
                        size={12}
                        className="size-3 text-[#F44336]"
                      />
                    </Button>
                  </div>
                </TableCell>
                <TableCell>
                  <CUD selectedItemId={0} />
                </TableCell>
              </TableRow>
            );
          })}
      </TableBody>
    </Table>
  );
};

export default DiscountTable;

import { Button } from "@/components/ui/button";
import Image from "next/image";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { FaChevronDown } from "react-icons/fa";

const Card = () => {
  return (
    <div className="flex justify-between items-center">
      <div className="flex items-center space-x-2">
        <Image
          src="/assets/images/user.png"
          alt="user"
          width={50}
          height={50}
          className="rounded-md"
        />
        <div>
          <h6 className="text-xs uppercase font-medium">CONVENT SCHOOL</h6>
          <p className="text-[#7C7A84] text-[10px]">Location - Lalpur</p>
        </div>
      </div>
      <div>
        <DropdownMenu>
          <DropdownMenuTrigger className="text-[#888888] text-xs outline-none border border-[#F2F2F2] rounded-md py-1 px-2">
            Students Count <FaChevronDown className="inline ml-1" />
          </DropdownMenuTrigger>
          <DropdownMenuContent className="bg-primary-100">
            <DropdownMenuLabel>Students Count</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Billing</DropdownMenuItem>
            <DropdownMenuItem>Team</DropdownMenuItem>
            <DropdownMenuItem>Subscription</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div>
        <DropdownMenu>
          <DropdownMenuTrigger className="text-[#888888] text-xs outline-none border border-[#F2F2F2] rounded-md py-1 px-2">
            Rooms <FaChevronDown className="inline ml-1" />
          </DropdownMenuTrigger>
          <DropdownMenuContent className="bg-primary-100">
            <DropdownMenuLabel>Rooms</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Billing</DropdownMenuItem>
            <DropdownMenuItem>Team</DropdownMenuItem>
            <DropdownMenuItem>Subscription</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <Button className="btn font-semibold">Book Room</Button>
    </div>
  );
};

type Props = {};

const SchoolRoomBooking = (props: Props) => {
  return (
    <div className="space-y-2">
      <h1 className="text-lg font-semibold">School Room Booking</h1>
      <div className="space-y-3 shadow-md p-3 rounded-md">
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default SchoolRoomBooking;

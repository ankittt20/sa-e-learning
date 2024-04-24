import Image from "next/image";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { FaChevronDown, FaEnvelope } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { FaBookOpenReader, FaLocationDot, FaPersonChalkboard } from "react-icons/fa6";

type Props = {};

const About = (props: Props) => {
  return (
    <div>
      <div className="bg-[url(/assets/images/courseDetail.png)] relative rounded-lg w-full h-52">
        <div className="absolute bottom-5 right-5 flex space-x-5 text-primary-100">
          <div>
            <p>20,160</p>
            <p className="text-xs">Follower</p>
          </div>
          <div>
            <p>20,160</p>
            <p className="text-xs">Follower</p>
          </div>
        </div>
        <Image
          src="/assets/images/user.png"
          alt="user"
          width={50}
          height={50}
          className="absolute -bottom-10 left-10 h-24 w-24 rounded-full border-4 border-primary-100"
        />
      </div>

      <div className="ml-36 mt-5">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-5">
            <h1 className="text-xl text-[#202226] font-semibold">
              Leslie Alexander
            </h1>
            <div>
              <DropdownMenu>
                <DropdownMenuTrigger className="text-[#888888] text-xs outline-none border border-[#F2F2F2] rounded-md py-1 px-2">
                  Available <FaChevronDown className="inline ml-1" />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="bg-primary-100">
                  <DropdownMenuLabel>Available</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>Profile</DropdownMenuItem>
                  <DropdownMenuItem>Billing</DropdownMenuItem>
                  <DropdownMenuItem>Team</DropdownMenuItem>
                  <DropdownMenuItem>Subscription</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <p className="text-[#838383] text-sm">UI/UX Designer, 500 km Away</p>
          <div className="flex space-x-2 items-center">
            <p className="text-xs">Availablility</p>
            <div>
              <DropdownMenu>
                <DropdownMenuTrigger className="text-[#888888] text-xs outline-none border border-[#F2F2F2] rounded-md py-1 px-2">
                  Time Zone <FaChevronDown className="inline ml-1" />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="bg-primary-100">
                  <DropdownMenuLabel>Time Zone</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>Profile</DropdownMenuItem>
                  <DropdownMenuItem>Billing</DropdownMenuItem>
                  <DropdownMenuItem>Team</DropdownMenuItem>
                  <DropdownMenuItem>Subscription</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-10 space-y-5 text-sm">
        <h1 className="text-2xl text-[#F762A2] font-semibold">About Us</h1>
        <p>
          Lorem ipsum dolor sit amet as aasss sectetur Ullamcorper arcu in asd
          scelerisque fusce gravida tellus. arcu in asd scelerisque fusce
          gravida tellus.
        </p>
        <div className="flex space-x-2 items-center">
          <FaBookOpenReader className="opacity-40" />
          <p>SUX Designer</p>
        </div>
        <div className="flex space-x-2 items-center">
          <FaEnvelope className="opacity-40" />
          <p>lesilealex674@gmail.com</p>
        </div>
        <div className="flex space-x-2 items-center">
          <FaPersonChalkboard size={20} className="opacity-40" />
          <p>Studed at MC College Canada</p>
        </div>
        <div className="flex space-x-2 items-center">
          <FaLocationDot className="opacity-40" />
          <p>South Africa</p>
        </div>
        <div>
          <RadioGroup className="flex text-xs" defaultValue="false">
            <label>Speciallity Able Students</label>
            <div className="flex">
              <RadioGroupItem value="true" className="mr-2" id="yes" />
              <label className="mr-5" htmlFor="yes">
                Yes
              </label>
              <RadioGroupItem value="false" className="mr-2" id="no" />
              <label className="mr-5" htmlFor="no">
                No
              </label>
            </div>
          </RadioGroup>
        </div>
      </div>

      <div className="mt-10 space-y-3">
        <Textarea
          placeholder="What you are thinking........."
          className="border-[#888888]"
        />
        <Button className="btn text-sm">Post</Button>
      </div>
    </div>
  );
};

export default About;

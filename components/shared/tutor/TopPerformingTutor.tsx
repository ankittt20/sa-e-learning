import Image from "next/image";
import { FaArrowRight, FaStar } from "react-icons/fa";

type Props = {};

const Card = () => {
  return (
    <div className="flex justify-between items-center border border-[#EDEDED] rounded-xl p-3 font-poppins">
      <Image
        src="/assets/images/user.png"
        alt="Tutor Image"
        width={50}
        height={50}
      />
      <div>
        <h1 className="text-xs font-semibold">Ronald Richards</h1>
        <p className="text-[10px] text-[#838383]">Biology Professor</p>
      </div>
      <div className="flex space-x-1 items-center border border-[#EDEDED] py-1 px-3 rounded-full">
        <FaStar className="text-[#365EFF] h-3 w-3" />
        <p className="text-[10px] text-[#365EFF]">4.2/5</p>
      </div>
    </div>
  );
};

const TopPerformingTutor = (props: Props) => {
  return (
    <div>
      <div className="flex items-center space-x-5">
        <h1 className="text-[15px] font-medium">Top Performing Tutor</h1>
        <FaArrowRight className="text-xs font-semibold" />
      </div>
      <div className="space-y-3">
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default TopPerformingTutor;

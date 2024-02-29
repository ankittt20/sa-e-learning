import React from "react";
import CUD from "../actions/CUD";

type Props = {
  offer: string;
  created: string;
};

const OffersCard = ({ offer, created }: Props) => {
  return (
    <div className="flex-between mt-3 rounded-lg bg-primary-100 p-3 drop-shadow sm:w-80">
      <div className="flex items-center gap-3">
        <div>
          <p className="text-sm font-medium text-[#292638]">{offer}</p>
          <p className="text-xs text-[#7C7A84]">{created}</p>
        </div>
      </div>
      <CUD />
    </div>
  );
};

export default OffersCard;

import React from "react";
import { FaSearch } from "react-icons/fa";
import OffersCard from "./OffersCard";

type Props = {};

const ManageOffers = (props: Props) => {
  return (
    <div>
      <div className="flex justify-between items-center">
        <h1 className="text-lg font-semibold">Manage Offers & Discounts</h1>
        <div className="flex justify-center items-center bg-accent-blue text-primary-100 h-7 w-7 rounded-sm">
          <FaSearch />
        </div>
      </div>
      <div>
        <OffersCard offer="HAPPY40" created="Created On - 06 Feb 2024" />
        <OffersCard offer="HAPPY40" created="Created On - 06 Feb 2024" />
        <OffersCard offer="HAPPY40" created="Created On - 06 Feb 2024" />
      </div>
    </div>
  );
};

export default ManageOffers;

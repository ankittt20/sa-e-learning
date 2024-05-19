"use client";
import React, { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import OffersCard from "./OffersCard";
import { getDiscounts } from "@/actions/admin.actions";
import { format } from "date-fns";

type Props = {};

const ManageOffers = (props: Props) => {
  const [discounts, setDiscounts] = useState<any>();

  useEffect(() => {
    const fetchDiscounts = async () => {
      const res = await getDiscounts();
      setDiscounts(res.discounts);
    };
    fetchDiscounts();
  }, []);
  return (
    <div>
      <div className="flex justify-between items-center">
        <h1 className="text-lg font-semibold">Manage Offers & Discounts</h1>
        <div className="flex justify-center items-center bg-accent-blue text-primary-100 h-7 w-7 rounded-sm">
          <FaSearch />
        </div>
      </div>
      <div>
        {discounts &&
          discounts.map((discount: any) => (
            <OffersCard
              key={discount.id}
              offer={discount?.name}
              expiry={format(new Date(discount?.expiryDate), "dd MMM yyyy")}
            />
          ))}
      </div>
    </div>
  );
};

export default ManageOffers;

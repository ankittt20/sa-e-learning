"use client";
import React, { useEffect, useState } from "react";
import OffersCard from "./OffersCard";
import { getDiscounts } from "@/actions/admin.actions";
import { format } from "date-fns";
import AddDiscount from "./AddDiscount";
import { Skeleton } from "@/components/ui/skeleton";

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
    <div className="w-1/2">
      <div className="flex justify-between items-center">
        <h1 className="text-lg font-semibold">Manage Offers & Discounts</h1>
        <AddDiscount />
      </div>
      <div className="max-h-60 pb-2 overflow-y-scroll no-scrollbar">
        {discounts &&
          discounts.map((discount: any) => (
            <OffersCard
              key={discount.id}
              id={discount.id}
              offer={discount?.code}
              expiry={format(new Date(discount?.expiryDate), "dd MMM yyyy")}
            />
          ))}
        {!discounts && (
          <div className="mt-4 space-y-2">
            <Skeleton className="w-full h-12 rounded-md bg-dark-100/5" />
            <Skeleton className="w-full h-12 rounded-md bg-dark-100/5" />
            <Skeleton className="w-full h-12 rounded-md bg-dark-100/5" />
          </div>
        )}
      </div>
    </div>
  );
};

export default ManageOffers;

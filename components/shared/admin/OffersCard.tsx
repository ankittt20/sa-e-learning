import React, { useState } from "react";
import CUD from "../actions/CUD";
import { deleteOffer } from "@/actions/admin.actions";

type Props = {
  id: number;
  offer: string;
  expiry: string;
};

const OffersCard = ({ offer, expiry, id }: Props) => {
  return (
    <div className="flex-between mt-3 rounded-lg bg-primary-100 p-3 drop-shadow sm:w-80">
      <div className="flex items-center gap-3">
        <div>
          <p className="text-sm font-medium text-[#292638] uppercase">
            {offer}
          </p>
          <p className="text-xs text-[#7C7A84]">Expiry - {expiry}</p>
        </div>
      </div>
      <CUD
        selectedItemId={0}
        notVisible={true}
        handleDeleteClick={() => deleteOffer(id)}
      />
    </div>
  );
};

export default OffersCard;

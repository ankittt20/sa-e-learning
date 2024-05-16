import Image from "next/image";
import React from "react";
import CUD from "../actions/CUD";

type Props = {
  certificate: string;
  qualification: string;
};

const CertificatesCard = ({ certificate, qualification }: Props) => {
  return (
    <div className="flex-between mt-3 rounded-lg bg-primary-100 p-3 drop-shadow sm:w-80">
      <div className="flex items-center gap-3">
        <Image
          src="/assets/images/user.png"
          alt="user"
          width={50}
          height={50}
          className="rounded-md"
        />
        <div>
          <p className="text-xs font-medium text-[#292638]">{certificate}</p>
          <p className="text-xs text-[#7C7A84]">{qualification}</p>
        </div>
      </div>
      <CUD selectedItemId={0} />
    </div>
  );
};

export default CertificatesCard;

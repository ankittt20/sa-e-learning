"use client";
import React, { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import CertificatesCard from "./CertificatesCard";
import { getCertificates } from "@/actions/admin.actions";

type Props = {};

const ManageCertificates = (props: Props) => {
  const [certificates, setCertificates] = useState<any>();

  useEffect(() => {
    const fetchCertificates = async () => {
      const res = await getCertificates();
      setCertificates(res.certificates);
    };
    fetchCertificates();
  }, []);

  return (
    <div>
      <div className="flex justify-between items-center">
        <h1 className="text-lg font-semibold">Manage Certificates</h1>
        <div className="flex justify-center items-center bg-accent-blue text-primary-100 h-7 w-7 rounded-sm">
          <FaSearch />
        </div>
      </div>
      <div>
        {certificates &&
          certificates.map((certificate: any) => {
            return (
              <CertificatesCard
                certificate={certificate?.certificateName}
                key={certificate.id}
                qualification={certificate?.qualification}
              />
            );
          })}
      </div>
    </div>
  );
};

export default ManageCertificates;

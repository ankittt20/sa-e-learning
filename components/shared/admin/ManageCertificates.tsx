"use client";
import React, { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import CertificatesCard from "./CertificatesCard";
import { getCertificates } from "@/actions/admin.actions";
import { Skeleton } from "@/components/ui/skeleton";

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
    <div className="w-1/2">
      <div className="flex justify-between items-center">
        <h1 className="text-lg font-semibold">Manage Certificates</h1>
        <div className="flex justify-center items-center bg-accent-blue text-primary-100 h-7 w-7 rounded-sm">
          <FaSearch />
        </div>
      </div>
      <div className="max-h-60 pb-2 overflow-y-scroll no-scrollbar">
        {certificates ? (
          certificates.map((certificate: any) => {
            return (
              <CertificatesCard
                certificate={certificate?.certificateName}
                key={certificate.id}
                qualification={certificate?.qualification}
              />
            );
          })
        ) : (
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

export default ManageCertificates;

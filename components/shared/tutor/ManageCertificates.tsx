import React from "react";
import { FaSearch } from "react-icons/fa";
import CertificatesCard from "./CertificatesCard";

type Props = {};

const ManageCertificates = (props: Props) => {
  return (
    <div>
      <div className="flex justify-between items-center">
        <h1 className="text-lg font-semibold">Manage Certificates</h1>
        <div className="flex justify-center items-center bg-accent-blue text-primary-100 h-7 w-7 rounded-sm">
          <FaSearch />
        </div>
      </div>
      <div>
        <CertificatesCard
          certificate="IT Solutions Certificate"
          qualification="B.Tech, MBA"
        />
        <CertificatesCard certificate="Python Basic" qualification="PhD" />
        <CertificatesCard
          certificate="JavaScript - Intermediate"
          qualification="B.Tech, M.Tech"
        />
      </div>
    </div>
  );
};

export default ManageCertificates;

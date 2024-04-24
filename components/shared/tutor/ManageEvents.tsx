import { Divide } from "lucide-react";
import React from "react";
import CUD from "../actions/CUD";

const Card = () => {
  return (
    <div className="flex space-x-6">
      <div className="flex gap-16 text-xs font-medium text-[#292638]">
        <p className="uppercase">QUIZ GAME</p>
        <p className="text-[#7c7a84]">For Revision</p>
        <p className="text-[#7c7a84]">Programming</p>
        <p>8th Feb 2024</p>
      </div>
      <CUD />
    </div>
  );
};

type Props = {};

const ManageEvents = (props: Props) => {
  return (
    <div>
      <h1 className="text-lg font-semibold">Manage Events</h1>
      <div></div>
      <div className="space-y-3 shadow-md p-3 rounded-md">
        <div className="flex gap-16 text-xs font-medium text-[#7C7A84]">
          <p>Event Name</p>
          <p>Purpose</p>
          <p className="mx-6">Category</p>
          <p>Date</p>
        </div>
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default ManageEvents;

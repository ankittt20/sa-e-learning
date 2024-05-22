"use client";
import React, { useEffect, useState } from "react";
import { getSessions } from "@/actions/admin.actions";
import { format } from "date-fns";

type Props = {};

const SessionCard = (props: { session?: any }) => {
  const { session } = props;
  return (
    <div className="flex-between mt-3 rounded-lg bg-primary-100 p-3 drop-shadow">
      <div className="w-1/4">
        <p className="text-sm font-medium text-[#292638]">{session?.name}</p>
      </div>
      <div>
        <p className="text-sm font-medium text-[#292638]">Session Time</p>
        <p className="text-xs text-[#7C7A84]">{format(new Date(session?.startTime), "hh:m")} - {format(new Date(session?.endTime), "hh:m")}</p>
      </div>
      <div>
        <p className="text-sm font-medium text-[#292638]">Session Date</p>
        <p className="text-xs text-[#7C7A84] capitalize">
          {format(new Date(session?.startTime), "dd MMM yyyy")}
        </p>
      </div>
    </div>
  );
};

const ManageSessions = (props: Props) => {
  const [sessions, setSessions] = useState<any>();

  useEffect(() => {
    const fetchSessions = async () => {
      const res = await getSessions();
      setSessions(res?.sessions);
    };
    fetchSessions();
  }, []);

  return (
    <div className="space-y-2">
      <h1 className="text-lg font-semibold">Manage Sessions</h1>
      <div className="max-h-60 pb-2 overflow-y-scroll no-scrollbar">
        {sessions?.map((session: any) => (
          <SessionCard key={session.id} session={session} />
        ))}
      </div>
    </div>
  );
};

export default ManageSessions;

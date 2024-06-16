"use client";
import { SessionProvider } from "next-auth/react";
import React, { ReactNode } from "react";

const NewsLetterWrapper = ({ children }: { children: ReactNode }) => {
  return (
    <SessionProvider>
      <div>{children}</div>
    </SessionProvider>
  );
};

export default NewsLetterWrapper;

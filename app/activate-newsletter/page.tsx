"use client";
import React, { useEffect, useCallback, useState } from "react";
import { useSearchParams } from "next/navigation";
import { verifyUserForNewsletter } from "@/actions/user.actions";

type Props = {};

const page = (props: Props) => {
  // get the email of the user from the url
  const params = useSearchParams();
  const email = params.get("email");
  const token = params.get("token");

  // state to see if the email is verified or not
  const [isVerified, setIsVerified] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // check if the email and the link are valid or not
  const verifyEmail = useCallback(async () => {
    if (!email || !token) {
      alert("Invalid link");
      return;
    }
    const res = await verifyUserForNewsletter(email, token);

    if (res.success) {
      setIsVerified(true);
    } else if (res.success === false) {
      setIsVerified(false);
    }
    setIsLoading(false);
  }, [email, token]);

  // fire the verifyEmail on page load
  useEffect(() => {
    verifyEmail();
  }, [verifyEmail]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {isVerified
        ? "You have been successfully subscribed to the newsletter"
        : "Invalid link. Please try again."}
    </div>
  );
};

export default page;

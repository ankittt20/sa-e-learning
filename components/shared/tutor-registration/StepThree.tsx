"use client";
import React, { useState } from "react";
import { addTutor } from "@/actions/tutor.actions";
import { Button } from "@/components/ui/button";
import TutorProfile from "./TutorProfile";

const StepThree = ({
  onPrevStep,
  data,
}: {
  onPrevStep: () => void;
  data: any;
}) => {
  const [loading, setLoading] = useState(false);

  const submitTutor = async () => {
    setLoading(true);
    let address = "";
    if (data.streetAddressOptional !== "") {
      address = data.streetAddress + ", " + data.streetAddressOptional;
    } else {
      address = data.streetAddress;
    }

    const formData = {
      name: data.firstName + data.lastName,
      idNumber: data.idNumber,
      address:
        address + ", " + data.city + ", " + data.pincode + ", " + data.country,
      forDisabled: data.teachDisabled,
      profilePicture: data.profile_image,
      email: data.email,
      password: data.password,
      cpassword: data.cpassword,
    };

    try {
      const res = await addTutor(formData);
      if (res.success === true) {
        alert(res.msg);
      } else {
        alert(res.msg);
      }
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div className="space-y-5">
        <div>
          <TutorProfile data={data} />
        </div>
        <div className="flex justify-between">
          <Button
            className="rounded-3xl bg-accent-blue px-8 text-sm font-bold text-primary-100"
            disabled={loading}
            onClick={submitTutor}
          >
            Submit
          </Button>
          <Button className="rounded-3xl bg-accent-blue px-8 text-sm font-bold text-primary-100">
            <a href="/">Home Page</a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default StepThree;

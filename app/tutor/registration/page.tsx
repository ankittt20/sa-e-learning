"use client";
import React, { useState } from "react";
import StepOne from "@/components/shared/tutor-registration/StepOne";
import StepTwo from "@/components/shared/tutor-registration/StepTwo";
import StepThree from "@/components/shared/tutor-registration/StepThree";

type Props = {};

const page = (props: Props) => {
  const [step, setStep] = useState(1);

  const handleNextStep = () => {
    setStep(step + 1);
  };

  const handlePrevStep = () => {
    setStep(step - 1);
  };
  return (
    <div className="p-7 pb-14 space-y-5">
      <h3 className="text-xl font-bold">
        <a href="/">SAelearning</a>
      </h3>
      <div className="flex">
        <div className="bg-[#E2DFF6] rounded-l-2xl py-10 px-24 space-y-20">
          <h3 className="text-2xl font-bold">Registration</h3>
          <div className="flex space-x-5">
            <div className="flex flex-col justify-center items-center">
              <p
                className={`${
                  step === 1 ? "bg-primary-100" : "bg-[#96D9C9]"
                } flex justify-center items-center h-8 w-8 rounded-full p-1`}
              >
                {step === 1 ? "1" : "✓"}
              </p>
              <div
                className={`h-20 w-[2px] ${
                  step === 1 ? "bg-dark-100" : "bg-[#96D9C9]"
                }`}
              />
              <p
                className={`${
                  step === 3 ? "bg-[#96D9C9]" : "bg-primary-100"
                } flex justify-center items-center h-8 w-8 rounded-full p-1`}
              >
                {step === 3 ? "✓" : "2"}
              </p>
              <div
                className={`h-20 w-[2px] ${
                  step === 1 ? "bg-dark-100" : "bg-[#96D9C9]"
                }`}
              />
              <p
                className={`${
                  step === 3 ? "bg-[#96D9C9]" : "bg-primary-100"
                } flex justify-center items-center h-8 w-8 rounded-full p-1`}
              >
                3
              </p>
            </div>
            <div className="space-y-20">
              <p className="pt-1">Personal Details</p>
              <p className="pt-2">Upload profile pic Certificate</p>
              <p className="pt-2">Finished</p>
            </div>
          </div>
        </div>
        <div className="bg-[#F8F8FD] flex-1 rounded-r-2xl p-10">
          {step === 1 && <StepOne onNextStep={handleNextStep} />}
          {step === 2 && (
            <StepTwo onNextStep={handleNextStep} onPrevStep={handlePrevStep} />
          )}
          {step === 3 && <StepThree onPrevStep={handlePrevStep} />}
        </div>
      </div>
    </div>
  );
};

export default page;

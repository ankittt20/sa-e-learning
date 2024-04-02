import { Button } from "@/components/ui/button";
import React from "react";

const StepOne = ({ onNextStep }: { onNextStep: () => void }) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onNextStep();
  };

  return (
    <div>
      <form className="space-y-5" onSubmit={handleSubmit}>
        <div>
          <label className="block font-semibold">YOUR ID NUMBER</label>
          <input
            className="bg-primary-100 p-2 border-2 border-[#BBC8D4] rounded focus:outline-none mt-2"
            type="text"
            name="id_number"
            placeholder="XXXXXXXXXXX"
          />
          <p className="text-xs mt-2">This should be 11 digits long.</p>
        </div>

        <div>
          <label className="block font-semibold">Full Name</label>
          <input
            className="bg-primary-100 p-2 border-2 border-[#BBC8D4] rounded w-2/5 focus:outline-none mt-2 mr-5"
            type="text"
            name="first_name"
            placeholder="First Name"
          />
          <input
            className="bg-primary-100 p-2 border-2 border-[#BBC8D4] rounded w-2/5 focus:outline-none mt-2"
            type="text"
            name="last_name"
            placeholder="Last Name"
          />
        </div>

        <div>
          <label className="block font-semibold">
            YOUR RESIDENTIAL ADDRESS
          </label>
          <div>
            <input
              className="bg-primary-100 p-2 border-2 border-[#BBC8D4] rounded w-2/5 focus:outline-none mt-2 mr-5"
              type="text"
              name="street_address"
              placeholder="Street Address"
            />
            <input
              className="bg-primary-100 p-2 border-2 border-[#BBC8D4] rounded w-2/5 focus:outline-none mt-2"
              type="text"
              name="street_address_optional"
              placeholder="Street Address (optional)"
            />
          </div>
          <div className="mt-2">
            <input
              className="bg-primary-100 p-2 border-2 border-[#BBC8D4] rounded focus:outline-none mt-2 mr-4"
              type="text"
              name="pincode"
              placeholder="Pincode"
            />
            <input
              className="bg-primary-100 p-2 border-2 border-[#BBC8D4] rounded focus:outline-none mt-2 mr-4"
              type="text"
              name="city"
              placeholder="City"
            />
            <input
              className="bg-primary-100 p-2 border-2 border-[#BBC8D4] rounded focus:outline-none mt-2"
              type="text"
              name="country"
              placeholder="Country"
            />
          </div>
        </div>

        <div>
          <label className="font-semibold">Able to teach Disabled ?</label>
          <div className="flex">
            <input
              className="mr-2"
              type="radio"
              id="yes"
              name="teach_disabled"
              value="yes"
            />
            <label className="mr-5">Yes</label>
            <input
              className="mr-2"
              type="radio"
              id="no"
              name="teach_disabled"
              value="no"
            />
            <label>No</label>
          </div>
        </div>

        <Button
          className="bg-accent-blue text-primary-100 px-8 text-sm font-bold rounded-3xl"
          type="submit"
        >
          Next
        </Button>
      </form>
    </div>
  );
};

export default StepOne;

// components/StepTwo.js
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React, { useState } from "react";

const StepTwo = ({
  onNextStep,
  onPrevStep,
}: {
  onNextStep: () => void;
  onPrevStep: () => void;
}) => {
  const [previewImage, setPreviewImage] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert("Submitted");
    onNextStep();
  };

  const handlePrev = () => {
    onPrevStep();
  };

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result as string); // Cast reader.result to string
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label className="block font-semibold mb-5">SELECT YOUR PHOTO</label>
          {previewImage && (
            <Image
              src={previewImage}
              alt="Preview"
              width={320}
              height={320}
              className="max-w-xs max-h-xs my-2"
            />
          )}
          <input
            className="mb-5"
            type="file"
            accept="image/*"
            name="profile_image"
            onChange={handleImageChange}
          />
        </div>

        <div className="flex justify-between">
          <Button
            className="bg-accent-blue text-primary-100 px-8 text-sm font-bold rounded-3xl"
            onClick={handlePrev}
          >
            Previous
          </Button>
          <Button
            className="bg-accent-blue text-primary-100 px-8 text-sm font-bold rounded-3xl"
            type="submit"
          >
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
};

export default StepTwo;

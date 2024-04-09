// components/StepTwo.js
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React, { useState } from "react";

const StepTwo = ({
  onNextStep,
  onPrevStep,
  updateFormData,
}: {
  onNextStep: () => void;
  onPrevStep: () => void;
  updateFormData: (key: string, value: string) => void;
}) => {
  const [previewImage, setPreviewImage] = useState<string | null>(null);
  const [filePath, setFilePath] = useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    updateFormData("profile_image", filePath);
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
      setFilePath(file.name);
      reader.readAsDataURL(file);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label className="mb-5 block font-semibold">SELECT YOUR PHOTO</label>
          {previewImage && (
            <Image
              src={previewImage}
              alt="Preview"
              width={320}
              height={320}
              className="my-2 max-w-xs"
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
            className="rounded-3xl bg-accent-blue px-8 text-sm font-bold text-primary-100"
            onClick={handlePrev}
          >
            Previous
          </Button>
          <Button
            className="rounded-3xl bg-accent-blue px-8 text-sm font-bold text-primary-100"
            type="submit"
          >
            Next
          </Button>
        </div>
      </form>
    </div>
  );
};

export default StepTwo;

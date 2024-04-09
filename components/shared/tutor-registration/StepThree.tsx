import { Button } from "@/components/ui/button";
import React from "react";

const StepThree = ({ onPrevStep }: { onPrevStep: () => void }) => {

  return (
    <div>
      <div>
        <div></div>
        <div className="flex justify-between">
          <Button className="bg-accent-blue text-primary-100 px-8 text-sm font-bold rounded-3xl">
            Finished
          </Button>
          <Button className="bg-accent-blue text-primary-100 px-8 text-sm font-bold rounded-3xl">
            <a href="/">Home Page</a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default StepThree;

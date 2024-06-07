import { Button } from "@/components/ui/button";
import React from "react";

interface AddFaqQuestionProps {
  handleCreateQuestion: () => void;
}

const AddFaqQuestion = ({ handleCreateQuestion }: AddFaqQuestionProps) => {
  return (
    <div>
      <div>
        <Button
          className="mt-4 border border-accent-blue p-3 font-semibold text-accent-blue"
          onClick={handleCreateQuestion}
        >
          Ask A Question
        </Button>
      </div>
    </div>
  );
};

export default AddFaqQuestion;

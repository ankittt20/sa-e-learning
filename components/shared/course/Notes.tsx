import { Input } from "@/components/ui/input";
import React from "react";
import Filter from "../forms/filters/Filter";

const Notes = () => {
  return (
    <div className="mt-6">
      <Input
        placeholder="Create a new note at 0:00"
        className="rounded-none border border-[#000000] px-2 py-5"
      />
      <div className="mt-4 flex flex-wrap gap-5">
        <Filter
          label=""
          placeholder="Create a new note at 0:00"
          forType="new note"
          extraClass="text-bold text-dark-100"
        />
        <Filter
          label=""
          placeholder="Sort by recommended"
          forType="sort by"
          extraClass="text-bold"
        />
      </div>
      <p className="my-12 text-center text-[20px] max-sm:text-sm">
        Click the “Create a new note” box, the “+” button, or press “B” to make
        your first note.
      </p>
    </div>
  );
};

export default Notes;

"use client";
import React, { useState } from "react";
import ModuleForm from "./ModuleForm";
import ListModules from "./ListModules";
import { useSearchParams } from "next/navigation";

type Props = {
  handleModuleSelect: (id: number) => void;
  selectedModule: number;
};

const AddModule = ({ handleModuleSelect, selectedModule }: Props) => {
  const searchParams = useSearchParams();
  const courseId = searchParams.get("course-id");
  const [showModuleForm, setShowModuleForm] = useState(false);
  // set if module is being edited
  const [editModule, setEditModule] = useState(false);

  const toggleModuleForm = () => {
    setShowModuleForm(!showModuleForm);
  };

  return (
    <div className="space-y-2">
      <div className="flex justify-between">
        <h3 className="text-xl font-semibold">Add Course Modules</h3>
        <p
          className="cursor-pointer text-xs text-accent-blue"
          onClick={toggleModuleForm}
        >
          {!showModuleForm ? "New Module" : "Cancel"}
        </p>
      </div>
      {showModuleForm && (
        <ModuleForm
          courseId={courseId}
          isModuleEditing={editModule}
          moduleId={editModule ? selectedModule : undefined}
        />
      )}
      <ListModules
        courseId={courseId}
        selectModule={handleModuleSelect}
        selectedModule={selectedModule}
        editModule={() => {
          setShowModuleForm(true);
          setEditModule(true);
        }}
      />
    </div>
  );
};

export default AddModule;

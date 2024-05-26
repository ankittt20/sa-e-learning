"use client";
import {
  changeModulePublication,
  getCourseModules,
} from "@/actions/tutor.actions";
import { Button } from "@/components/ui/button";
import { getCourseModulesInterface } from "@/types/types";
import React, { useState, useEffect } from "react";

interface ListModulesProps {
  courseId: string | null;
  selectModule: (id: number) => void;
  selectedModule: number;
}

const ListModules = ({
  courseId,
  selectModule,
  selectedModule,
}: ListModulesProps) => {
  const [modules, setModules] = useState<
    getCourseModulesInterface[] | undefined
  >();

  const [modulePublication, setModulePublication] = useState("");

  if (courseId === null) courseId = "0";

  useEffect(() => {
    const fetchModules = async () => {
      const res = await getCourseModules(+courseId);
      if (res.success) setModules(res.sections);
      else alert(res.msg);
    };
    fetchModules();
  }, [courseId]);

  const togglePublish = (e: React.FormEvent<HTMLInputElement>) => {
    setModulePublication(e.currentTarget.value);
  };

  const handleSubmit = async (moduleId: number, e: React.FormEvent) => {
    e.preventDefault();
    let publicationValue = false;
    if (modulePublication === "publish") publicationValue = true;
    const res = await changeModulePublication(moduleId, publicationValue);
    if (res.success) {
      alert(res.msg);
      window.location.reload();
    } else alert(res.msg);
  };

  const setModule = (moduleId: number, e: React.MouseEvent<HTMLDivElement>) => {
    selectModule(moduleId);
  };

  return (
    <>
      {modules?.map((module, idx) => {
        const bgColor = module.id === selectedModule ? "bg-accent-blue/20" : "";

        return (
          <div key={module.id} className="border-b py-2">
            <div
              className={`cursor-pointer space-y-2 rounded-lg ${bgColor} px-5 py-3`}
              onClick={setModule.bind(null, module.id)}
            >
              <h1 className="text-sm font-medium">
                {idx + 1}. {module.name}(
                {module.published ? "Published" : "Draft"})
              </h1>
              <p className="text-xs font-medium opacity-50">
                {module.description}
              </p>
            </div>
            <form onSubmit={handleSubmit.bind(null, module.id)}>
              <div className="flex space-x-2 space-y-2">
                <input
                  type="radio"
                  id="publish"
                  name="save_as"
                  value="publish"
                  onChange={togglePublish}
                />
                <label htmlFor="publish">
                  <h6>Publish this Module</h6>
                  <p className="text-xs opacity-50">
                    This will make it public to everyone with access to course
                  </p>
                </label>
              </div>
              <div className="mt-5 space-x-2">
                <input
                  type="radio"
                  id="draft"
                  name="save_as"
                  value="draft"
                  onChange={togglePublish}
                />
                <label htmlFor="draft">Save Module as Draft</label>
              </div>
              <Button className="mt-5 bg-accent-blue text-[#fff]" type="submit">
                Save
              </Button>
            </form>
          </div>
        );
      })}
    </>
  );
};

export default ListModules;

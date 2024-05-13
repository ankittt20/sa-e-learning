"use client";
import { getModuleLessons } from "@/actions/tutor.actions";
import { getModuleLessonsInterface } from "@/types/types";
import React, { useState, useEffect } from "react";
import LessonCard from "./LessonCard";

interface props {
  moduleId: number;
}

const ModuleLessons = ({ moduleId }: props) => {
  const [lessons, setLessons] = useState<
    getModuleLessonsInterface[] | undefined
  >();

  useEffect(() => {
    // fetch module lessons
    const fetchModuleLessons = async () => {
      const res = await getModuleLessons(moduleId);
      if (res.success) {
        setLessons(res.lessons);
      }
      if (!res.success) alert(res.msg);
    };
    fetchModuleLessons();
  }, [moduleId]);

  if (lessons?.length === 0)
    return (
      <div>
        <h3>No lessons found</h3>
      </div>
    );

  return (
    <div>
      {lessons?.map((lesson) => (
        <LessonCard
          key={lesson.id}
          image="/assets/images/course-preview.png"
          title={lesson.name ?? ""}
          description={lesson.description ?? ""}
          duration="12:02"
          type={lesson.type}
        />
      ))}
    </div>
  );
};

export default ModuleLessons;

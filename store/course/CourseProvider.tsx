import React, { useState } from "react";
import { CourseContext } from "./CourseContext";

const CourseProvider = ({
  children,
}: {
  readonly children: React.ReactNode;
}) => {
  const [selectedCourseLessonId, setSelectedCourseLessonId] = useState(0);

  const toggleSelectedCourseLesson = (id: number) => {
    setSelectedCourseLessonId(id);
  };

  const courseProvider = {
    selectedCourseLessonId,
    toggleSelectedCourseLesson,
  };

  return (
    <CourseContext.Provider value={courseProvider}>
      {children}
    </CourseContext.Provider>
  );
};

export default CourseProvider;

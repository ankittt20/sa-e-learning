import React, { useState } from "react";
import { CourseContext } from "./CourseContext";

const CourseProvider = ({
  children,
}: {
  readonly children: React.ReactNode;
}) => {
  const [selectedCourseLessonId, setSelectedCourseLessonId] = useState(0);
  const [selectedCourse, setSelectedCourse] = useState<any>({});

  const toggleSelectedCourseLesson = (id: number) => {
    setSelectedCourseLessonId(id);
  };

  const toggleSelectedCourse = (course: any) => {
    setSelectedCourse(course);
  };

  const courseProvider = {
    selectedCourseLessonId,
    toggleSelectedCourseLesson,
    selectedCourse,
    toggleSelectedCourse,
  };

  return (
    <CourseContext.Provider value={courseProvider}>
      {children}
    </CourseContext.Provider>
  );
};

export default CourseProvider;

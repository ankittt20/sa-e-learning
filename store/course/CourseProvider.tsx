import React, { useEffect, useState } from "react";
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
    window.localStorage.setItem("selectedCourseLessonId", id.toString());
  };

  const toggleSelectedCourse = (course: any) => {
    setSelectedCourse(course);
    window.localStorage.setItem("selectedCourse", JSON.stringify(course));
  };

  // fetch the selected course lesson id from local storage on page reload
  useEffect(() => {
    const selectedCourseLessonId = window.localStorage.getItem(
      "selectedCourseLessonId"
    );
    if (selectedCourseLessonId) {
      setSelectedCourseLessonId(+selectedCourseLessonId);
    }

    const selectedCourse = window.localStorage.getItem("selectedCourse");
    if (selectedCourse) {
      setSelectedCourse(JSON.parse(selectedCourse));
    }
  }, []);

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

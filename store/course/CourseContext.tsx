import { createContext } from "react";

export const CourseContext = createContext({
  selectedCourseLessonId: 0,
  toggleSelectedCourseLesson: (id: number) => {},
  selectedCourse: {},
  toggleSelectedCourse: (course: any) => {},
});

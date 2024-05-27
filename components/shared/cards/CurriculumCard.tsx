"use client";
import React, { useState, useCallback, useEffect, useContext } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { getModuleLessons } from "@/actions/tutor.actions";
import LessonCard from "./LessonCard";
import CurrentVideo from "../course/CurrentVideo";
import { CourseContext } from "@/store/course/CourseContext";

interface CurriculumCardProps {
  title: string;
  duration: string;
  id: number;
  count: number;
}

const CurriculumCard = ({
  title,
  duration,
  id,
  count,
}: CurriculumCardProps) => {
  const [lessons, setLessons] = useState<any[]>([]);

  const { selectedCourseLessonId } = useContext(CourseContext);

  // fetch all lessons of the module
  const fetchModuleLessons = useCallback(async (moduleId: number) => {
    try {
      // get all lessons of the module
      const lessons = await getModuleLessons(moduleId);
      if (lessons.success) setLessons(lessons.lessons);
    } catch (err) {
      console.log(err);
      alert("Error fetching lessons");
    }
  }, []);

  useEffect(() => {
    fetchModuleLessons(id);
  }, [id, fetchModuleLessons]);

  return (
    <Accordion type="multiple">
      <AccordionItem value={title}>
        <AccordionTrigger className="mb-3 w-[200px] items-center rounded bg-[#FEF1F0] p-4 text-xs sm:w-fit sm:text-lg">
          <div className="flex cursor-pointer">
            <div className="flex items-center gap-5">
              <span>{count}.</span>
              <p className="line-clamp-1 text-[20px] text-[#33333]">{title}</p>
              <span className="text-[rgba(51,51,51,0.5)] max-sm:text-xs">
                {duration}
              </span>
            </div>
          </div>
        </AccordionTrigger>
        <AccordionContent>
          {lessons.length > 0 ? (
            lessons.map((lesson, idx) => {
              if (selectedCourseLessonId === lesson.id) {
                return (
                  <CurrentVideo
                    title={lesson.name}
                    description={lesson?.description || ""}
                    duration="04:32"
                    number={idx + 1}
                    extraClasses="bg-active border-b-[5px] border-accent-blue"
                    key={lesson.id}
                    id={lesson.id}
                    type={lesson.type}
                    lesson={lesson}
                  />
                );
              } else {
                return (
                  <div key={lesson.id} className="flex items-center gap-5">
                    <LessonCard
                      name={lesson.name}
                      type={lesson.type}
                      duration={lesson.duration}
                      isPreview={lesson.isPreview}
                      id={lesson.id}
                      lesson={lesson}
                    />
                  </div>
                );
              }
            })
          ) : (
            <p className="ml-1">No lessons found</p>
          )}
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default CurriculumCard;

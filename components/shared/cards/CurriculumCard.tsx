"use client";
import React, { useState, useCallback, useEffect } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { getModuleLessons } from "@/actions/tutor.actions";
import LessonCard from "./LessonCard";

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
        <AccordionTrigger className="mb-3 w-fit items-center rounded bg-[#FEF1F0] p-4">
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
            lessons.map((lesson) => (
              <div key={lesson.id} className="flex items-center gap-5">
                <LessonCard
                  name={lesson.name}
                  type={lesson.type}
                  duration={lesson.duration}
                />
              </div>
            ))
          ) : (
            <p className="ml-1">No lessons found</p>
          )}
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default CurriculumCard;

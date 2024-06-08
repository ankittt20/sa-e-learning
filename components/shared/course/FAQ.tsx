"use client";
import { Input } from "@/components/ui/input";
import React, { useState, useEffect, useCallback } from "react";
import Filter from "../forms/filters/Filter";
import CourseQuestionCard from "./CourseQuestionCard";
import { Button } from "@/components/ui/button";
import AddFaqQuestion from "./AddFaqQuestion";
import CreateQuestionForm from "./CreateQuestionForm";
import { getCourseFAQs } from "@/actions/course.action";

interface FAQProps {
  courseId: number;
}

const FAQ = ({ courseId }: FAQProps) => {
  const [createQuestion, setCreateQuestion] = useState(false);
  const [questions, setQuestions] = useState<any>([]);

  // function to toggle create question form
  const handleCreateQuestion = () => {
    setCreateQuestion(!createQuestion);
  };

  // funtion to get all the questions related to the course
  const getQuestions = useCallback(async () => {
    // fetch all the questions related to the course
    const res = await getCourseFAQs(courseId);
    if (res.success) {
      setQuestions(res.faqs);
    }
  }, [courseId]);

  console.log(questions);

  useEffect(() => {
    getQuestions();
  }, [getQuestions]);

  return createQuestion ? (
    <CreateQuestionForm
      courseId={courseId}
      handleCreateQuestion={handleCreateQuestion}
    />
  ) : (
    <div>
      <Input
        placeholder="Search all course questions"
        className="border border-[#C0BABA]"
      />
      <div className="flex-between mt-4 flex-wrap gap-5">
        <Filter
          label="Filters:"
          placeholder="All lectures"
          forType="all lectures"
        />
        <Filter
          label="Sort by:"
          placeholder="Sort by recommended"
          forType="sort by"
        />
        <Filter
          label="Filter Questions:"
          placeholder="Filter questions"
          forType="filter questions"
        />
      </div>
      <div className="mt-6">
        <div className="flex gap-3">
          <h6 className="text-bold max-sm:text-lg max-sm:font-bold">
            All questions in this course
          </h6>
          <span className="text-bold text-[rgba(0,0,0,0.5)] max-sm:text-lg max-sm:font-bold">
            (21001)
          </span>
        </div>
        <div className="mt-4">
          {questions.map((question: any) => (
            <CourseQuestionCard key={question.id} question={question} />
          ))}
          <Button className="mt-12 w-[90%] bg-accent-blue py-6 text-lg font-semibold text-primary-100 hover:bg-[rgb(125,109,190)]">
            See More
          </Button>
          <AddFaqQuestion handleCreateQuestion={handleCreateQuestion} />
        </div>
      </div>
    </div>
  );
};

export default FAQ;

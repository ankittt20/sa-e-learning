"use client";
import { Input } from "@/components/ui/input";
import React, { useState, useEffect, useCallback } from "react";
import Filter from "../forms/filters/Filter";
import CourseQuestionCard from "./CourseQuestionCard";
import { Button } from "@/components/ui/button";
import AddFaqQuestion from "./AddFaqQuestion";
import CreateQuestionForm from "./CreateQuestionForm";
import { getCourseFAQs } from "@/actions/course.action";
import QuestionDetails from "./QuestionDetails";

interface FAQProps {
  courseId: number;
}

const FAQ = ({ courseId }: FAQProps) => {
  const [createQuestion, setCreateQuestion] = useState(false);
  const [questions, setQuestions] = useState<any>([]);
  const [showQuestionDetail, setShowQuestionDetail] = useState(false);
  const [focusedQuestion, setFocusedQuestion] = useState<any>(null);

  // function to toggle create question form
  const handleCreateQuestion = () => {
    setCreateQuestion(!createQuestion);
  };

  // function to toggle question detail
  const handleQuestionDetail = (question: any) => {
    setShowQuestionDetail(!showQuestionDetail);
    setFocusedQuestion(question);
  };

  // function to update the question array optimistically
  const updateQuestions = (question: any) => {
    setQuestions([question, ...questions]);
  };

  // funtion to get all the questions related to the course
  const getQuestions = useCallback(async () => {
    // fetch all the questions related to the course
    const res = await getCourseFAQs(courseId);
    if (res.success) {
      setQuestions(res.faqs);
    }
  }, [courseId]);

  useEffect(() => {
    getQuestions();
  }, [getQuestions]);

  return createQuestion ? (
    <CreateQuestionForm
      courseId={courseId}
      handleCreateQuestion={handleCreateQuestion}
    />
  ) : showQuestionDetail ? (
    <QuestionDetails
      question={focusedQuestion}
      updateQuestions={updateQuestions}
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
            ({questions.length} questions)
          </span>
        </div>
        <div className="mt-4">
          {questions.map((question: any) => (
            <CourseQuestionCard
              key={question.id}
              question={question}
              seeQuestionDetail={handleQuestionDetail}
            />
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

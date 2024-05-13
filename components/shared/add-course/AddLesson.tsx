"use client";
import React, { useReducer, useState } from "react";
import { Button } from "@/components/ui/button";
import { FaPlay } from "react-icons/fa";
import { Input } from "@/components/ui/input";
import { LessonDescriptionSchema, LessonTitleSchema } from "@/lib/validations";
import { Textarea } from "@/components/ui/textarea";
import { LessonDetailsInterface } from "@/types/types";
import { uploadFile } from "@/lib/fileUpload";
import { useSearchParams } from "next/navigation";
import { addLesson } from "@/actions/tutor.actions";

const AddLesson = ({ moduleId }: { moduleId: number }) => {
  const searchParams = useSearchParams();
  const courseId = searchParams.get("course-id");

  const initialState = {
    lessonTitle: "",
    lessonDescription: "",
    lessonType: "",

    titleError: "",
    descriptionError: "",
    lessonFile: "",
  };

  interface action {
    type: string;
    payload: string;
  }

  const lessonReducer = (state: LessonDetailsInterface, action: action) => {
    switch (action.type) {
      case "SET_LESSON_TITLE":
        return { ...state, lessonTitle: action.payload };
      case "SET_LESSON_DESCRIPTION":
        return { ...state, lessonDescription: action.payload };
      case "SET_LESSON_TYPE":
        return { ...state, lessonType: action.payload };
      case "SET_TITLE_ERROR":
        return { ...state, titleError: action.payload };
      case "SET_DESCRIPTION_ERROR":
        return { ...state, descriptionError: action.payload };
      case "SET_LESSON_FILE":
        return { ...state, lessonFile: action.payload };
      case "SET_IS_PREVIEW":
        return { ...state, isPreview: action.payload };
      default:
        return state;
    }
  };

  const [showLessonTitleForm, setShowLessonTitleForm] = useState(true);
  const [showLessonDescriptionForm, setShowLessonDescriptionForm] =
    useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [showLessonCard, setShowLessonCard] = useState(false);
  const [isPreview, setIsPreview] = useState(false);

  const [lessonState, dispatch] = useReducer<
    React.Reducer<LessonDetailsInterface, action>
  >(lessonReducer, initialState);

  const toggleLessonTitleForm = () => {
    try {
      if (LessonTitleSchema.parse({ title: lessonState.lessonTitle })) {
        setShowLessonTitleForm(false);
        dispatch({ type: "SET_TITLE_ERROR", payload: "" });
      }
    } catch (err: any) {
      dispatch({ type: "SET_TITLE_ERROR", payload: err.errors[0].message });
    }
  };

  const toggleLessonDescriptionForm = () => {
    try {
      if (
        LessonDescriptionSchema.parse({
          description: lessonState.lessonDescription,
        })
      ) {
        setShowLessonDescriptionForm(false);
        dispatch({ type: "SET_DESCRIPTION_ERROR", payload: "" });
      }
    } catch (err: any) {
      dispatch({
        type: "SET_DESCRIPTION_ERROR",
        payload: err.errors[0].message,
      });
    }
  };

  const handleLessonType = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: "SET_LESSON_TYPE", payload: e.target.value });
  };

  const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (lessonState.lessonType !== "") {
      setIsLoading(true);
      setShowLessonCard(true);
      if (e?.target?.files) {
        const filePath = await uploadFile(
          e.target.files[0],
          `${courseId}/lessons`,
          lessonState.lessonType
        );
        if (filePath) {
          dispatch({ type: "SET_LESSON_FILE", payload: filePath });
          setIsLoading(false);
        }
      }
    } else {
      alert("Please select a lesson type");
    }
  };

  const addLessonHandler = async () => {
    const formData = {
      name: lessonState.lessonTitle,
      courseSectionsId: +moduleId,
      videoUrl: lessonState.lessonFile,
      description: lessonState.lessonDescription,
      courseType: lessonState.lessonType,
      isPreview,
    };

    try {
      setIsLoading(true);
      const res = await addLesson(formData);
      if (res.success) {
        alert("Lesson added successfully");
        window.location.reload();
      } else alert("Error adding lesson");
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <div className="space-y-5">
        <div>
          <div className="flex justify-between">
            <h3>You are Creating a New Lesson</h3>
            <p className="text-xs text-[#FD2121]">Cancel</p>
          </div>
          <p className="text-xs font-medium opacity-50">
            This is what your learners are going to consume
          </p>
        </div>
        <div className="w-fit space-y-1 rounded-lg border border-[#000]/20 px-5 py-3">
          <h6 className="text-sm font-medium opacity-50">Lesson Title</h6>
          {showLessonTitleForm ? (
            <div>
              <div className="flex-center gap-3">
                <Input
                  type="text"
                  placeholder="Enter Lesson Title"
                  value={lessonState.lessonTitle}
                  onChange={(e) =>
                    dispatch({
                      type: "SET_LESSON_TITLE",
                      payload: e.target.value,
                    })
                  }
                />
                <Button
                  className="bg-accent-blue text-[#fff]"
                  onClick={toggleLessonTitleForm}
                >
                  Add
                </Button>
              </div>
              {lessonState.titleError && (
                <p className="mt-2 text-xs text-[#FD2121]">
                  {lessonState.titleError}
                </p>
              )}
            </div>
          ) : (
            <div className="flex-center gap-3">
              <p className="text-xs">{lessonState.lessonTitle}</p>
              <Button
                className="bg-accent-blue text-[#fff]"
                onClick={() => setShowLessonTitleForm(true)}
              >
                Edit
              </Button>
            </div>
          )}
        </div>
        <div className="w-fit space-y-1 rounded-lg border border-[#000]/20 px-5 py-3">
          <h6 className="text-sm font-medium opacity-50">Lesson Description</h6>
          {showLessonDescriptionForm ? (
            <div>
              <div className="flex-center gap-3">
                <Textarea
                  placeholder="Enter Lesson Description"
                  value={lessonState.lessonDescription}
                  onChange={(e) =>
                    dispatch({
                      type: "SET_LESSON_DESCRIPTION",
                      payload: e.target.value,
                    })
                  }
                />
                <Button
                  className="bg-accent-blue text-[#fff]"
                  onClick={toggleLessonDescriptionForm}
                >
                  Add
                </Button>
              </div>
              {lessonState.descriptionError && (
                <p className="mt-2 text-xs text-[#FD2121]">
                  {lessonState.descriptionError}
                </p>
              )}
            </div>
          ) : (
            <div className="flex-center gap-3">
              <p className="text-xs">{lessonState.lessonDescription}</p>
              <Button
                className="bg-accent-blue text-[#fff]"
                onClick={() => setShowLessonTitleForm(true)}
              >
                Edit
              </Button>
            </div>
          )}
        </div>
      </div>

      <div className="flex justify-between gap-4" onChange={handleLessonType}>
        <div className="space-x-2">
          <input type="radio" id="text" name="lesson_type" value="text" />
          <label htmlFor="text">Text Lesson</label>
        </div>
        <div className="space-x-2">
          <input type="radio" id="video" name="lesson_type" value="video" />
          <label htmlFor="video">Video Lesson</label>
        </div>
        <div className="space-x-2">
          <input type="radio" id="audio" name="lesson_type" value="audio" />
          <label htmlFor="audio">Audio Lesson</label>
        </div>
      </div>

      <div>
        <form>
          <Input type="file" id="file" name="file" onChange={handleUpload} />
        </form>
      </div>

      <div>
        <div>
          <label htmlFor="isPreview">Allow Preview Lesson</label>
          <input
            type="checkbox"
            id="isPreview"
            name="isPreview"
            onChange={() =>
              setIsPreview((prev) => {
                return !prev;
              })
            }
          />
        </div>
      </div>

      <div className="space-y-5">
        {showLessonCard && (
          <div className="flex w-fit space-x-5 rounded-lg border border-[#000]/20 px-5 py-3">
            <FaPlay className="my-auto size-6 text-accent-blue" />
            <div className="space-y-1">
              <h6 className="text-sm font-medium">
                Uploading{" "}
                <span className="ml-10 opacity-50">
                  {lessonState.lessonFile === "" ? "0%" : "100%"}
                </span>
              </h6>
              <p className="text-xs opacity-50">
                {lessonState.lessonType} - {lessonState.lessonTitle}
              </p>
            </div>
            <p className="text-xs text-[#FD2121]">Cancel</p>
          </div>
        )}
        <Button
          className="bg-accent-blue px-5 text-primary-100"
          onClick={addLessonHandler}
          disabled={isLoading}
        >
          Save Lesson to Module
        </Button>
      </div>
    </>
  );
};

export default AddLesson;

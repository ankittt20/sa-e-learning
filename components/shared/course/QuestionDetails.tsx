import React, { useRef, useState } from "react";
import { SessionProvider, useSession } from "next-auth/react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Editor } from "@tinymce/tinymce-react";
import Image from "next/image";
import CourseQuestionCard from "./CourseQuestionCard";
import AnswerCard from "./AnswerCard";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { addCourseFAQAnswer } from "@/actions/course.action";

interface QuestionDetailsProps {
  question: any;
  updateQuestions: (question: any) => void;
}

const QuestionDetails = ({
  question,
  updateQuestions,
}: QuestionDetailsProps) => {
  const { data: session } = useSession();

  // set editor ref
  const editorRef = useRef(null);

  // toggle state for showing the answer form
  const [showAnswerForm, setShowAnswerForm] = useState(false);

  // function to toggle the answer form
  const toggleAnswerForm = () => {
    setShowAnswerForm(!showAnswerForm);
  };

  // form to submit the answer
  const schema = z.object({
    answer: z.string().nonempty("Answer is required"),
  });

  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: {
      answer: "",
    },
  });

  // handle submit of the answer form
  const onSubmit = async (data: z.infer<typeof schema>) => {
    const res = await addCourseFAQAnswer(question.id, data);
    if (res.success) {
      form.reset();
      updateQuestions(res.answer);
      toggleAnswerForm();
    } else {
      form.setError("answer", {
        type: "manual",
        message: res.msg,
      });
    }
  };

  return (
    <SessionProvider>
      <div>
        <CourseQuestionCard
          key={question.id}
          question={question}
          seeQuestionDetail={() => {}}
        />
        <div className="mt-7">
          <p className="text-semibold">{question?.answer.length} Replies</p>
          <div className="mt-7">
            {question?.answer.length === 0 && (
              <p className="text-semibold">No replies yet</p>
            )}
            {question?.answer.map((answer: any) => (
              <AnswerCard key={answer.id} answer={answer} />
            ))}
          </div>
        </div>
        <div className="mt-7">
          {!showAnswerForm ? (
            <div className="flex items-center gap-5">
              <Image
                src={session?.user?.image || "/assets/images/user.png"}
                width={66}
                height={66}
                alt="user"
              />
              <Button
                className="text-semibold w-full cursor-text rounded-none border border-[#000] py-5 text-left"
                onClick={toggleAnswerForm}
              >
                Add Answer
              </Button>
            </div>
          ) : (
            <div>
              <h5 className="text-bold">Write your answer</h5>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)}>
                  <FormField
                    control={form.control}
                    name="answer"
                    render={({ field }) => (
                      <FormItem className="flex w-full flex-col gap-3">
                        <FormLabel>
                          Detailed explanation of your problem{" "}
                          <span className="text-accent-pink">*</span>
                        </FormLabel>
                        <FormControl className="mt-3.5">
                          <Editor
                            apiKey={process.env.NEXT_PUBLIC_TINY_API_KEY}
                            onInit={(evt: any, editor: any) => {
                              // @ts-ignore
                              editorRef.current = editor;
                            }}
                            onBlur={field.onBlur}
                            onEditorChange={(content: string) =>
                              field.onChange(content)
                            }
                            initialValue={""}
                            init={{
                              height: 350,
                              menubar: false,
                              plugins: [
                                "advlist",
                                "autolink",
                                "lists",
                                "link",
                                "image",
                                "charmap",
                                "preview",
                                "anchor",
                                "searchreplace",
                                "visualblocks",
                                "codesample",
                                "fullscreen",
                                "insertdatetime",
                                "media",
                                "table",
                              ],
                              toolbar:
                                "undo redo | " +
                                "codesample | bold italic forecolor | alignleft aligncenter |" +
                                "alignright alignjustify | bullist numlist",
                              content_style:
                                "body { font-family:Inter; font-size:16px }",
                            }}
                          />
                        </FormControl>
                        <FormMessage className="text-accent-pink" />
                      </FormItem>
                    )}
                  />
                  <Button
                    className="mt-4 bg-accent-blue font-semibold text-primary-100"
                    type="submit"
                  >
                    Answer
                  </Button>
                </form>
              </Form>
            </div>
          )}
        </div>
      </div>
    </SessionProvider>
  );
};

export default QuestionDetails;

import React, { useRef, useContext } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { CourseFAQSchema } from "@/lib/validations";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Editor } from "@tinymce/tinymce-react";
import { addCourseFAQ } from "@/actions/course.action";
import { CourseContext } from "@/store/course/CourseContext";

interface CreateQuestionFormProps {
  courseId: number;
  handleCreateQuestion: () => void;
}

const CreateQuestionForm = ({
  courseId,
  handleCreateQuestion,
}: CreateQuestionFormProps) => {
  // set editor ref
  const editorRef = useRef(null);

  // get the lesson id from the course context
  const { selectedCourseLessonId } = useContext(CourseContext);

  const form = useForm<z.infer<typeof CourseFAQSchema>>({
    resolver: zodResolver(CourseFAQSchema),
    defaultValues: {
      title: "",
      body: "",
    },
  });

  // handle submit
  const onSubmit = async (data: z.infer<typeof CourseFAQSchema>) => {
    const res = await addCourseFAQ(courseId, selectedCourseLessonId, data);
    if (res.success) {
      form.reset();
      // @ts-ignore
      editorRef.current.setContent("");
    }
  };

  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel htmlFor="title">Title</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormDescription>
                  Enter your question title (Maximum of 255 words.)
                </FormDescription>
                <FormMessage>
                  {form.formState.errors?.title?.message}
                </FormMessage>
              </FormItem>
            )}
          />
          <FormField
            name="body"
            control={form.control}
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
          <div className="flex flex-wrap items-center gap-5">
            <Button
              type="submit"
              className="mt-4 border border-accent-blue p-3 font-semibold text-accent-blue"
            >
              Ask Question
            </Button>
            <Button
              className="mt-4 bg-accent-blue font-semibold text-primary-100"
              onClick={handleCreateQuestion}
            >
              Back to all questions
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default CreateQuestionForm;

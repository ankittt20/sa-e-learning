"use client";
import React from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Editor } from "@tinymce/tinymce-react";
import { ArticleSchema } from "@/lib/validations";
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
import { Button } from "@/components/ui/button";
import { uploadFile } from "@/lib/fileUpload";
import { v4 } from "uuid";
import { Label } from "../ui/label";
import { Badge } from "../ui/badge";
import Image from "next/image";
import { addArticle } from "@/actions/tutor.actions";

const CreateArticle = () => {
  // create editor ref
  const editorRef = React.useRef(null);

  // loading state
  const [isLoading, setIsLoading] = React.useState(false);

  // image path state
  const [filePath, setFilePath] = React.useState("");

  // form for article creation
  const form = useForm<z.infer<typeof ArticleSchema>>({
    resolver: zodResolver(ArticleSchema),
    defaultValues: {
      title: "",
      body: "",
      tags: [],
    },
  });

  // upload file handler
  const uploadFileHandler = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setIsLoading(true);
      const file = e?.target?.files[0];
      const path = `articles/${file.name}-${v4()}`;
      const fileUrl = await uploadFile(file, path, "image");
      if (fileUrl) {
        setFilePath(fileUrl);
        setIsLoading(false);
      } else setFilePath("");
    }
  };

  // add tag
  const handleInputKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    field: any
  ) => {
    if (e.key === "Enter" && field.name === "tags") {
      e.preventDefault();
      const tagInput = e.target as HTMLInputElement;
      const tagValue = tagInput.value.trim();
      console.log(tagValue);
      if (tagValue !== "") {
        if (tagValue.length > 15) {
          return form.setError("tags", {
            type: "required",
            message: "Tag must be less than 15 characters.",
          });
        }
        if (!field.value.includes(tagValue as never)) {
          form.setValue("tags", [...field.value, tagValue]);
          tagInput.value = "";
          form.clearErrors("tags");
        }
      } else {
        form.trigger();
      }
    }
  };

  // remove tag
  const handleTagRemove = (tag: string, field: any) => {
    const newTags = field.value.filter((t: string) => t !== tag);

    form.setValue("tags", newTags);
  };

  // handle submit
  const onSubmit = async (data: z.infer<typeof ArticleSchema>) => {
    setIsLoading(true);
    const res = await addArticle({
      ...data,
      image: filePath,
    });
    if (res.success) {
      form.reset();
      setFilePath("");
      alert("Article created successfully");
    } else {
      alert(res.msg);
    }
    setIsLoading(false);
  };

  return (
    <div className="container">
      <div className="mt-9">
        <div>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Title</FormLabel>
                    <FormControl>
                      <Input type="text" {...field} placeholder="Enter title" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                name="body"
                control={form.control}
                render={({ field }) => (
                  <FormItem className="mt-10">
                    <FormLabel>
                      The body of the article goes here{" "}
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
              <div className="mt-10">
                <Label>Upload Cover Image</Label>
                <Input type="file" onChange={uploadFileHandler} />
              </div>
              <FormField
                control={form.control}
                name="tags"
                render={({ field }) => (
                  <FormItem className="mt-10 flex w-full flex-col">
                    <FormLabel className="text-semibold">
                      Tags <span className="text-primary-100">*</span>
                    </FormLabel>
                    <FormControl className="mt-3.5">
                      <div className="mt-10">
                        <Input
                          className=" min-h-[56px] border"
                          placeholder="Add tags..."
                          onKeyDown={(e) => handleInputKeyDown(e, field)}
                        />

                        {Array.isArray(field.value) &&
                          field.value.length > 0 && (
                            <div className="flex-start mt-2.5 gap-2.5">
                              {field.value.map((tag: any) => (
                                <Badge
                                  key={tag}
                                  className="flex items-center justify-center gap-2 rounded-md border-none bg-accent-pink px-4 py-2 capitalize text-primary-100"
                                  onClick={() => handleTagRemove(tag, field)}
                                >
                                  {tag}
                                  {
                                    <Image
                                      src="/assets/icons/close.svg"
                                      alt="Close icon"
                                      width={12}
                                      height={12}
                                      className="cursor-pointer object-contain invert-0 dark:invert"
                                    />
                                  }
                                </Badge>
                              ))}
                            </div>
                          )}
                      </div>
                    </FormControl>
                    <FormDescription>
                      Add up to 3 tags to describe what your question is about.
                      You need to press enter to add a tag.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button
                type="submit"
                className="mt-4 border border-accent-blue p-3 font-semibold text-accent-blue"
                disabled={isLoading}
              >
                Publish Article
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default CreateArticle;

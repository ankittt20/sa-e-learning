"use client";
import React, { useState, useEffect } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { v4 } from "uuid";
import { getAllCategories } from "@/actions/generalFunctions.actions";
import { categoriesInterface } from "@/types/types";
import { Button } from "@/components/ui/button";
import { addCourseSchema } from "@/lib/validations";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { createCourse } from "@/actions/tutor.actions";
import { uploadFile } from "@/lib/fileUpload";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";

const CourseDetail = () => {
  const [categories, setCategories] = useState<categoriesInterface[]>();
  const [error, setError] = useState("");
  const [filePath, setFilePath] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const form = useForm<z.infer<typeof addCourseSchema>>({
    resolver: zodResolver(addCourseSchema),
    defaultValues: {
      title: "",
      description: "",
      category: "",
      price: 0,
      level: "",
      requirements: "",
      objectives: "",
      tags: [],
    },
  });

  useEffect(() => {
    const getCategories = async () => {
      const res = await getAllCategories();
      if (!res.success) {
        setError(res.message);
        return;
      }
      setCategories(res.categories);
    };

    getCategories();
  }, []);

  const handleImageChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setIsLoading(true);
      const file = e?.target?.files[0];
      const path = `course-images/${file.name}-${v4()}`;
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
  const onSubmit = async (data: z.infer<typeof addCourseSchema>) => {
    try {
      setIsLoading(true);
      const newCourse = await createCourse({ ...data, image: filePath });
      alert(newCourse.msg);
      router.push(`/edit-course?course-id=${newCourse.courseId}`);
    } catch (e: any) {
      console.log("Something went wrong");
    } finally {
      setIsLoading(false);
    }
  };

  if (error) return <div>{error}</div>;
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 space-y-6 ">
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Title</FormLabel>
              <FormControl>
                <Input placeholder="Course Title" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Course Description</FormLabel>
              <FormControl>
                <Textarea placeholder="Course Description" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="category"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Category</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a category" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent className="bg-[#fff]">
                  {categories?.map((category) => (
                    <SelectItem
                      key={category.id}
                      value={category.id.toString()}
                    >
                      {category.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="price"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Price</FormLabel>
              <FormControl>
                <Input
                  placeholder="Course Price"
                  {...field}
                  type="number"
                  onChange={(e) => {
                    field.onChange(+e.target.value);
                  }}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="level"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Suitable For</FormLabel>
              <FormControl>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select level" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent className="bg-[#fff]">
                    <SelectItem value={"beginner"}>Beginner</SelectItem>
                    <SelectItem value={"intermediate"}>Intermediate</SelectItem>
                    <SelectItem value={"advanced"}>Advanced</SelectItem>
                  </SelectContent>
                </Select>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="requirements"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Requirements </FormLabel>
              <FormControl>
                <Input
                  placeholder="Prior Requirements"
                  {...field}
                  type="text"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="objectives"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Objectives </FormLabel>
              <FormControl>
                <Input
                  placeholder="Objectives of the course"
                  {...field}
                  type="text"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Input
          placeholder="Image for the course"
          type="file"
          onChange={handleImageChange}
          required
        />
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

                  {Array.isArray(field.value) && field.value.length > 0 && (
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
                Add up to 3 tags to describe what your question is about. You
                need to press enter to add a tag.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          type="submit"
          className="bg-accent-blue px-5 text-primary-100"
          disabled={isLoading}
        >
          Submit
        </Button>
      </form>
    </Form>
  );
};

export default CourseDetail;

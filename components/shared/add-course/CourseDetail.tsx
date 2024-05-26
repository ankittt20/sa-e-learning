"use client";
import React, { useState, useEffect } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
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

const CourseDetail = () => {
  const [categories, setCategories] = useState<categoriesInterface[]>();
  const [error, setError] = useState("");
  const [filePath, setFilePath] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const form = useForm<z.infer<typeof addCourseSchema>>({
    resolver: zodResolver(addCourseSchema),
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

  const onSubmit = async (data: z.infer<typeof addCourseSchema>) => {
    try {
      setIsLoading(true);
      console.log(data);
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

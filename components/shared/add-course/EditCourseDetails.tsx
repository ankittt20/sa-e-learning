"use client";
import React, { useState, useEffect } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useSearchParams } from "next/navigation";
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
import { getAllCategories } from "@/actions/generalFunctions.actions";
import { categoriesInterface } from "@/types/types";
import { Button } from "@/components/ui/button";
import { addCourseSchema } from "@/lib/validations";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { createCourse, getCourseById } from "@/actions/tutor.actions";

const CourseDetail = () => {
  const [categories, setCategories] = useState<categoriesInterface[]>();
  const [error, setError] = useState("");
  const [course, setCourse] = useState<any>();
  const [showCourseDetails, setShowCourseDetails] = useState(false);
  const [filePath] = useState("");
  const searchParams = useSearchParams();
  const courseId = searchParams.get("course-id");

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

  useEffect(() => {
    const fetchCourseById = async () => {
      // get course by id
      if (courseId) {
        const res = await getCourseById(+courseId);
        setCourse(res.course);
      }
    };
    fetchCourseById();
  }, [courseId]);

  const onSubmit = async (data: z.infer<typeof addCourseSchema>) => {
    const addCourse = await createCourse({ ...data, image: filePath });
    alert(addCourse.msg);
  };

  if (error) return <div>{error}</div>;

  if (!showCourseDetails) {
    return (
      <div className="flex flex-col space-y-5">
        <h3 className="text-xl font-semibold">{course && course.name}</h3>
        <p className="line-clamp-2 opacity-70">
          {course && course.description}
        </p>
        <div className="flex space-x-12">
          <p
            className="cursor-pointer text-accent-blue"
            onClick={() => setShowCourseDetails(true)}
          >
            Edit Course Details
          </p>
        </div>
      </div>
    );
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 space-y-6">
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
        <Input placeholder="Image for the course" type="file" required />
        <Button type="submit" className="bg-accent-blue px-5 text-primary-100">
          Submit
        </Button>
      </form>
    </Form>
  );
};

export default CourseDetail;

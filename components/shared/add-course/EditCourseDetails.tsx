"use client";
import React, { useState, useEffect } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useSearchParams, useRouter } from "next/navigation";
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
import { getCourseById, updateCourse } from "@/actions/tutor.actions";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";

const CourseDetail = () => {
  const [categories, setCategories] = useState<categoriesInterface[]>();
  const [error, setError] = useState("");
  const [course, setCourse] = useState<any>();
  const [showCourseDetails, setShowCourseDetails] = useState(false);
  const [filePath, setFilePath] = useState("");
  const searchParams = useSearchParams();
  const courseId = searchParams.get("course-id");

  // router
  const router = useRouter();

  const form = useForm<z.infer<typeof addCourseSchema>>({
    resolver: zodResolver(addCourseSchema),
    defaultValues: {
      title: "",
      description: "",
      category: "0",
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

  useEffect(() => {
    const fetchCourseById = async () => {
      // get course by id
      if (courseId) {
        const res = await getCourseById(+courseId);
        setCourse(res.course);
        form.setValue("title", res?.course?.name || "");
        form.setValue("description", res?.course?.description || "");
        form.setValue("category", `${res?.course?.category[0].id}` || "0");
        form.setValue("price", res?.course?.price || 0);
        form.setValue("level", res?.course?.level || "");
        form.setValue("requirements", res?.course?.requirements || "");
        form.setValue("objectives", res?.course?.objectives || "");
        setFilePath(res?.course?.image || "");
        const keywordsArray = res?.course?.keywords.map(
          (keyword: { keyword: { name: string } }) => {
            return keyword.keyword.name;
          }
        );
        form.setValue("tags", keywordsArray || []);
      }
    };
    fetchCourseById();
  }, [courseId, form]);

  // add tag
  const handleInputKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    field: any
  ) => {
    if (e.key === "Enter" && field.name === "tags") {
      e.preventDefault();
      const tagInput = e.target as HTMLInputElement;
      const tagValue = tagInput.value.trim();
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

  const onSubmit = async (data: z.infer<typeof addCourseSchema>) => {
    console.log(data);
    if (courseId === null) return;
    const res = await updateCourse({ ...data, image: filePath }, +courseId);
    if (res.success) {
      router.push("/tutor");
    }
    alert(res.msg);
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
        <div>
          <Input placeholder="Image for the course" type="file" />
          {filePath && (
            <Image
              src={filePath}
              alt="course image"
              width={100}
              height={100}
              className="mt-5"
            />
          )}
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
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="bg-accent-blue px-5 text-primary-100">
          Submit
        </Button>
      </form>
    </Form>
  );
};

export default CourseDetail;

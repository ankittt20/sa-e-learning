"use client";
import React from "react";
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
import { moduleSchema } from "@/lib/validations";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { addSection } from "@/actions/tutor.actions";

const ModuleForm = ({ courseId }: { courseId: string | null }) => {
  const form = useForm<z.infer<typeof moduleSchema>>({
    resolver: zodResolver(moduleSchema),
  });

  const onSubmit = async (data: z.infer<typeof moduleSchema>) => {
    const formData = {
      name: data.title,
      description: data.description,
      courseId: courseId && +courseId,
    };
    const res = await addSection(formData);
    if (res.success) {
      form.reset();
      alert(res.msg);
    }
  };

  if (courseId === null) return null;

  return (
    <>
      <h5 className="text-accent-blue">
        Add some information about the modules
      </h5>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-2/3 space-y-6"
        >
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
          <Button
            type="submit"
            className="bg-accent-blue px-5 text-primary-100"
          >
            Submit
          </Button>
        </form>
      </Form>
    </>
  );
};

export default ModuleForm;

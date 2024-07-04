"use client";
import React, { useCallback, useEffect } from "react";
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
import {
  addSection,
  deleteModule,
  editModule,
  getModuleById,
} from "@/actions/tutor.actions";
import ConfirmDialogue from "../ConfirmDialogue";

interface ModuleFormProps {
  courseId: string | null;
  isModuleEditing: boolean;
  moduleId?: number;
}

const ModuleForm = ({
  courseId,
  isModuleEditing,
  moduleId,
}: ModuleFormProps) => {
  const form = useForm<z.infer<typeof moduleSchema>>({
    resolver: zodResolver(moduleSchema),
  });

  // get module information if module is being edited
  const getModuleInfo = useCallback(async () => {
    if (moduleId) {
      const res = await getModuleById(moduleId);
      if (res.success) {
        form.setValue("title", res?.section?.name || "");
        form.setValue("description", res?.section?.description || "");
      }
    }
  }, [moduleId, form]);

  useEffect(() => {
    getModuleInfo();
  }, [getModuleInfo]);

  const onSubmit = async (data: z.infer<typeof moduleSchema>) => {
    if (!isModuleEditing) {
      const formData = {
        name: data.title,
        description: data.description,
        courseId: courseId && +courseId,
      };
      const res = await addSection(formData);
      if (res.success) {
        form.reset();
        alert(res.msg);
        window.location.reload();
      }
    } else {
      const formData = {
        name: data.title,
        description: data.description,
      };
      if (courseId === null) return alert("Course Id is required");
      const res = await editModule(formData, moduleId || 0, +courseId);
      alert(res.msg);
      if (res.success) form.reset();
    }
  };

  // handle delete module
  const handleDeleteModule = async () => {
    if (courseId === null) return alert("Course Id is required");
    const res = await deleteModule(moduleId || 0, +courseId);
    alert(res.msg);
    if (res.success) {
      form.reset();
      window.location.reload();
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
          <div className="flex items-center justify-between">
            <Button
              type="submit"
              className="bg-accent-blue px-5 text-primary-100"
            >
              Submit
            </Button>
            {isModuleEditing && (
              <Button
                type="button"
                className="ml-2 border border-accent-blue px-5 text-accent-blue"
              >
                Cancel
              </Button>
            )}
            {isModuleEditing && (
              <ConfirmDialogue
                title="Are you sure you want to delete the module"
                alertMsg="This action is irreversible. Deleting it will remove the module permanently"
                onConfirm={handleDeleteModule}
              />
            )}
          </div>
        </form>
      </Form>
    </>
  );
};

export default ModuleForm;

"use client";
import React, { useState } from "react";
import "react-color-palette/css";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { CategorySchema } from "@/lib/validations";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { uploadFile } from "@/lib/fileUpload";
import { addCategory } from "@/actions/admin.actions";
import { FaPlus } from "react-icons/fa";

const AddCategory = () => {
  const form = useForm<z.infer<typeof CategorySchema>>({
    resolver: zodResolver(CategorySchema),
    defaultValues: {
      name: "",
    },
  });

  const [filePath, setFilePath] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const submitHandler = form.handleSubmit(async (data) => {
    setLoading(true);
    if (!filePath) {
      alert("Please upload an icon");
      return;
    }
    const submitCategory = await addCategory(data.name, filePath);
    if (submitCategory.success) {
      alert("Category added successfully");
      form.reset();
      setFilePath(null);
      window.location.reload();
    } else {
      alert("Failed to add category");
    }
    setLoading(false);
  });

  const handleIconUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoading(true);
    if (!e.target.files) {
      alert("No file uploaded");
      return;
    }
    const file = e.target.files[0];
    console.log(file);
    const path = await uploadFile(file, "/category-icons", "image");
    if (!path) {
      alert("Invalid file type");
      return;
    }
    setFilePath(path);
    setLoading(false);
  };
  return (
    <Dialog>
      <DialogTrigger className="font-semibold text-accent-blue">
        <div className="flex justify-center items-center bg-accent-blue text-primary-100 h-5 w-5 rounded-sm">
          <FaPlus size={15} />
        </div>
      </DialogTrigger>
      <DialogContent className="bg-primary-100">
        <DialogHeader>
          <DialogTitle>Add a Category</DialogTitle>
          <DialogDescription>
            <Form {...form}>
              <form onSubmit={submitHandler}>
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel htmlFor="name">Category Name</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          id="name"
                          placeholder="Enter category name"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Input
                  type="file"
                  name="icon"
                  onChange={handleIconUpload}
                  className="mt-5"
                />{" "}
                <Button
                  type="submit"
                  className="mt-5 bg-accent-blue font-semibold text-primary-100"
                  disabled={loading}
                >
                  Add Category
                </Button>
              </form>
            </Form>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default AddCategory;

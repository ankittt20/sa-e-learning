"use client";
import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import React from "react";
import { z } from "zod";
import { tutorRegistrationSchema } from "@/lib/validations";
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
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { registerTutorTypes } from "@/types/types";

const StepOne = ({
  onNextStep,
  handleFormData,
}: {
  onNextStep: () => void;
  handleFormData: (data: any) => void;
}) => {
  const form = useForm<z.infer<typeof tutorRegistrationSchema>>({
    resolver: zodResolver(tutorRegistrationSchema),
    defaultValues: {
      idNumber: "",
      firstName: "",
      lastName: "",
      streetAddress: "",
      streetAddressOptional: "",
      pincode: "",
      city: "",
      country: "",
      teachDisabled: "false",
      email: "",
      password: "",
      cpassword: "",
    },
  });

  const handleSubmit = async (data: registerTutorTypes) => {
    console.log(data);
    const formData = {
      ...data,
      teachDisabled: data.canTeachDisabled === "true",
    };
    handleFormData(formData);
    onNextStep();
  };

  return (
    <Form {...form}>
      <form className="space-y-5" onSubmit={form.handleSubmit(handleSubmit)}>
        <FormField
          name="idNumber"
          control={form.control}
          render={({ field }: { field: any }) => (
            <FormItem>
              <FormLabel className="block font-semibold">
                YOUR ID NUMBER
              </FormLabel>
              <FormControl>
                <Input
                  className="mt-2 w-2/5 rounded border-2 border-[#BBC8D4] bg-[primary-100] p-2 focus:outline-none"
                  type="text"
                  name="id_number"
                  placeholder="XXXXXXXXXXX"
                  {...field}
                />
              </FormControl>
              <FormDescription className="mt-2 text-xs">
                This should be 11 digits long.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex gap-4">
          <FormField
            name="firstName"
            control={form.control}
            render={({ field }: { field: any }) => (
              <FormItem>
                <FormControl>
                  <Input
                    className="mt-2 w-full rounded border-2 border-[#BBC8D4] bg-[primary-100] p-2 focus:outline-none"
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            name="lastName"
            control={form.control}
            render={({ field }: { field: any }) => (
              <FormItem>
                <FormControl>
                  <Input
                    className="mt-2 w-full rounded border-2 border-[#BBC8D4] bg-[primary-100] p-2 focus:outline-none"
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <FormField
          name="email"
          control={form.control}
          render={({ field }: { field: any }) => (
            <FormItem>
              <FormLabel className="block font-semibold">Email</FormLabel>
              <FormControl>
                <Input
                  className="mt-2 w-2/5 rounded border-2 border-[#BBC8D4] bg-[primary-100] p-2 focus:outline-none"
                  type="text"
                  name="email"
                  placeholder="test@example.com"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex gap-4">
          <FormField
            name="password"
            control={form.control}
            render={({ field }: { field: any }) => (
              <FormItem>
                <FormLabel className="block font-semibold">Password</FormLabel>
                <FormControl>
                  <Input
                    className="mt-2 rounded border-2 border-[#BBC8D4] bg-[primary-100] p-2 focus:outline-none"
                    type="password"
                    name="password"
                    placeholder="Password"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            name="cpassword"
            control={form.control}
            render={({ field }: { field: any }) => (
              <FormItem>
                <FormLabel className="block font-semibold">
                  Confirm Password
                </FormLabel>
                <FormControl>
                  <Input
                    className="mt-2 rounded border-2 border-[#BBC8D4] bg-[primary-100] p-2 focus:outline-none"
                    type="password"
                    name="cpassword"
                    placeholder="Confirm Password"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div>
          <div className="flex items-end gap-4">
            <FormField
              name="streetAddress"
              control={form.control}
              render={({ field }: { field: any }) => (
                <FormItem>
                  <FormLabel className="block font-semibold">
                    YOUR RESIDENTIAL ADDRESS
                  </FormLabel>
                  <FormControl>
                    <Input
                      className="mt-2 rounded border-2 border-[#BBC8D4] bg-[primary-100] p-2 focus:outline-none"
                      type="text"
                      name="street_address"
                      placeholder="Street Address"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              name="streetAddressOptional"
              control={form.control}
              render={({ field }: { field: any }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      className="mt-2 rounded border-2 border-[#BBC8D4] bg-[primary-100] p-2 focus:outline-none"
                      type="text"
                      name="street_address(optional)"
                      placeholder="Street Address(Optional)"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="mt-2 flex gap-4">
            <FormField
              name="pincode"
              control={form.control}
              render={({ field }: { field: any }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      className="mt-2 rounded border-2 border-[#BBC8D4] bg-[primary-100] p-2 focus:outline-none"
                      type="text"
                      name="pincode"
                      placeholder="Pincode"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              name="city"
              control={form.control}
              render={({ field }: { field: any }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      className="mt-2 rounded border-2 border-[#BBC8D4] bg-[primary-100] p-2 focus:outline-none"
                      type="text"
                      name="city"
                      placeholder="City"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              name="country"
              control={form.control}
              render={({ field }: { field: any }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      className="mt-2 rounded border-2 border-[#BBC8D4] bg-[primary-100] p-2 focus:outline-none"
                      type="text"
                      name="country"
                      placeholder="country"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>

        <FormField
          name="teachDisabled"
          control={form.control}
          render={({ field }: { field: any }) => (
            <FormItem>
              <FormLabel>Able to teach Disabled ?</FormLabel>
              <FormControl>
                <RadioGroup defaultValue="false" onValueChange={field.onChange}>
                  <label className="font-semibold"></label>
                  <div className="flex">
                    <RadioGroupItem value="true" className="mr-5" id="yes" />
                    <label className="mr-5" htmlFor="yes">
                      Yes
                    </label>
                    <RadioGroupItem value="false" className="mr-5" id="no" />
                    <label className="mr-5" htmlFor="no">
                      No
                    </label>
                  </div>
                </RadioGroup>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button
          className="rounded-3xl bg-accent-blue px-8 text-sm font-bold text-primary-100"
          type="submit"
        >
          Next
        </Button>
      </form>
    </Form>
  );
};

export default StepOne;

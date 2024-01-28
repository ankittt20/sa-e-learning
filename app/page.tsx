import React from "react";
import Hero from "@/app/(home)/(sections)/Hero";
import Clients from "@/app/(home)/(sections)/Clients";
import Categories from "./(home)/(sections)/Categories";
import Community from "./(home)/(sections)/Community";
import Newsletter from "@/components/shared/newsletter/Newsletter";
import PopularCourses from "./(home)/(sections)/PopularCourses";
import Instructor from "@/components/shared/instructor/Instructor";

const page = () => {
  return (
    <>
      <div className="space-y-28">
        <Hero />
        <Clients />
        <Categories />
        <Community />
        <PopularCourses />
        <Instructor />
        <Newsletter />
      </div>
    </>
  );
};

export default page;

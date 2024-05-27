import React from "react";
import Hero from "@/app/(home)/(sections)/Hero";
import Clients from "@/app/(home)/(sections)/Clients";
import Categories from "./(home)/(sections)/Categories";
import Community from "./(home)/(sections)/Community";
import Newsletter from "@/components/shared/newsletter/Newsletter";
import PopularCourses from "./(home)/(sections)/PopularCourses";
import Instructor from "@/components/shared/instructor/Instructor";
import Footer from "@/components/shared/footer/Footer";
import Navbar from "@/components/shared/navbar/Navbar";

const page = () => {
  return (
    <div className="bg-contain bg-no-repeat sm:bg-[url('/assets/icons/border-effect.svg')]">
      <div className="container space-y-10 sm:space-y-28">
        <Navbar />
        <Hero />
        <Clients />
        <Categories />
        <Community />
        <PopularCourses />
        <Instructor />
        <Newsletter />
        <Footer />
      </div>
    </div>
  );
};

export default page;

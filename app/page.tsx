import React from "react";
import Hero from "@/app/(home)/(sections)/Hero";
import Clients from "@/app/(home)/(sections)/Clients";
import Footer from "@/components/shared/footer/Footer";
import Categories from "./(home)/(sections)/Categories";
import Community from "./(home)/(sections)/Community";
import Newsletter from "@/components/shared/newsletter/Newsletter";
import PopularCourses from "./(home)/(sections)/PopularCourses";

const page = () => {
  return (
    <>
      <Hero />
      <div className="mt-28">
        <Clients />
      </div>
      <div className="mt-28">
        <Categories />
      </div>
      <div className="mt-28">
        <Community />
      </div>
      <div className="mt-28">
        <PopularCourses />
      </div>
      <div className="mt-28">
        <Newsletter />
      </div>
      <div className="mt-28">
        <Footer />
      </div>
    </>
  );
};

export default page;

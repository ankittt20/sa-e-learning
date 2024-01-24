import React from "react";
import Hero from "@/app/(home)/(sections)/Hero";
import Clients from "@/app/(home)/(sections)/Clients";
import Footer from "@/components/Footer";
import Categories from "./(home)/(sections)/Categories";
import Community from "./(home)/(sections)/Community";

const page = () => {
  return (
    <>
      <Hero />
      <div className="mt-28">
        <Clients />
      </div>
      <Footer />
      <div className="mt-28">
        <Categories />
      </div>
      <div className="mt-28">
        <Community />
      </div>
    </>
  );
};

export default page;

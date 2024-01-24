import React from "react";
import Hero from "@/app/(home)/(sections)/Hero";
import Clients from "@/app/(home)/(sections)/Clients";
import Categories from "./(home)/(sections)/Categories";

const page = () => {
  return (
    <>
      <Hero />
      <div className="mt-24">
        <Clients />
      </div>
      <div className="mt-28">
        <Categories />
      </div>
    </>
  );
};

export default page;

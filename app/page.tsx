import React from "react";
import Hero from "@/app/(home)/(sections)/Hero";
import Clients from "@/app/(home)/(sections)/Clients";
import Footer from "@/components/Footer";

const page = () => {
  return (
    <>
      <Hero />
      <div className="mt-24">
        <Clients />
      </div>
      <Footer />
    </>
  );
};

export default page;

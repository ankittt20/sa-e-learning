import LearningNow from "@/components/shared/LearningNow";
import Footer from "@/components/shared/footer/Footer";
import Navbar from "@/components/shared/navbar/Navbar";
import React from "react";
import Testimonial from "@/components/shared/testimonial/Testimonial";
import Courses from "@/components/shared/Courses";

type Props = {};

const page = (props: Props) => {
  return (
    <div className="w-full bg-no-repeat sm:bg-[url('/assets/images/navborder.svg')]">
      <div className="container space-y-28">
        <Navbar />
        <Courses />
        <Testimonial />
        <LearningNow />
        <Footer />
      </div>
    </div>
  );
};

export default page;

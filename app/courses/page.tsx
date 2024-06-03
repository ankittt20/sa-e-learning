import LearningNow from "@/components/shared/LearningNow";
import Footer from "@/components/shared/footer/Footer";
import React from "react";
import Testimonial from "@/components/shared/testimonial/Testimonial";
import Courses from "@/components/shared/Courses";

type Props = {};

const page = (props: Props) => {
  return (
    <div className="">
      <div className="container space-y-28">
        <Courses />
        <Testimonial />
        <LearningNow />
        <Footer />
      </div>
    </div>
  );
};

export default page;

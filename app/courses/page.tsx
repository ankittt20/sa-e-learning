import LearningNow from "@/components/shared/LearningNow";
import Footer from "@/components/shared/footer/Footer";
import Navbar from "@/components/shared/navbar/Navbar";
import React from "react";

type Props = {};

const page = (props: Props) => {
  return (
    <>
      <div className="container space-y-28">
        <Navbar />
        <LearningNow />
        <Footer />
      </div>
    </>
  );
};

export default page;

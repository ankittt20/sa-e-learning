import Footer from "@/components/shared/footer/Footer";
import Navbar from "@/components/shared/navbar/Navbar";
import React from "react";

type Props = {};

const page = (props: Props) => {
  return (
    <>
      <div className="container">
        <Navbar />
        <h1>Page</h1>
        <Footer />
      </div>
    </>
  );
};

export default page;

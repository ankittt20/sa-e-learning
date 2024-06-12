import React from "react";
import CreateArticleForm from "@/components/articles/CreateArticleForm";
import Navbar from "@/components/shared/navbar/Navbar";

const page = () => {
  return (
    <div className="container">
      <Navbar />
      <div className="mt-9">
        <h3 className="text-center text-2xl font-bold sm:text-3xl">
          Write your article
        </h3>
        <CreateArticleForm />
      </div>
    </div>
  );
};

export default page;

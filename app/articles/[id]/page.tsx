import React from "react";
import Navbar from "@/components/shared/navbar/Navbar";
import ShowArticleDetails from "@/components/articles/ShowArticleDetails";

const Article = () => {
  return (
    <div className="container">
      <Navbar />
      <ShowArticleDetails />
    </div>
  );
};

export default Article;

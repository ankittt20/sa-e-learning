"use client";
import { getArticleById } from "@/actions/tutor.actions";
import HTMLParser from "@/lib/htmlParser";
import Image from "next/image";
import { useParams } from "next/navigation";
import React, { useCallback, useEffect, useState } from "react";

const ShowArticleDetails = () => {
  // get the id of the article
  const { id } = useParams();

  // state to store the article
  const [article, setArticle] = useState<any>();

  const fetchArticleById = useCallback(async () => {
    const article = await getArticleById(+id);
    console.log(article);
    setArticle(article);
  }, [id]);

  useEffect(() => {
    fetchArticleById();
  }, [fetchArticleById]);

  return (
    <div className="container">
      <div className="mt-12 flex flex-col items-center">
        <Image
          src={article?.article?.coverImage}
          alt="article image"
          width={500}
          height={300}
        />
        <h1>{article?.article?.title}</h1>
        <HTMLParser html={article?.article?.body || ""} />
      </div>
    </div>
  );
};

export default ShowArticleDetails;

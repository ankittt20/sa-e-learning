"use client";
import React, { useEffect, useState } from "react";
import { FaLink, FaSearch } from "react-icons/fa";
import { getArticles, verifyArticle } from "@/actions/admin.actions";
import { format } from "date-fns";

type Props = {};

const ManageArticles = (props: Props) => {
  const [articles, setArticles] = useState<any>();

  useEffect(() => {
    const fetchArticles = async () => {
      const res = await getArticles();
      setArticles(res?.articles);
    };
    fetchArticles();
  }, []);

  return (
    <>
      <div className="flex justify-between items-center">
        <h1 className="text-lg font-semibold">Manage Articles</h1>
        <div className="flex justify-center items-center bg-accent-blue text-primary-100 h-7 w-7 rounded-sm">
          <FaSearch />
        </div>
      </div>
      <div className="max-h-60 pb-2 overflow-y-scroll no-scrollbar">
        <table className="w-full">
          <thead>
            <tr className="text-sm text-left">
              <th>Title</th>
              <th>Author</th>
              <th>Date</th>
              <th>View</th>
              <th className="text-center">Status</th>
            </tr>
          </thead>
          <tbody>
            {articles?.map((article: any) => (
              <tr key={article.id} className="text-sm">
                <td>{article?.title}</td>
                <td>{article?.authorId}</td>
                <td>{format(new Date(article?.publishedAt), "dd MMM yyyy")}</td>
                <td>
                  <a href="/">
                    <FaLink className="text-accent-blue" />
                  </a>
                </td>
                <td className="text-center">
                  <button
                    onClick={async () => {
                      await verifyArticle(article?.id, !article.verified);
                    }}
                    className={`px-3 py-1 text-xs text-primary-100 tracking-wide rounded-full ${
                      article.verified ? "bg-[#4CBB17]" : "bg-[#E90043]"
                    }`}
                  >
                    {article.verified ? "Verified" : "Not Verified"}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ManageArticles;

"use client";
import React, { useState, useEffect } from "react";
import Filter from "../forms/filters/Filter";

const Chart = () => {
  let width = 768;
  if (window !== undefined) width = window.innerWidth;
  const [chartWidth, setChartWidth] = useState(width);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setChartWidth(window.innerWidth);
    });
  }, [chartWidth]);

  return (
    <div className="mt-5 rounded-xl border border-[#E5E5E5] px-3 sm:w-fit">
      <div className="flex-between">
        <div className="flex gap-1">
          <span className="font-bold">18M+</span>
          <span className="text-[rgba(0,0,0,0.5)]">Total Earned</span>
        </div>
        <Filter
          label=""
          forType="filter-by"
          placeholder="Monthly"
          width="121px"
        />
      </div>
      <div className="flex-center flex">
        <h4>Chart</h4>
      </div>
    </div>
  );
};

export default Chart;

"use client";
import React, { useState, useEffect } from "react";
import {
  VerticalBarSeries,
  XYPlot,
  HorizontalGridLines,
  XAxis,
  YAxis,
} from "react-vis";
import "./style.css";
import Filter from "../forms/filters/Filter";

const data = [
  {
    x: "May",
    y: 3.2,
  },
  {
    x: "Jun",
    y: 4.2,
  },
  {
    x: "Jul",
    y: 1.8,
  },
  {
    x: "Aug",
    y: 4.8,
  },
  {
    x: "Sep",
    y: 3.5,
  },
  {
    x: "Oct",
    y: 4.2,
  },
  {
    x: "Nov",
    y: 3.9,
  },
  {
    x: "Dec",
    y: 2.8,
  },
  {
    x: "Jan",
    y: 4.0,
  },
  {
    x: "Feb",
    y: 3.5,
  },
  {
    x: "Mar",
    y: 2.2,
  },
  {
    x: "Apr",
    y: 5.2,
  },
];

const Chart = () => {
  const width = window.innerWidth;
  const [chartWidth, setChartWidth] = useState(width);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setChartWidth(window.innerWidth);
    });
  }, [chartWidth]);

  const labelSize = chartWidth > 540 ? "14px" : "8px";

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
        <XYPlot
          height={196}
          width={chartWidth > 540 ? 505 : 320}
          xType="ordinal"
          className="mt-6"
        >
          <HorizontalGridLines />
          <XAxis
            style={{
              fontWeight: 500,
              fontSize: labelSize,
              color: "#000000",
              opacity: 1,
            }}
          />
          <YAxis
            style={{
              fontWeight: 500,
              fontSize: labelSize,
              color: "#000000",
              opacity: 1,
            }}
          />
          <VerticalBarSeries
            data={data}
            barWidth={0.7}
            fill={"#D3E0FB"}
            stroke={"#D3E0FB"}
          />
        </XYPlot>
      </div>
    </div>
  );
};

export default Chart;

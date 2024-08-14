"use client";

import React, { useState } from "react";
import { AgCharts } from "ag-charts-react";
import styles from "@/app/ui/chart.module.scss";

export default function Chart({ chartData }) {
  //configure options for the line chart
  const [chartOptions, setChartOptions] = useState({
    data: chartData,
    series: [
      {
        type: "line",
        xKey: "workoutDay",
        yKey: "ctl",
        xName: "",
        yName: "",
        stroke: "#4d4d4d91",
        marker: {
          enabled: false,
          fill: "#4d4d4d",
          size: 16,
        },
        interpolation: {
          type: "smooth",
        },
      },
    ],
    axes: [
      {
        type: "category",
        position: "bottom",
        label: {
          formatter: ({ value }) => {
            return "";
          },
        },
        gridLine: {
          enabled: false,
        },
      },
      {
        type: "number",
        position: "left",
        label: {
          formatter: ({ value }) => {
            return "";
          },
        },
        gridLine: {
          enabled: false,
        },
      },
    ],
    background: {
      fill: "#ededed48",
    },
  });

  return (
    <div className={styles.main}>
      <div className={styles.chartContainer}>
        <div className={styles.chartTitle}>
          <div className={styles.number}>2</div>
          <div className={styles.textContainer}>
            <div>weeks until</div>
            <div className={styles.eventName}>kom</div>
            <div></div>
          </div>
        </div>

        {/* this line chart didn't fulfill the needs of this project, planned to change later */}
        <AgCharts
          options={chartOptions}
          style={{
            width: "600px",
            height: "200px",
            borderRadius: "20px",
          }}
        />
      </div>
    </div>
  );
}

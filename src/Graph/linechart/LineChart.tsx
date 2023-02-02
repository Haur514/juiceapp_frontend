import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import "chart.js/auto";
import "./LineChart.css"

const fetchHistoryOfEachMonth = async (setHistoryOfEachMonth) => {
  const inputdata = await fetch(
    `${window.location.protocol}//${window.location.host}${window.location.pathname}backend/history/eachmonth`,
    {
      method: "GET",
      mode: "cors",
    }
  )
    .then((res) => res.json())
    .then((historyOfEachMonth) => {
      setHistoryOfEachMonth(historyOfEachMonth);
    });
};

function LineChart(props) {
  const [historyOfEachMonth, setHistoryOfEachMonth] = useState([]);

  useEffect(() => {
    fetchHistoryOfEachMonth(setHistoryOfEachMonth);
  }, []);

  const labels = Object.keys(historyOfEachMonth);

  const graphData = {
    labels: labels,
    datasets: [
      {
        label: "売り上げ",
        data: labels.map((label) => historyOfEachMonth[label]),
        borderColor: "greenyellow",
        backgroundColor: "rgba(191,253,91,0.2)",
      },
    ],
  };

  const options: {} = {
    plugins: {
      legend: {
        display: true,
        labels: {
          color: "white",
          font: {
            size: 20,
          },
        },
        position: "right" as const,
      },
      title: {
        display: true,
        text: "各月の売り上げグラフ",
        color:"white",
        font: {
          size: 30,
        },
      },
    },
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        ticks: {
          color: "white",
          font: {
            size: 20,
          },
        },
      },
      x: {
        ticks: {
          color: "white",
          font: {
            size: 20,
          },
        },
      },
    },
  };

  return (
    <div className="LineChart">
      <Line
        data={graphData}
        options={options}
      />
    </div>
  );
}

export default LineChart;

import React from "react";
import { Line } from "react-chartjs-2";
import "chart.js/auto";

function LineChart() {
  const labels = ["1 月", "2 月", "3 月", "4 月", "5 月", "6 月"];
  const graphData = {
    labels: labels,
    datasets: [
      {
        label: "ジュース売り上げ",
        data: [65, 59, 60, 81, 56, 55],
        borderColor: "rgb(75, 192, 192)",
      },
      {
        label: "フード売り上げ",
        data: [60, 55, 57, 61, 75, 50],
        // borderColor: "rgb(75, 100, 192)",
        borderColor: "rgb(191, 253, 91)",
        backgroundColor: "rgba(191,253,91,0.2)",
      },
    ],
    
  };

  const options: {} = {
    plugins: {
        legend: {
          display:true,
          labels:{
            color:"white",
            font:{
              size: 20
            }
          },
          position: "right" as const,
        },
        title: {
          display: true,
          text: "各月の売り上げグラフ",
          color:"white",
          font:{
            size: 30
          }
        },
      },
    maintainAspectRatio: false,
    scales:{
        y:{
          ticks:{
            color:"white",
            font: {
              size:20
            }
          }
        },
        x:{
          ticks:{
            color:"white",
            font:{
              size:20
            }
          }
        }
      }
  };

  const divStyle: React.CSSProperties = {
    marginLeft: "auto",
    marginRight: "auto",
    width: "100%",
    height: "80vh",
    backgroundColor:"#303030",
  };

  return (
    <div style={divStyle}>
      <Line
        height={300}
        width={300}
        data={graphData}
        options={options}
        id="chart-key2"
      />
    </div>
  );
}

export default LineChart;
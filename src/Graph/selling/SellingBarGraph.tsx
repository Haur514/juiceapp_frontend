import React, { useEffect, useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { faker } from "@faker-js/faker";

import "./SellingBarGraph.css";
import { lstat } from "fs/promises";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  indexAxis: "y" as const,
  elements: {
    bar: {
      borderWidth: 2,
    },
  },
  responsive: true,
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
      text: "ジュース売れ筋グラフ",
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

const fetchItemList = async (setItemList) => {
  const inputdata = await fetch(`${window.location.protocol}//${window.location.host}${window.location.pathname}backend/item`, {
    method: "GET",
    mode: "cors",
  })
    .then((res) => res.json())
    .then((itemList) => {
      setItemList(itemList);
    });
};

const setItemNameList = (itemList) => {
  let ret = {};
  itemList.map((item) => {
    ret[item.name] = item.salesFigure;
  });
  return ret;
};

export default function SellingBarGraph(props) {
  const [itemList, setItemList] = useState([]);

  useEffect(() => {
    fetchItemList(setItemList);
  }, []);

  let dict = setItemNameList(itemList);
  const labels = Object.keys(dict);
  labels.sort((a,b) => {
    return dict[b] - dict[a];
  })


  const data = {
    labels,
    datasets: [
      {
        label: "Dataset 1",
        data: labels.map((label) => dict[label]),
        borderColor: "rgb(191, 253, 91)",
        backgroundColor: "rgba(191,253,91,0.2)",
      },
    ],
  };

  return (
    <div className="SellingBarGraph">
      <Bar options={options} data={data} height={props.height}/>
    </div>
  );
}

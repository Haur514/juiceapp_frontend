import React, { useEffect, useState } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { faker } from '@faker-js/faker';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  indexAxis: 'y' as const,
  elements: {
    bar: {
      borderWidth: 2,
    },
  },
  responsive: true,
  plugins: {
    legend: {
      position: 'right' as const,
    },
    title: {
      display: true,
      text: 'Chart.js Horizontal Bar Chart',
    },
  },
};




const fetchItemList = async (setItemList) => {
  const inputdata = await fetch(`http://localhost/backend/item`, {
      method: 'GET',
      mode: 'cors'
  })
  .then(res => res.json())
  .then(itemList => {
      setItemList(itemList);
  });
};


const setItemNameList = (itemList) =>{
  let ret = {}
  itemList.map((item)=>{
    ret[item.name] = item.salesFigure;
  })
  return ret;
}

export default function Graph() {
  const [itemList,setItemList] = useState([]);

  useEffect(() =>{
    fetchItemList(setItemList);
    
  },[])

  let dict = setItemNameList(itemList);
  const labels = Object.keys(dict)

  const data = {
    labels,
    datasets: [
      {
        label: 'Dataset 1',
        data: labels.map((label) => dict[label]),
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      }
    ],
  };

  return <Bar options={options} data={data} />;
}

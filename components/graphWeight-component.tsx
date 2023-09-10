import type { NextComponentType, NextPageContext } from "next";
import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';


ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

import { Line } from 'react-chartjs-2';
import faker from 'faker';

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      text: 'График изменения веса',
    },
  },
};



interface Props {
  labels: string[],
  data: string[];
 }

const GraphWeightComponent: NextComponentType<NextPageContext, {}, Props> = (
  {
    labels,
    data
   }
) => {
  const info = {
    labels,
    datasets: [
      {
        label: "Изменение веса",
        data: data.map(str => {
          return parseInt(str, 10);
        }),
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      }
    ],
  };

  return (


    <div className='border overflow-auto lg:h-52 border-gray-400 rounded-xl flex shadow-xl'>
    <h1>А это для теста</h1>
    <Line options={options} data={info} />
  </div>
  )
}

export default GraphWeightComponent
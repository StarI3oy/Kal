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
      text: 'График изменения пульса',
    },
  },
};

// const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

// const data = {
//   labels,
//   datasets: [
    
//     {
//       label: 'Dataset 2',
//       data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
//       borderColor: 'rgb(53, 162, 235)',
//       backgroundColor: 'rgba(53, 162, 235, 0.5)',
//     },
//   ],
// };

interface Props {
  labels: string[],
  dataS: string[],
  dataT: string[];
 }

const GraphPulseComponent: NextComponentType<NextPageContext, {}, Props> = (
  {
    labels,
    dataT,
    dataS
   }
) => {
  const info = {
    labels,
    datasets: [
      {
        label: "Пульс на тренировке",
        data: dataT.map(str => {
          return parseInt(str, 10);
        }),
        borderColor: 'rgb(99, 255, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      {
        label: "Пульс в спокойном состоянии",
        data: dataS.map(str => {
          return parseInt(str, 10);
        }),
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      }
    ],
  };

  return (
    
    <div className='border overflow-auto lg:h-52 border-gray-400 rounded-xl flex shadow-xl'>
      <h1>Это тоже</h1>
    <Line options={options} data={info} />
  </div>
  )
}

export default GraphPulseComponent
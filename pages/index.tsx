import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import GraphWeightComponent from '../components/graphWeight-component';
import GraphPulseComponent from '../components/graphPulse-component';
import { Suspense } from 'react';
import { GetStaticProps, NextApiRequest, NextApiResponse } from 'next'
import { createClient } from '@supabase/supabase-js'
import { Database } from '../types/supabase'
import { useState } from 'react'

type chelovek = Database["public"]["Tables"]["Человек"]["Row"];
type pulse = Database["public"]["Tables"]["Время-пульс"];
type weight = Database["public"]["Tables"]["Время-вес "];

const supabase = createClient<Database>(
  "https://enimcbqlsogtwxxocndy.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVuaW1jYnFsc29ndHd4eG9jbmR5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTM4MzczMTgsImV4cCI6MjAwOTQxMzMxOH0.ZXMtrrKDw6wBmCNxMhBMssQw1eKUGk0unP-BIgSA2oY"
)

export const getStaticProps: GetStaticProps<{
}> = async () => {


  let { data: mans, error } = await supabase
    .from('mans')
    .select('*')
  return { props: { mans } }
}


import type { NextComponentType, NextPageContext } from "next";
import { useRouter } from 'next/router';

interface Props { }

const Index: NextComponentType<NextPageContext, {}, Props> = (
  props
) => {

  const router = useRouter();

  const [chel, setChel] = useState(null as chelovek);

  const [acc, setAcc] = useState(0);
  const [pulse, setPulse] = useState([]);
  const [weight, setWeight] = useState([]);
  const [loading, setLoading] = useState(false);

  async function loadData(valuev) {
    setLoading(true);
    let { data: man } = await supabase
      .from('mans')
      .select("*")
      .eq("ID", valuev);
    let { data: pulse } = await supabase
      .from('Время-пульс')
      .select("*")
      .eq("userId", valuev);
    let { data: weight } = await supabase
      .from('Время-вес ')
      .select("*")
      .eq("userId", valuev);
    setChel(man[0]);
    setPulse(pulse);
    setWeight(weight);
    setAcc(1);
    setTimeout(() => {
      setLoading(false);

    }, 1000);
  }



  function AboutComponent({ chel }) {
    if (acc != 0) {
      return (
        <div className='border lg:h-52 overflow-auto border-gray-400 rounded-xl flex shadow-xl'>

          {Object.entries(chel).map(([key, value]) => (
            <div className="p-2 flex" key={key}>{key}: {chel[key]}</div>
          ))}


        </div>)
    } else {
      return (
        <div className='border lg:h-52 border-gray-400 rounded-xl flex shadow-xl'>
          <div className='flex p-4'>
            Хотите загрузить? - Выберите id нужного человека
          </div>
          <div className='w-full grid grid-cols-3'>
            <button onClick={() => loadData(1)} className={loading ? 'animate-spin' : ""}>

              <div className='border  p-2 border-gray-400 rounded-xl flex shadow-xl'>
                1
              </div>
            </button>

            <button onClick={() => loadData(2)} className={loading ? 'animate-spin' : ""}>
              <div className='border  p-2 border-gray-400 rounded-xl flex shadow-xl'>
                2
              </div>
            </button>

            <button onClick={() => loadData(3)} className={loading ? 'animate-spin' : ""}>
              <div className='border  p-2 border-gray-400 rounded-xl flex shadow-xl'>
                3
              </div>
            </button>

          </div>
        </div>
      )
    }
  }

  function ChartsWeightComponent ({acc, labelsW,  dataW}) {
    if (acc != 0){
      return(
        <GraphWeightComponent  labels={labelsW} data={dataW}  />
        )
    } else {
      return(
      <div className='border lg:h-52 border-gray-400 rounded-xl flex shadow-xl'>
          <div className='flex p-4'>
            SOber
          </div>
          </div>)
    }
  }
  function ChartsPulseComponent ({acc, dataPS, dataPT, labelsP}) {
    if (acc != 0){
      return(
        <GraphPulseComponent labels={labelsP} dataT={dataPT} dataS={dataPS}/>
        )
    } else {
      return(
      <div className='border lg:h-52 border-gray-400 rounded-xl flex shadow-xl'>
          <div className='flex p-4'>
            Oper
          </div>
          </div>)
    }
  }

  let labelsW = [];
  let dataW = [];
  let labelsP = [];
  let dataPS = [];
  let dataPT = [];
  for (let label in pulse) {
    labelsP.push(pulse[label]["Дата"]);
    dataPT.push(pulse[label]["Пульс во время тренировки"]);
    dataPS.push(pulse[label]["Пульс в спокойном состоянии"]);
  }
  for (let label in weight) {
    labelsW.push(weight[label]["Дата"]);
    dataW.push(weight[label]["Вес"]);
  }
  return (
    <main className='grid lg:grid-cols-3 grid-cols-1 gap-4 m-5'>
      <ChartsWeightComponent acc={acc} labelsW={labelsW} dataW={dataW} />
      <ChartsPulseComponent acc={acc} dataPT={dataPT} dataPS={dataPS} labelsP={labelsP}/>
      <AboutComponent chel={chel} />
      <button className='animate-bounce p-6 m-6' onClick={() => {
    router.reload();
  }} > Нажми, чтобы сбросить </button>
    </main>
  )
}

export default Index
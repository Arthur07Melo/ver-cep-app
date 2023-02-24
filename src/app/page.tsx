"use client";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import useFetch from "@/hooks/useFetch";
import { ObjectType } from "typescript";



interface cepType {
  cep: string;
  logradouro: string,
  complemento: string,
  bairro: string,
  localidade: string,
  uf: string,
  ibge: string,
  gia: string,
  ddd: string,
  siafi: string
}

type CepFormType = {
  CEPinput: string
}

export default function Home() {
  const [CEP, setCEP] = useState(0);
  const { register, handleSubmit } = useForm<CepFormType>();

  const onSubmit = (data: CepFormType) => { setCEP(Number(data.CEPinput)); console.log(CEP) }

  let { data: CEPinfos, error, isFetching } = useFetch(`https://viacep.com.br/ws/${CEP}/json/`, CEP);


  return (
    <main className="w-screen h-screen flex flex-col justify-center items-center text-white bg-background bg-no-repeat bg-cover bg-fixed bg-center">
      <div className="flex flex-col justify-center items-center max-w-2xl backdrop-blur rounded-3xl shadow-2xl border-gray-300 border-2 py-3">

      <div className="flex flex-col items-center justify-center w-full">
        <h1 className="text-3xl font-medium p-2 mx-56">VER CEP</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="w-full flex flex-col items-center justify-center" action="">
          <input className="text-lg font-semibold border-gray-700 bg-gray-700 bg-opacity-50 rounded-lg w-11/12 h-12 px-10 my-3" {...register("CEPinput")} type="number" placeholder="Insira seu CEP" />
          <button className="bg-gray-700 bg-opacity-50 rounded-lg p-3 w-4/12 mb-3 hover:bg-gray-600" type="submit">SUBMIT</button>
        </form>
      </div>


      <div className="flex flex-col items-center justify-center w-full">
        {Object.keys(CEPinfos).map((element, i) => {
          return (
            <div className="flex items-center" key={i}>
              <h1 className="text-green-700 text-lg font-extrabold">{element}: </h1>
              <h1 className="font-bold">{CEPinfos[(element as keyof typeof CEPinfos)]}</h1>
            </div>
          )
        })}
      </div>

      </div>
    </main>
  )
}

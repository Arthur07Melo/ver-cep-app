"use client";
import { useState } from "react";
import CepBox from "@/components/cepBox";
import CepForm from "@/components/cepForm";


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
  

  return (
    <main className="w-screen h-screen flex flex-col justify-center overflow-hidden items-center text-white bg-[url('../assets/bg-image.jpg')] bg-no-repeat bg-cover bg-fixed bg-center">
      <div className="flex flex-col justify-center items-center max-w-2xl backdrop-blur rounded-3xl shadow-2xl border-gray-300 border-2 py-3">

        <CepForm setCEP={setCEP} />
        <CepBox CEP={CEP}/>

      </div>
    </main>
  )
}

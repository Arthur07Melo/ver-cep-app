"use client";
import useFetch from "@/hooks/useFetch";


export default function CepBox(props: {CEP: number}){
    let { data: CEPinfos, error, isFetching } = useFetch(`https://viacep.com.br/ws/${props.CEP}/json/`, props.CEP);


    return(
        <div className="flex items-center justify-center w-full">
        <div className="flex flex-col">
          {error?.message=="Network Error" && <h1 className="text-red-700 text-lg font-extrabold">Error: CEP inválido</h1>}

          {isFetching && <h1 className="text-green-700 text-lg font-extrabold">Carregando...</h1>}

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
    )
}
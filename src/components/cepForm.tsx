import { useForm } from "react-hook-form";


type CepFormType = {
    CEPinput: string
}


export default function CepForm(props: {setCEP: Function}){
    const { register, handleSubmit } = useForm<CepFormType>();

    const onSubmit = (data: CepFormType) => { props.setCEP(Number(data.CEPinput)) }

    return(
        <div className="flex flex-col items-center justify-center w-full">
        <h1 className="text-3xl font-medium p-2 mx-56">VER CEP</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="w-full flex flex-col items-center justify-center" action="">
          <input className="text-lg font-semibold border-gray-700 bg-gray-700 bg-opacity-50 rounded-lg w-11/12 h-12 px-10 my-3" {...register("CEPinput")} type="number" placeholder="Insira seu CEP" />
          <button className="bg-gray-700 bg-opacity-50 rounded-lg p-3 w-4/12 mb-3 hover:bg-gray-600" type="submit">SUBMIT</button>
        </form>
      </div>
    )
}
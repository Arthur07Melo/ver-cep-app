"use client"
import axios from "axios";
import { useState, useEffect } from "react";


export default function useFetch(url: string, stage:number) {
    const [data, setData] = useState({});
    const [isFetching, setIsFetching] = useState(false);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        if(stage!==0){
            setIsFetching(true);
            axios.get(url)
                .then(response => {
                    setData(response.data);
                    setError(null);
                    console.log("data setted");
                })
                .catch(err => {
                    setError(err);
                })
                .finally(() => {
                    setIsFetching(false);
                });
        }
    }, [stage])


    return { data, error, isFetching };
}
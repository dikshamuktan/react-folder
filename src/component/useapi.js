import { useState, useEffect, useCallback } from "react";
import axios from "axios";

export const useApi=(url, method, payload)=> {
    const [data, setData]= useState([]);
    const [isLoading, handleLoading]= useState(true);


    const Fetch= useCallback(async ()=>{
        try{
            const request= await axios({
                url: url,
                method: method,
                data :payload,
            })
            const response= await request.data;
            setData(response);
            handleLoading(false);

        }catch{
            handleLoading(false)
        }
       useEffect(()=>{
        fetch();
       })
    },[]);
    return[data,isLoading];
};
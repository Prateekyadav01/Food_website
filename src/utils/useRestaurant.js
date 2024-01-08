import { useEffect,useState } from "react";
import { swiggy_menu_api_URL } from "../components/Config";


const useRestaurant =(resId)=>{
    const [ restaurant ,setRestaurant]= useState(null);
    // get the api
    
    useEffect(()=>{
        getAllrestaurant();
    },[]);
    
    async function getAllrestaurant(){
        const data = await fetch(swiggy_menu_api_URL + resId)
        const json = await data.json();   
        console.log(json);
        setRestaurant(json.data);
    }
    // return the data

    return restaurant;
};

export default useRestaurant;

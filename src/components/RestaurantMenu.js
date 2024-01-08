import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {IMG_CDN_URL} from "./Config";
import useRestaurant from "../utils/useRestaurant";
import Shimmer from "./Shimmer";

const RestaurantMenu =()=>{
    // const [restaurant,setRestaurant]= useState(null);
    const{resId} = useParams;
    const restaurant = useRestaurant(resId); 


    return !restaurant ?
    (
    <Shimmer/>
    ):(
        <div>
            <div>
           <h1>Restaurant Id : {resId}</h1>
            <h2>{restaurant?.name}</h2>
            <img src={IMG_CDN_URL + restaurant?.cloudinaryImageId}></img>
            <h3>{restaurant?.area}</h3>

          </div>
            <div>
                <h1>Menu</h1>
                <ul>
                    {Object.values(restaurant?.menu?.items).map((item)=>(
                        <li key={item.id}>{item.name}</li>
                    ))}
                </ul>
            </div>
        </div>

    );
}


export default RestaurantMenu;
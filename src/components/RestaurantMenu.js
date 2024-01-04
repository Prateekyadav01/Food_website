import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {IMG_CDN_URL} from "./Config";

const RestaurantMenu =()=>{
    const [restaurant,setRestaurant]= useState("");
    const{id} = useParams;

    useEffect(()=>{
        getAllrestaurant();
    },[]);
    
    async function getAllrestaurant(){
        const callingApi = await fetch(
                "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=26.8467126&lng=80.9460872&restaurantId=789168&catalog_qa=undefined&submitAction=ENTER"
            );
        const data = await callingApi.json();
        console.log(data);
        // const output = json?.data?.cards?.card?.card;
        // console.log(data.data.cards);
        const cards = data.data.cards;
        console.log(cards);        // setRestaurant(cards.map(card => card.card.info.name));
        
          const output= cards[0].card.card.info.name;
        
        
        setRestaurant(output);
    }
    return(
        <div>
            <h1>{id}</h1>
            <img src={IMG_CDN_URL+ restaurant.cloudinaryImageId  }></img>
            <h1>{restaurant}</h1>
        </div>
    );
}


export default RestaurantMenu;
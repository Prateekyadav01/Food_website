import { useState } from "react";
import {restaurantList} from "./Config";
import RestaurantCard from "./RestaurantCard";


function filter (searchBox,restaurants){
  const filterData = restaurants.filter((restaurant)=>
    restaurant.data.name.includes(searchBox)
  );
  console.log(filterData);
  return filterData;
}
const Body = ()=>{

    const [searchBox , setSearchBox] = useState("");
    const [restaurants, setRestaurant] = useState(restaurantList);

    const searchBoxHandler =(e)=>{
        setSearchBox(e.target.value); 
    }
    return(
        <>
        <div className="flex flex-row gap-3 mx-6">
            <input 
              type="text"
              className="p-2 border border-solid border-black"
              placeholder="Search"
              value={searchBox}
              onChange={(e)=>searchBoxHandler(e)}
            />
            <button className="border border-solid border-black p-2" onClick={()=>{
            //    if(searchBox===" "){
            //       setRestaurant(restaurants);
            //         }
            //    else{

            //    }
            // {searchBox !==" " ? 
            // <div>const data = filter(searchBox,restaurants);
            // setRestaurant(data)</div> : setRestaurant(restaurants)}
            // }}
            if (searchBox !== "") {
                const filteredData = filter(searchBox, restaurantList);
                setRestaurant(filteredData);
              } else {
                setRestaurant(restaurantList);
              } }}>
            searchBox</button>
        </div>
        <div className="flex flex-row flex-wrap">
          {restaurants.map((restaurant)=>{
            return <RestaurantCard {...restaurant.data} key={restaurant.data.id} />
          })}
        </div>
        </>
    );
  };

  export default Body;
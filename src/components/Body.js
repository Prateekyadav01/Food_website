import { useContext, useEffect, useState } from "react";
import { restaurantList } from "./Config";
import RestaurantCard from "./RestaurantCard";
// import {swiggy_api_URL} from "./Config";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import {filter} from "../utils/Helper";
import useOnline from "../utils/useOnline";
import UserContext from "../utils/UseContext";

const Body = () => {
  const [searchBox, setSearchBox] = useState("");
  const [allRestaurants, setALLRestaurant] = useState([]);
  const [restaurantFilterData, setRestaurantFilterData]= useState([]);
  const{user,setUser}=useContext(UserContext);

  const searchBoxHandler = (e) => {
    setSearchBox(e.target.value);
  };

  useEffect(() => {
    // console.log("change");
    getData();
  }, []);

  const online = useOnline();
  if(!online){
    return <h1>Please connect to you connection</h1>
  }

  if(!allRestaurants){
    return null;
  }

  async function getData() {
    try {
      const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=27.1766701&lng=78.00807449999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
      const data1 = await data.json();
      // setRestaurant(data1);
      // setALLRestaurant(data1?.data?.cards[2]?.data?.data?.cards );
      // setRestaurantFilterData(data1?.data?.cards[2]?.data?.data?.cards )
      setALLRestaurant(restaurantList);
      setRestaurantFilterData(restaurantList);
    } catch {
      console.log("error");
    }
  }

   if(restaurantFilterData?.length===0) return <h1>no restaurant</h1>
  return allRestaurants?.length===0 ? (<Shimmer />) : (
    <>
      <div className="flex flex-row gap-3 mx-6">
        <input
          type="text"
          className="p-2 border border-solid border-black"
          placeholder="Search"
          value={searchBox}
          onChange={(e) => searchBoxHandler(e)}
        />
        <button
          className="border border-solid border-black p-2"
          onClick={() => {
            if (searchBox !== "") {
              const filteredData = filter(searchBox, restaurantList);
                setRestaurantFilterData(filteredData);           
            } else {
              setRestaurantFilterData(restaurantList);
            }
          }}
        >
          Search
        </button>

        <input value={user.name} onChange={(e)=>{
          setUser({
            ...user,
            name:e.target.value
          })
        }}></input>
        <input value={user.email} onChange={(e)=>{
          setUser({
            ...user,
            email:e.target.value
          })
        }}></input>
      </div>
      <div className="flex flex-row flex-wrap gap-2 ">
        {
          restaurantFilterData.map((restaurant) => {
          return (   <Link to={"/restaurant/"+restaurant.data.id} key={restaurant.data.id}>
             <RestaurantCard {...restaurant.data}/>
          </Link>
        )})}
      </div>
    </>
  );
};

export default Body;

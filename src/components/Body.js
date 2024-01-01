import { useEffect, useState } from "react";
import { restaurantList } from "./Config";
import RestaurantCard from "./RestaurantCard";
// import {swiggy_api_URL} from "./Config";
import Shimmer from "./Shimmer";

function filter(searchBox, restaurants) {
  const filterData = restaurants.filter((restaurant) =>
    restaurant.data.name.includes(searchBox)
  );
  console.log(filterData);
  return filterData;
}

const Body = () => {
  const [searchBox, setSearchBox] = useState("");
  const [allRestaurants, setALLRestaurant] = useState([]);
  const [restaurantFilterData, setRestaurantFilterData]= useState([]);
  const searchBoxHandler = (e) => {
    setSearchBox(e.target.value);
  };

  useEffect(() => {
    // console.log("change");
    getData();
  }, []);

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
      </div>
      <div className="flex flex-row flex-wrap gap-2 ">
        {
          restaurantFilterData.map((restaurant) => (
            <RestaurantCard {...restaurant.data} key={restaurant.data.id} />
          ))}
      </div>
    </>
  );
};

export default Body;

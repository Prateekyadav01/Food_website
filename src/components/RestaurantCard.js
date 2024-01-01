
import { IMG_CDN_URL } from "./Config";

const RestaurantCard = ( {
    name,
    cusines,
    cloudinaryImageId,
    lastMileTravelString,
})=>{
    return(
      <div className="text-black flex flex-col  p-6  border border-solid border-black">
        <img src={IMG_CDN_URL +cloudinaryImageId} className="w-32 h-32"></img>
        <h2>{name}</h2>
        {/* <h3>{cusines.join(", ")}</h3> */}
        <h4>{lastMileTravelString}</h4>
      </div>
    );
  }
  


  export default RestaurantCard;
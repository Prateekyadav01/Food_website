import { IMG_CDN_URL } from "./Config";

const CartFood = ({ name, description, cloudinaryImageId, price }) => {
  return (
    <>
      <div>
        <img src={IMG_CDN_URL + cloudinaryImageId} />
        <h2>{name}</h2>
        <h3>{description}</h3>
        <h4>Price: {price / 100}</h4>
      </div>
    </>
  );
};

export default CartFood;
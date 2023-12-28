import React from "react";



const Title =()=>(
  <h1>
    hello
  </h1>
);

const burgerKing ={
  name:"",
  image:"",
  cusines:"",
}
const RestaurantCard = ()=>{
  return(
    <div>
      <img src={burgerKing.image}></img>
      <h1>{burgerKing.name}</h1>

      <h4>{burgerKing.cusines}</h4>
    </div>
  );
}

const Header = () =>{
  return (
    <div className="flex justify-between m-7 border border-solid border-black p-4 ">
       <img src="https://food-villa-shawarma-restaurant.business.site/" alt="Not loaded" />
      <ul className="flex flex-row justify-end gap-5 ">
        <li>About</li>
        <li>Contact</li>
        <li>Phone</li>
        <li>Services</li>
      </ul>
    </div>
  )
};

const Apply = () =>{
  return(
    <>
    <Header/>
    </>
  )
}


export default Apply;

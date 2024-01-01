import { useState } from "react";


const Header = () =>{
  const [isLoggin , setIsLogin] = useState(true);
    return (
      <div className="flex justify-between m-7 border border-solid border-black p-4 ">
         <img src="https://food-villa-shawarma-restaurant.business.site/" alt="Not loaded" />
        <ul className="flex flex-row justify-end gap-5 ">
          <li>About</li>
          <li>Contact</li>
          <li>Phone</li>
          <li>Services</li>
        </ul>
        {isLoggin?(<button onClick={()=>{setIsLogin(false)}}>Login</button>) : (<button onClick={()=>{setIsLogin(true)}}>Logout</button>)}
      </div>
    )
  };

  
export default Header
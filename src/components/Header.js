import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assests/download.png"

const Header = () =>{
  const [isLoggin , setIsLogin] = useState(true);
    return (
      <div className="flex justify-between m-7 border border-solid border-black p-4 ">
         <Link to={"/"}><img src={logo} className="w-28"alt="Not loaded" /></Link>
        <ul className="flex flex-row justify-end gap-5 ">
          <Link to={"/about"}><li>About</li></Link>
          <Link to={"/contact"}><li>Contact</li></Link>
          <li>Phone</li>
          <li>Services</li>
        </ul>
        {isLoggin?(<button onClick={()=>{setIsLogin(false)}}>Login</button>) : (<button onClick={()=>{setIsLogin(true)}}>Logout</button>)}
      </div>
    )
  };

  
export default Header
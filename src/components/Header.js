import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assests/download.png"
import useOnline from "../utils/useOnline";
import UserContext from "../utils/UseContext";
// import useAuth from "../utils/useAuth";

const Header = () =>{
  const [isLoggin , setIsLogin] = useState(true);  
  const isOnline = useOnline();
  const {user} = useContext(UserContext);
  // const login= useAuth();
    return (
      <div className="flex justify-between m-7 border border-solid border-black p-4 ">
         <Link to={"/"}><img src={logo} className="w-28"alt="Not loaded" /></Link>
        <ul className="flex flex-row justify-end gap-5 ">
          <Link to={"/about"}><li>About</li></Link>
          <Link to={"/contact"}><li>Contact</li></Link>
          <Link to={"/instamart"}><li>Instamart</li></Link>
          <li>Phone</li>
          <li>Services</li>
        </ul>


        <h1>{isOnline ? "✅" :"🔴"}</h1>
        <h1>{user.name}</h1>
        {
        isLoggin?
        (<button onClick={()=>{setIsLogin(false)}}>Login</button>)

         :
          (<button onClick={()=>{setIsLogin(true)}}>Logout</button>)

         }
         {/* {
          login ? (
             <button>Logout</button>
          ): (<div>
              <button>login</button>
              </div>)
         } */}
      </div>
    )
  };

  
export default Header
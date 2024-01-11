import React, { Suspense ,lazy, useState } from "react";
import Header from "./components/Header";
import Body from "./components/Body";
import { Outlet, createBrowserRouter } from "react-router-dom";
import About from "./components/About";
import Error from "./components/Error";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import RestaurantMenu from "./components/RestaurantMenu";
import Profile from "./components/Profile";
import UserContext from "./utils/UseContext";
// import Instamart from "./components/Instmart";


const Instamart= lazy(()=>import("./components/Instmart"));

const Apply = () =>{
  const [user,setUser]=useState({
    name:"support",
    email:"support@gmail.com"
  })
  return(
    <>
      <UserContext.Provider
      value={{
        user:user,
        setUser:setUser
      }}>
         <Header/>
         <Outlet/>
         <Footer/>
      </UserContext.Provider>
    </>
  )
}

const appRouter = createBrowserRouter([
  {
    path:"/",
    element:<Apply/>,
    errorElement:<Error/>,
    children:[
      {
        path:"/",
        element:<Body/>,
      },
      {
        path:"/about",
        element:<About/>,
        children:[
          {
            path:"profile", 
            // why we cannot use / over there because it create an simple link with parent 
            //  localhost:3000/about/profile
            // if we use / it use localhost:3000/profile
            element:<Profile/>
          }
        ]
      },
      {
        path:"/contact",
        element:<Contact/>,
      },
      {
        path:"/restaurant/:Id",
        element:<RestaurantMenu/>,
      },
      {
        path:"/instamart",
        element:(
          <Suspense>
          <Instamart/>
          </Suspense>
        )
      },
    ]
  }
 
])

export default appRouter;

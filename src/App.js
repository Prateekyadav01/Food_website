import React from "react";
import Header from "./components/Header";
import Body from "./components/Body";
import { Outlet, createBrowserRouter } from "react-router-dom";
import About from "./components/About";
import Error from "./components/Error";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import RestaurantMenu from "./components/RestaurantMenu";

const Apply = () =>{
  return(
    <>
    <Header/>
    <Outlet/>
    <Footer/>
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
      },
      {
        path:"/contact",
        element:<Contact/>,
      },
      {
        path:"/restaurant/:Id",
        element:<RestaurantMenu/>,
      }
    ]
  }
 
])

export default appRouter;

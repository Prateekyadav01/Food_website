import React, { lazy, Suspense } from "react";
// import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
// import Footer from "./components/Footer";
import About from "./components/About";
import Error from "./components/Error";
import Contact from "./components/Contact";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import RestaurantMenu from "./components/RestaurantMenu";
// import Instamart from "./components/Instamart";
import { Provider } from "react-redux";
import store from "./utils/store";
import Cart from "./components/Cart";



const Instamart= lazy(()=>import("./components/Instmart"));

const Apply = () =>{
  return (
    <>
      <Provider store={store}>
        <Header />
        <Outlet />

        {/* good */}
        {/* <Footer /> */}
      </Provider>
    </>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Apply />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantMenu />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      // {
      //   path: "/instamart",
      //   element: (
      //     <Suspense>
      //       <Instamart />
      //     </Suspense>
      //   ),
      // },
    ],
  },
 
])

export default appRouter;

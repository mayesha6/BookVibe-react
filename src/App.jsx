import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
import Applayout from "./Layout/AppLayout/Applayout";
import Home from "./Pages/Home/Home";

const App = () => {
  const router = createBrowserRouter([
    {
      path:'/',
      element:<Applayout/>,
      children:[
        {
          path:'/',
          element:<Home/>
        }
      ]
    }
  ])
  return (
    <RouterProvider router={router}/>
  );
};

export default App;

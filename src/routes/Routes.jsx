import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import AuthLayout from "../layout/AuthLayout";
import { Component } from "react";
import Login from "../pages/Login";
import Register from "../pages/Register";

export const router = createBrowserRouter([
  {
    path: "/",
    element:<MainLayout/>,
    children:[

    ]
  },
  {
    path: "/",
    element:<AuthLayout/>,
    children:[
      {
        path:"login",
        element: <Login/>
      },
      {
        path:"register",
        element: <Register/>
      }
    ]
  }
]);
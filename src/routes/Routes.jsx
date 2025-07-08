import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import AuthLayout from "../layout/AuthLayout";
import { Component } from "react";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Home from "../pages/home/Home";
import PostDetails from "../pages/PostDetails";
import Membership from "../pages/Membership";
import Privaterouter from "./Privaterouter";

export const router = createBrowserRouter([
  {
    path: "/",
    element:<MainLayout/>,
    children:[
      {
        index: true,
        element: <Home/>
      },
      {
        path: "post-details",
        element: <PostDetails/>
      },
      {
        path: "membership",
        element:<Privaterouter><Membership/></Privaterouter>
      }
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
import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import AuthLayout from "../layout/AuthLayout";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Home from "../pages/home/Home";
import PostDetails from "../pages/PostDetails";
import Membership from "../pages/Membership";
import Privaterouter from "./Privaterouter";
import DashboardLayout from "../layout/DashboardLayout";
import MyProfile from "../pages/userDashboard/MyProfile";
import DashboardHome from "../pages/DashboardHome";
import AddPost from "../pages/userDashboard/AddPost";
import MyPost from "../pages/userDashboard/MyPost";
import ManageUsers from "../pages/adminDashboard/ManageUsers";
import Announcement from "../pages/adminDashboard/Announcement";
import ReportedActivities from "../pages/adminDashboard/ReportedActivities";
import AdminProfile from "../pages/adminDashboard/AdminProfile";
import CommentPage from "../pages/CommentPage";
import AnnouncementsPage from "../components/AnnouncementsPage";
import LoadingPage from "../pages/LoadingPage";

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
        path: "post-details/:id",
        element: <PostDetails/>
      },
      {
        path: "membership",
        element:<Privaterouter><Membership/></Privaterouter>
      },
      {
        path:'announcements',
        element:<AnnouncementsPage/>
      },
      {
        path:'lodaing',
        element:<LoadingPage/>
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
  },
  {
    path: "/dashboard",
    element: <Privaterouter><DashboardLayout/></Privaterouter>,
    children:[
      {
        index: true,
        element:<DashboardHome/>
      },
      {
        path:'my-profile',
        element:<MyProfile/>
      },
      {
        path: 'add-post',
        element:<AddPost/>
      },
      {
        path: 'my-post',
        element:<MyPost/>
      },
      {
        path:'manage-users',
        element:<ManageUsers/>
      },
      {
        path:'make-announcement',
        element:<Announcement/>
      },
      {
        path: 'reported-activities',
        element:<ReportedActivities/>
      },
      {
        path: 'admin-profile',
        element: <AdminProfile/>
      },
      {
        path:'comments/:id',
        element:<CommentPage/>
      }
    ]
  }
]);
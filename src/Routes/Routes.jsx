/** @format */

import { Navigate, createBrowserRouter } from "react-router-dom";
import HomeLayouts from "../Layouts/HomeLayouts";
import ErrorPage from "../Page/ErrorPage/ErrorPage";
import NewCar from "../Page/NewCar/NewCar";
import UsedCar from "../Page/UsedCar/UsedCar";
import SellCar from "../Page/SellCar/SellCar";
import CompareCars from "../Page/CompareCars/CompareCars";
import NewsAndReview from "../Page/NewsAndReview/NewsAndReview";
import More from "../Page/More/More";
import Layouts from "../Layouts/Layouts";
import Login from "../Page/Users/Login/Login";
import Register from "../Page/Users/Register/Register";
import GoogleLogin from "../Page/Users/Login/GoogleLogin";
import Profile from "../Page/Users/Profile/Profile";
import MyOrder from "../Page/Users/Profile/userInfo/myOrder";
import ShortlistedVehicles from "../Page/Users/Profile/userInfo/ShortlistedVehicles";
import MyVehicles from "../Page/Users/Profile/userInfo/myVehicles";
import ProfileSettings from "../Page/Users/Profile/userInfo/ProfileSettings";
import UsedCarFilter from "../Page/UsedCar/UsedCarFilter/UsedCarFilter";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layouts></Layouts>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Navigate to="/home"></Navigate>,
      },
      {
        path: "/newCar",
        element: <NewCar></NewCar>,
      },
      {
        path: "/usedCar",
        element: <UsedCar></UsedCar>,
      },
      {
        path: "/usedCarFilter",
        element: <UsedCarFilter/>
      },
      {
        path: "/sellCar",
        element: <SellCar></SellCar>,
      },
      {
        path: "/compareCar",
        element: <CompareCars></CompareCars>,
      },
      {
        path: "/newsAndReview",
        element: <NewsAndReview></NewsAndReview>,
      },
      {
        path: "/more",
        element: <More></More>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/login/google",
        element: <GoogleLogin />,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
  {
    path: "home",
    element: <HomeLayouts></HomeLayouts>,
  },
  {
    path: "userProfile",
    element: <Profile></Profile>,
    children: [
      {
        path: "myOrder",
        element: <MyOrder></MyOrder>,
      },
      {
        path: "ShortlistedVehicles",
        element: <ShortlistedVehicles></ShortlistedVehicles>,
      },
      {
        path: "MyVehicles",
        element: <MyVehicles></MyVehicles>,
      },
      {
        path: "ProfileSettings",
        element: <ProfileSettings></ProfileSettings>,
      },
    ],
  },
]);
export default router;

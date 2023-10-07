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
import UsedCarFilter from "../Page/UsedCar/UsedCarFilter/UsedCarFilter";
import AdminRoutes from "./AdminRoutes";
import UserRoutes from "./UserRoutes";

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
        element: <UsedCarFilter />,
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
  AdminRoutes,
  UserRoutes,
]);
export default router;

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
import UpcomingCar from "../Page/UsedCar/Sections/UpcomingCar";

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
        path: "/new_car",
        element: <NewCar></NewCar>,
      },
      {
        path: "/upcoming",
        element: <UpcomingCar/>,
      },
      {
        path: "/used_car",
        element: <UsedCar></UsedCar>,
      },
      {
        path: "/used_car_filter",
        element: <UsedCarFilter />,
      },
      {
        path: "/sell_car",
        element: <SellCar></SellCar>,
      },
      {
        path: "/compare_car",
        element: <CompareCars></CompareCars>,
      },
      {
        path: "/news_and_review",
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

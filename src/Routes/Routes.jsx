import {Navigate, createBrowserRouter } from "react-router-dom";
import HomeLayouts from "../Layouts/HomeLayouts";
import ErrorPage from "../Page/ErrorPage/ErrorPage";
import NewCar from "../Page/NewCar/NewCar";
import UsedCar from "../Page/UsedCar/UsedCar";
import SellCar from "../Page/SellCar/SellCar";
import CompareCars from "../Page/CompareCars/CompareCars";
import NewsAndReview from "../Page/NewsAndReview/NewsAndReview";
import More from "../Page/More/More";
import Layouts from "../Layouts/Layouts";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layouts></Layouts>,
        errorElement: <ErrorPage></ErrorPage>,
        children:[
            {
                path: '/',
                element: <Navigate to="/home"></Navigate>
            }
            ,
            {
                path: '/newCar',
                element: <NewCar></NewCar>
            },
            {
                path: '/usedCar',
                element: <UsedCar></UsedCar>
            },
            {
                path: '/sellCar',
                element: <SellCar></SellCar>
            },
            {
                path: '/compareCar',
                element: <CompareCars></CompareCars>
            },
            {
                path: '/newsAndReview',
                element: <NewsAndReview></NewsAndReview>
            },
            {
                path: '/more',
                element: <More></More>
            }
        ]
    },
    {
        path: 'home',
        element: <HomeLayouts></HomeLayouts>
    }
])
export default router;
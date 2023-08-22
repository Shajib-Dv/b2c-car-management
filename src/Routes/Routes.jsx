import {createBrowserRouter } from "react-router-dom";
import HomeLayouts from "../Layouts/HomeLayouts";
import ErrorPage from "../Page/ErrorPage/ErrorPage";
import NewCar from "../Page/NewCar/NewCar";
import UsedCar from "../Page/UsedCar/UsedCar";
import SellCar from "../Page/SellCar/SellCar";
import CompareCars from "../Page/CompareCars/CompareCars";
import NewsAndReview from "../Page/NewsAndReview/NewsAndReview";
import More from "../Page/More/More";

const router = createBrowserRouter([
    {
        path: '/',
        element: <HomeLayouts></HomeLayouts>,
        errorElement: <ErrorPage></ErrorPage>,
        children:[
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
    }
])
export default router;
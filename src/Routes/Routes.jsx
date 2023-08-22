import {createBrowserRouter } from "react-router-dom";
import HomeLayouts from "../Layouts/HomeLayouts";

const router = createBrowserRouter([
    {
        path: '/',
        element: <HomeLayouts></HomeLayouts>,
    }
])
export default router;
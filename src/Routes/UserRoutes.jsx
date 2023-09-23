/** @format */

import { Navigate } from "react-router-dom";
import Dashboard from "../Layouts/Dashboard/Dashboard";
import OrderSummary from "../Layouts/Dashboard/GroupDash/User/Sections/OrderSummary";

const UserRoutes = {
  path: "/dashboard/user",
  element: <Dashboard />,
  children: [
    {
      path: "/dashboard/user",
      element: <Navigate to="/dashboard/user/order_summary" />,
    },
    {
      path: "/dashboard/user/order_summary",
      element: <OrderSummary />,
    },
  ],
};

export default UserRoutes;

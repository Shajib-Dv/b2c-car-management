/** @format */

import OrderHistory from "../Layouts/Dashboard/UserDashboard/Sections/OrderHistory";
import UserDashboard from "../Layouts/Dashboard/UserDashboard/UserDashboard";

const UserRoutes = {
  path: "/dashboard/user",
  element: <UserDashboard />,
  children: [
    { path: "/dashboard/user/order_history", element: <OrderHistory /> },
  ],
};

export default UserRoutes;

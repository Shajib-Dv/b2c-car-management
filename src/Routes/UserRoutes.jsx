/** @format */

import { Navigate } from "react-router-dom";
import Dashboard from "../Layouts/Dashboard/Dashboard";
import OrderSummary from "../Layouts/Dashboard/GroupDash/User/Sections/OrderSummary";
import Addresses from "../Layouts/Dashboard/GroupDash/User/Sections/Addresses";
import WishList from "../Layouts/Dashboard/GroupDash/User/Sections/WishList";
import YourTransactions from "../Layouts/Dashboard/GroupDash/User/Sections/YourTransactions";
import CompareCar from "../Layouts/Dashboard/GroupDash/User/Sections/CompareCar";
import MyBidsList from "../Layouts/Dashboard/GroupDash/User/Sections/MyBidsList";
import EMICalculator from "../Layouts/Dashboard/GroupDash/User/Sections/EMICalculator";
import UserHome from "../Layouts/Dashboard/GroupDash/User/Sections/UserHome";

const UserRoutes = {
  path: "/dashboard/user",
  element: <Dashboard />,
  children: [
    {
      path: "/dashboard/user",
      element: <Navigate to="/dashboard/user/order_summary" />,
    },
    {
      path: "/dashboard/user/home",
      element: <UserHome />,
    },
    {
      path: "/dashboard/user/order_summary",
      element: <OrderSummary />,
    },
    {
      path: "/dashboard/user/my_bids_list",
      element: <MyBidsList />,
    },
    {
      path: "/dashboard/user/addresses",
      element: <Addresses />,
    },
    {
      path: "/dashboard/user/emi_calculator",
      element: <EMICalculator />,
    },
    {
      path: "/dashboard/user/wish_list",
      element: <WishList />,
    },
    {
      path: "/dashboard/user/transaction",
      element: <YourTransactions />,
    },
    {
      path: "/dashboard/user/compare_car",
      element: <CompareCar />,
    },
  ],
};

export default UserRoutes;

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
import UserSellCar from "../Layouts/Dashboard/GroupDash/User/Sections/UserSellCar";
import UserListing from "../Layouts/Dashboard/GroupDash/User/Sections/UserListing";
import PrivateRoute from "./PrivateRoute";
import MyCart from "../Layouts/Dashboard/GroupDash/User/Sections/MyCart";

const UserRoutes = {
  path: "/dashboard/user",
  element: <Dashboard />,
  children: [
    {
      path: "/dashboard/user",
      element: <Navigate to="/dashboard/user/home" />,
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
    {
      path: "/dashboard/user/user_sell_car",
      element: <PrivateRoute><UserSellCar /></PrivateRoute>,
    },
    {
      path: "/dashboard/user/user_listing",
      element: <UserListing />,
    },
    {
      path: "/dashboard/user/my_cart",
      element: <MyCart/>,
    },
  ],
};

export default UserRoutes;

import { Navigate } from "react-router-dom";
import Dashboard from "../Layouts/Dashboard/Dashboard";
import AddNewCar from "../Layouts/Dashboard/GroupDash/Admin/Sections/AddNewCar";
import RecentlyAddedCar from "../Layouts/Dashboard/GroupDash/Admin/Sections/RecentlyAddedCar";
import Analytics from "../Layouts/Dashboard/GroupDash/Admin/Sections/Analytics";
import UpcomingCar from "../Layouts/Dashboard/GroupDash/Admin/Sections/UpcomingCar";
import UsedCar from "../Layouts/Dashboard/GroupDash/Admin/Sections/UsedCar";
import ManageCar from "../Layouts/Dashboard/GroupDash/Admin/Sections/ManageCar";
import ManageSellerCar from "../Layouts/Dashboard/GroupDash/Admin/Sections/ManageSellerCar";
import ManageOrder from "../Layouts/Dashboard/GroupDash/Admin/Sections/ManageOrder";

const AdminRoutes = {
  path: "/dashboard/admin",
  element: <Dashboard />,
  children: [
    {
      path: "/dashboard/admin",
      element: <Navigate to="/dashboard/admin/analytics" />,
    },
    { path: "/dashboard/admin/add_new_car", element: <AddNewCar /> },
    {
      path: "/dashboard/admin/recently_added_car",
      element: <RecentlyAddedCar />,
    },
    {
      path: "/dashboard/admin/analytics",
      element: <Analytics />,
    },
    {
      path: "/dashboard/admin/seller_update",
      element: <Analytics />,
    },
    {
      path: "/dashboard/admin/manage_cars",
      element: <ManageCar/>,
    },
    {
      path: "/dashboard/admin/upcoming_car",
      element: <UpcomingCar></UpcomingCar>,
    },
    {
      path: "/dashboard/admin/used_car",
      element: <UsedCar />,
    },
    {
      path: "/dashboard/admin/manage_seller_car",
      element: <ManageSellerCar />,
    },
    {
      path: "/dashboard/admin/order_management",
      element: <ManageOrder />,
    },
  ],
};

export default AdminRoutes;

/** @format */

import { Navigate } from "react-router-dom";
import Dashboard from "../Layouts/Dashboard/Dashboard";
import AddNewCar from "../Layouts/Dashboard/GroupDash/Admin/Sections/AddNewCar";
import RecentlyAddedCar from "../Layouts/Dashboard/GroupDash/Admin/Sections/RecentlyAddedCar";
import Analytics from "../Layouts/Dashboard/GroupDash/Admin/Sections/Analytics";

const AdminRoutes = {
  path: "/dashboard/admin",
  element: <Dashboard />,
  children: [
    {
      path: "/dashboard/admin",
      element: <Navigate to="/dashboard/admin/add_new_car" />,
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
      element: <Analytics />,
    },
  ],
};

export default AdminRoutes;

/** @format */

import { Navigate } from "react-router-dom";
import Dashboard from "../Layouts/Dashboard/Dashboard";
import AddNewCar from "../Layouts/Dashboard/GroupDash/Admin/Sections/AddNewCar";
import RecentlyAddedCar from "../Layouts/Dashboard/GroupDash/Admin/Sections/RecentlyAddedCar";
import Analytics from "../Layouts/Dashboard/GroupDash/Admin/Sections/Analytics";
import RecentCarDetails from "../Layouts/Dashboard/GroupDash/Admin/Sections/RecentCarDetails";
import UpcomingCar from "../Layouts/Dashboard/GroupDash/Admin/Sections/upcomingCar";
import UsedCar from "../Layouts/Dashboard/GroupDash/Admin/Sections/UsedCar";

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
      path: "/dashboard/admin/recently_added_car/:id",
      element: <RecentCarDetails />,
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
    {
      path:"/dashboard/admin/upcoming_car",
      element: <UpcomingCar></UpcomingCar>
    },
    {
      path:"/dashboard/admin/used_car",
      element: <UsedCar/>
    }
  ],
};

export default AdminRoutes;

/** @format */

import AdminDashboard from "../Layouts/Dashboard/AdminDashboard/AdminDashboard";
import AddNewCar from "../Layouts/Dashboard/AdminDashboard/Sections/AddNewCar";
import RecentlyAddedCar from "../Layouts/Dashboard/AdminDashboard/Sections/RecentlyAddedCar";

const AdminRoutes = {
  path: "/dashboard/admin",
  element: <AdminDashboard />,
  children: [
    { path: "/dashboard/admin/add_new_car", element: <AddNewCar /> },
    {
      path: "/dashboard/admin/recently_added_car",
      element: <RecentlyAddedCar />,
    },
  ],
};

export default AdminRoutes;

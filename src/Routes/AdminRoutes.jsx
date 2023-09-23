/** @format */

import AdminDashboard from "../Layouts/Dashboard/AdminDashboard/AdminDashboard";
import AddNewCar from "../Layouts/Dashboard/AdminDashboard/Sections/AddNewCar";

const AdminRoutes = {
  path: "/dashboard/admin",
  element: <AdminDashboard />,
  children: [{ path: "/dashboard/admin/add_new_car", element: <AddNewCar /> }],
};

export default AdminRoutes;

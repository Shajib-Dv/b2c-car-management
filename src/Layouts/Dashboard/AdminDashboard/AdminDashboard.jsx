/** @format */

import { Outlet } from "react-router-dom";
import {
  PiArrowFatLinesRightFill,
  PiArrowFatLinesLeftFill,
} from "react-icons/pi";
import { MdOutlineCarRepair, MdOutlineCarRental } from "react-icons/md";
import { useState } from "react";
import ActiveDashLink from "../ActiveDashLink";

const AdminDashboard = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="drawer lg:drawer-open">
      <input id="admin_drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center min-h-screen">
        <Outlet />
        <label
          onClick={() => setIsOpen(true)}
          htmlFor="admin_drawer"
          className="h-[100vh] lg:hidden center-itm justify-center border-l-4 border-l-green-600 absolute left-0"
        >
          <span className="h-24 w-8  center-itm justify-center bg-green-600 btn-dr">
            <PiArrowFatLinesRightFill className="text-2xl text-white" />
          </span>
        </label>
      </div>
      <div className="drawer-side">
        <div className="menu w-80 min-h-full bg-base-200 relative">
          <div className="py-10 space-y-4 flex flex-col">
            <ActiveDashLink to="/dashboard/admin/add_new_car">
              <MdOutlineCarRepair className="text-2xl" /> Add New Car
            </ActiveDashLink>
            <ActiveDashLink to="/dashboard/admin/recently_added_car">
              <MdOutlineCarRental className="text-2xl" /> Recently Added Car
            </ActiveDashLink>
          </div>
          <label
            onClick={() => setIsOpen(false)}
            htmlFor="admin_drawer"
            className={`lg:hidden drawer-overlay absolute right-0 h-screen border-r-4 border-green-600 center-itm justify-center ${
              isOpen ? "mr-0" : "mr-32"
            }`}
          >
            <span className="h-24 w-8  center-itm justify-center bg-green-600 btn-dr -mr-10">
              <PiArrowFatLinesLeftFill className="text-2xl text-white" />
            </span>
          </label>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;

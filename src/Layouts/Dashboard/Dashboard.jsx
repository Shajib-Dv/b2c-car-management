/** @format */

import { Link, Outlet } from "react-router-dom";
import {
  PiArrowFatLinesRightFill,
  PiArrowFatLinesLeftFill,
} from "react-icons/pi";
import { BiSolidHomeCircle } from "react-icons/bi";
import { useState } from "react";
import AdminLinks from "./GroupDash/Admin/AdminLinks";
import UserLinks from "./GroupDash/User/UserLinks";
import useAuth from "../../hooks/useAuth";
const Dashboard = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { testRole } = useAuth();
  return (
    <div className="drawer lg:drawer-open h-full">
      <input id="admin_drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        <Outlet />
        <label
          onClick={() => setIsOpen(true)}
          htmlFor="admin_drawer"
          className="h-[100vh] lg:hidden center-itm justify-center border-l-4 border-l-green-600 fixed left-0 top-0"
        >
          <span className="h-24 w-8  center-itm justify-center bg-green-600 btn-dr">
            <PiArrowFatLinesRightFill className="text-2xl text-white" />
          </span>
        </label>
      </div>
      <div className="drawer-side">
        <div className="menu flex flex-col justify-between w-80 min-h-full bg-base-200 relative">
          <div className="py-10 space-y-4 flex flex-col">
            {testRole?.role === "admin" ? (
              <AdminLinks />
            ) : (
              testRole?.role === "user" && <UserLinks />
            )}
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
          <Link to="/">
            <BiSolidHomeCircle className="text-5xl text-green-600" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

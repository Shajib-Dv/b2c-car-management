/** @format */

import {
  MdOutlineCarRepair,
  MdOutlineCarRental,
  MdReport,
} from "react-icons/md";
import { FaChartLine } from "react-icons/fa";
import { TbReportMoney } from "react-icons/tb";
import { BsCardChecklist } from "react-icons/bs";
import { BiSupport } from "react-icons/bi";
import ActiveDashLink from "../../ActiveDashLink";

const AdminLinks = () => {
  return (
    <>
      <ActiveDashLink to="/dashboard/admin/analytics">
        <FaChartLine className="text-2xl text-green-600" /> Analytics
      </ActiveDashLink>

      <ActiveDashLink to="/dashboard/admin/seller_update">
        <TbReportMoney className="text-2xl text-green-600" /> Seller Update
      </ActiveDashLink>

      <ActiveDashLink to="/dashboard/admin/add_new_car">
        <MdOutlineCarRepair className="text-2xl text-green-600" /> Add New Car
      </ActiveDashLink>

      <ActiveDashLink to="/dashboard/admin/recently_added_car">
        <MdOutlineCarRental className="text-2xl text-green-600" /> Recently
        Added
      </ActiveDashLink>

      <ActiveDashLink to="/dashboard/admin/recently_added_car">
        <BsCardChecklist className="text-2xl text-green-600" /> Manage Cars
      </ActiveDashLink>

      <ActiveDashLink to="/dashboard/admin/recently_added_car">
        <BiSupport className="text-2xl text-green-600" /> Support
      </ActiveDashLink>

      <ActiveDashLink to="/dashboard/admin/recently_added_car">
        <MdReport className="text-2xl text-green-600" /> Report
      </ActiveDashLink>
    </>
  );
};

export default AdminLinks;

import {
  MdOutlineCarRepair,
  MdOutlineCarRental,
  MdReport,
} from "react-icons/md";
import { FaChartLine, FaLuggageCart } from "react-icons/fa";
import { TbReportMoney } from "react-icons/tb";
import { BsCardChecklist, BsMinecartLoaded } from "react-icons/bs";
import { BiSupport } from "react-icons/bi";
import { AiFillCar } from "react-icons/ai";
import { FiSettings } from "react-icons/fi";
import ActiveDashLink from "../../ActiveDashLink";

const AdminLinks = ({ sendReport, sendSupport }) => {
  return (
    <>
      <ActiveDashLink to="/dashboard/admin/analytics">
        <FaChartLine className="text-2xl text-green-600" /> Analytics
      </ActiveDashLink>
      <ActiveDashLink to="/dashboard/admin/order_management">
        <BsMinecartLoaded className="text-2xl text-green-600" />Manage Order
      </ActiveDashLink>

      <ActiveDashLink to="/dashboard/admin/seller_update">
        <TbReportMoney className="text-2xl text-green-600" /> Seller Update
      </ActiveDashLink>
      <ActiveDashLink to="/dashboard/admin/manage_seller_car">
        <FiSettings className="text-2xl text-green-600" /> Manage Seller Car
      </ActiveDashLink>

      <ActiveDashLink to="/dashboard/admin/upcoming_car">
        <AiFillCar className="text-2xl text-green-600" /> Upcoming Car
      </ActiveDashLink>

      <ActiveDashLink to="/dashboard/admin/used_car">
        <FaLuggageCart className="text-2xl text-green-600" />
        Used Car
      </ActiveDashLink>

      <ActiveDashLink to="/dashboard/admin/add_new_car">
        <MdOutlineCarRepair className="text-2xl text-green-600" /> Add New Car
      </ActiveDashLink>

      <ActiveDashLink to="/dashboard/admin/recently_added_car">
        <MdOutlineCarRental className="text-2xl text-green-600" /> Recently
        Added
      </ActiveDashLink>

      <ActiveDashLink to="/dashboard/admin/manage_cars">
        <BsCardChecklist className="text-2xl text-green-600" /> Manage Cars
      </ActiveDashLink>

      <button
        onClick={() => sendSupport("support")}
        className="btn-details center-itm gap-3 font-bold text-xl"
      >
        <BiSupport className="text-2xl text-green-600" /> Support
      </button>

      <button
        onClick={() => sendReport("report")}
        className="btn-details center-itm gap-3 font-bold text-xl"
      >
        <MdReport className="text-2xl text-green-600" /> Report
      </button>
    </>
  );
};

export default AdminLinks;

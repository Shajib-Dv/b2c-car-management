/** @format */

import { MdOutlineCarRepair, MdOutlineCarRental } from "react-icons/md";
import ActiveDashLink from "../../ActiveDashLink";

const UserLinks = () => {
  return (
    <>
      <ActiveDashLink to="/dashboard/user/home">
        <MdOutlineCarRepair className="text-2xl" /> Home
      </ActiveDashLink>
      <ActiveDashLink to="/dashboard/user/order_summary">
        <MdOutlineCarRental className="text-2xl" /> Order Summary
      </ActiveDashLink>
    </>
  );
};

export default UserLinks;

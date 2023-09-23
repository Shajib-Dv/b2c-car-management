/** @format */

import { MdOutlineCarRepair, MdOutlineCarRental } from "react-icons/md";
import ActiveDashLink from "../../ActiveDashLink";

const AdminLinks = () => {
  return (
    <>
      <ActiveDashLink to="/dashboard/admin/add_new_car">
        <MdOutlineCarRepair className="text-2xl" /> Add New Car
      </ActiveDashLink>
      <ActiveDashLink to="/dashboard/admin/recently_added_car">
        <MdOutlineCarRental className="text-2xl" /> Recently Added Car
      </ActiveDashLink>
    </>
  );
};

export default AdminLinks;

/** @format */

import { NavLink } from "react-router-dom";

const ActiveDashLink = ({ to, children }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) => (isActive ? "btn-act" : "btn-details")}
    >
      <span className="text-xl font-bold center-itm gap-2 justify-center overflow-hidden">
        {children}
      </span>
    </NavLink>
  );
};

export default ActiveDashLink;

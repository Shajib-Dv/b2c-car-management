import { NavLink } from "react-router-dom";

const ActiveDashLink = ({ to, children }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        isActive ? "btn-details btn-under" : "btn-details"
      }
    >
      <span className="text-xl font-bold center-itm gap-2 justify-start overflow-hidden hover:text-green-600">
        {children}
      </span>
    </NavLink>
  );
};

export default ActiveDashLink;

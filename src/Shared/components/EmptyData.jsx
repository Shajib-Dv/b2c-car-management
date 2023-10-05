/** @format */

import { Link } from "react-router-dom";

const EmptyData = ({ message, reason, to, go }) => {
  return (
    <div className="w-full h-full center-itm justify-center">
      <div className="modal-box mx-auto border border-green-600 bg-green-600">
        <h3 className="font-bold text-lg capitalize">{reason}</h3>
        <p className="py-4 capitalize">{message}</p>
        <div className="modal-action justify-between">
          <Link to={to}>
            <button className="btn-act">{go}</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default EmptyData;

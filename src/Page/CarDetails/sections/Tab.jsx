import React from "react";
import { Link } from "react-router-dom";

const Tab = () => {
  return (
    <div className="mt-5 bg-white border border-[#BFC2C8]">
      {/* <div className='flex gap-5 text-xl font-medium'>
                <Link to="/newCar">NEW CAR <FaChevronDown></FaChevronDown></Link>
                <Link to="/usedCar">USED CAR</Link>
                <Link to="/sellCar">SELL CAR</Link>
                <Link to="/compareCar">COMPARE CAR</Link>
                <Link to="/newsAndReview">NEWS AND CAR</Link>
                <Link to="/more">MORE CAR</Link>
            </div> */}

      <div className="navbar bg-base-100 p-0 min-h-0">
        <div className="">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a>Item 1</a>
              </li>
              <li>
                <a>Parent</a>
                <ul className="p-2">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </li>
              <li>
                <a>Item 3</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex  gap-5  ">
          <ul className="menu menu-horizontal p-0 text-sm font-medium gap-8">
            <li>
              <Link to="/newCar">Baleno</Link>
            </li>
            <li>
              <Link to="/newCar">Price</Link>
            </li>
            <li tabIndex={0}>
              <details>
                <summary>
                  <Link to="/usedCar">Compare</Link>
                </summary>
                <ul className="p-2">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <Link to="/newCar">Specs</Link>
            </li>
            <li>
              <Link to="/newCar">User Reviews</Link>
            </li>
            <li>
              <Link to="/newCar">Images</Link>
            </li>
            <li>
              <Link to="/newCar">Variants</Link>
            </li>
            <li>
              <Link to="/newCar">Videos</Link>
            </li>
            <li>
              <Link to="/newCar">Mileage</Link>
            </li>
            <li tabIndex={0}>
              <details>
                <summary>
                  <Link to="/sellCar">More</Link>
                </summary>
                <ul className="p-2">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </details>
            </li>

            {/* <li><a>Item 3</a></li> */}
          </ul>
        </div>
        {/* <div className="navbar-end">
          <div className="navbar-center hidden lg:flex ">
            <ul className="menu menu-horizontal px-1 text-lg font-medium text-[#6C6C6C]">
              <li tabIndex={0}>
                <details>
                  <summary>Bangalore</summary>
                  <ul className="p-2">
                    <li>
                      <a>Submenu 1</a>
                    </li>
                    <li>
                      <a>Submenu 2</a>
                    </li>
                  </ul>
                </details>
              </li>
            </ul>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Tab;

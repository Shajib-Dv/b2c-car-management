/** @format */

import React from "react";
import { Link } from "react-router-dom";
import { BiSearch } from "react-icons/bi";
import { FaSignOutAlt } from "react-icons/fa";
import "./../css/custom.css";
import useAuth from "../../hooks/useAuth";
import useUserRole from "../../hooks/useUserRole";

const Navbar = () => {
  const { user, logOut, testRole } = useAuth();

  const role = useUserRole();

  const handleLogOut = () => {
    logOut();
  };

  return (
    <div className="mt-5 bg-white">
      <div className="lg:flex justify-between items-center mb-2 px-2 lg:px-0 ">
        <div className="flex justify-center">
          <Link to="/home">
            <img
              src="https://cdn.discordapp.com/attachments/1094651413235253289/1143774205796692061/Group_560.png"
              alt=""
            />
          </Link>
        </div>
        <div className="">
          <form className="lg:w-96 mb-2 mt-2 lg:mb-0 lg:mt-0">
            <label
              htmlFor="default-search"
              className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
            >
              Search
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"></div>
              <input
                type="text"
                id="default-search"
                className=" block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50   "
                placeholder="Search Cars or Brands eg. Swift, or Maruti."
                required
              />
              <Link to="/usedCarFilter">
                <button
                  type="submit"
                  className="text-gray absolute right-2.5 bottom-2.5    font-medium rounded-lg  px-4 py-1 text-2xl  "
                >
                  <BiSearch></BiSearch>
                </button>
              </Link>
            </div>
          </form>
        </div>
        <div className="gap-3 items-center flex justify-center">
          {user ? (
            <div className="center-itm gap-3">
              <Link to={`/dashboard/${role}`} className="btn-details">
                Dashboard
              </Link>
              {user?.photoURL ? (
                <img src={user?.photoURL} alt="user_photo" />
              ) : (
                user?.displayName && (
                  <p className="btn-details">{user?.displayName}</p>
                )
              )}
            </div>
          ) : (
            <img
              src="https://cdn.discordapp.com/attachments/1094651413235253289/1143777982188630077/Resting.png"
              alt="user_photo"
            />
          )}
          <div>
            {user ? (
              <FaSignOutAlt
                onClick={handleLogOut}
                className="text-xl text-green-600 cursor-pointer"
              />
            ) : (
              <div className="flex">
                <Link to="/login">Login</Link>
                <p>/</p>
                <Link to="/register">Register</Link>
              </div>
            )}
          </div>
        </div>
      </div>
      <hr />

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
          <ul className="menu menu-horizontal p-0 text-lg font-medium gap-8">
            {/* <li><a>Item 1</a></li> */}
            <li tabIndex={0}>
              <details>
                <summary>
                  <Link to="/newCar">NEW CAR</Link>
                </summary>
                <ul className="p-2">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </details>
            </li>
            <li tabIndex={0}>
              <details>
                <summary>
                  <Link to="/usedCar">USED CAR</Link>
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
            <li tabIndex={0}>
              <details>
                <summary>
                  <Link to="/sellCar">SELL CAR</Link>
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
            <li tabIndex={0}>
              <details>
                <summary>
                  <Link to="/compareCar">COMPARE CAR</Link>
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
            <li tabIndex={0}>
              <details>
                <summary>
                  <Link to="/newsAndReview">NEWS AND CAR</Link>
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
            <li tabIndex={0}>
              <details>
                <summary>
                  <Link to="/more">MORE</Link>
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
        <div className="navbar-end">
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
        </div>
      </div>
    </div>
  );
};

export default Navbar;

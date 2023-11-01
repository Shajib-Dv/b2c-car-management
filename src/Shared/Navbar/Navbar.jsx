/** @format */

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BiSearch } from "react-icons/bi";
import { CgMenuRound } from "react-icons/cg";
import { FaShoppingCart, FaSignOutAlt, FaTimesCircle } from "react-icons/fa";
import "./../css/custom.css";
import useAuth from "../../hooks/useAuth";
import useCurrentUser from "../../hooks/useCurrentUser";
import getMyCart from "../../utils/getMyCart";

const NavLinks = ({ openOrClose }) => {
  return (
    <>
      {/* <li><a>Item 1</a></li> */}
      <li tabIndex={0}>
        <details>
          <summary>
            <Link onClick={openOrClose} to="/new_car">
              NEW CAR
            </Link>
          </summary>
          <ul className="p-2 w-max capitalize">
            <li>
              <Link onClick={openOrClose} to="/upcoming">
                Upcoming
              </Link>
            </li>
          </ul>
        </details>
      </li>
      <li tabIndex={0}>
        <details>
          <summary>
            <Link onClick={openOrClose} to="/used_car">
              USED CAR
            </Link>
          </summary>
          <ul className="p-2 w-max capitalize">
            <li>
              <Link onClick={openOrClose} to="/used_car_filter">
                Filter car
              </Link>
            </li>
          </ul>
        </details>
      </li>
      <li tabIndex={0}>
        <details>
          <summary>
            <Link onClick={openOrClose} to="/sell_car">
              SELL CAR
            </Link>
          </summary>
          <ul className="p-2 w-max capitalize">
            <li>
              <a>Sell post</a>
            </li>
            <li>
              <a>Notify sell</a>
            </li>
          </ul>
        </details>
      </li>
      <li tabIndex={0}>
        <details>
          <summary>
            <Link onClick={openOrClose} to="/compare_car">
              COMPARE CAR
            </Link>
          </summary>
          <ul className="p-2 w-max capitalize">
            <li>
              <a>Compare by price</a>
            </li>
            <li>
              <a>Compare by rating</a>
            </li>
          </ul>
        </details>
      </li>
      <li tabIndex={0}>
        <details>
          <summary>
            <Link onClick={openOrClose} to="/news_and_review">
              NEWS AND CAR
            </Link>
          </summary>
          <ul className="p-2 w-max capitalize">
            <li>
              <a>New arrived</a>
            </li>
            <li>
              <a>News later</a>
            </li>
          </ul>
        </details>
      </li>
      <li tabIndex={0}>
        <details>
          <summary>
            <Link onClick={openOrClose} to="/more">
              MORE
            </Link>
          </summary>
          <ul className="p-2 w-max capitalize">
            <li>
              <a>Show rooms</a>
            </li>
            <li>
              <a>Service point</a>
            </li>
          </ul>
        </details>
      </li>
      {/* <li><a>Item 3</a></li> */}
    </>
  );
};

const Locations = [
  "Delhi",
  "Mumbai",
  "Bangalore",
  "Kolkata",
  "Chennai",
  "Hyderabad",
  "Jaipur",
  "Agra",
  "Varanasi",
  "Goa",
];

const Navbar = () => {
  const { user, logOut, setSearchCarName } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { currentUser } = useCurrentUser();
  const { myCart } = getMyCart();
  const handleLogOut = () => {
    logOut();
  };

  return (
    <div className="mt-5 bg-white cap">
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
                onChange={(e) => setSearchCarName(e.target.value)}
                className=" block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50   "
                placeholder="Search Cars or Brands eg. Swift, or Maruti."
                required
              />
              <Link to="/used_car_filter">
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

        <div className="gap-3 items-center flex justify-between">
          <div className="dropdown">
            <label
              onClick={() => setIsMenuOpen((prv) => !prv)}
              tabIndex={0}
              className="btn btn-ghost lg:hidden"
            >
              {isMenuOpen ? (
                <FaTimesCircle className="text-2xl text-error" />
              ) : (
                <CgMenuRound className="text-2xl text-green-600" />
              )}
            </label>
            <ul
              tabIndex={0}
              className={`${
                isMenuOpen ? "" : "hidden"
              } menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-[calc(100vw-20px)]`}
            >
              <NavLinks openOrClose={() => setIsMenuOpen((prv) => !prv)} />
            </ul>
          </div>
          <div className="w-fit relative md:mr-4">
            <Link to={"/dashboard/user/my_cart"}>
              <FaShoppingCart className="text-xl text-green-600" />
              <span className="absolute bottom-3 left-3 btn btn-circle bg-base-200 btn-xs btn-ghost text-green-600">
                {(!!user?.email && myCart.length) || 0}
              </span>
            </Link>
          </div>
          <div className="flex items-center gap-3">
            {user ? (
              <div className="center-itm gap-3">
                {currentUser?.role && (
                  <Link
                    to={`/dashboard/${currentUser?.role}`}
                    className="btn-details"
                  >
                    Dashboard
                  </Link>
                )}
                {user?.photoURL ? (
                  <img
                    src={user?.photoURL}
                    alt="user_photo"
                    className="w-12 h-12 rounded-full"
                  />
                ) : (
                  user &&
                  currentUser?.name && (
                    <p className="btn-details">
                      {currentUser?.name || user?.displayName}
                    </p>
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
                  <Link to="/login/google">Login</Link>
                  <p>/</p>
                  <Link to="/register">Register</Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <hr />

      <div className="navbar bg-base-100 p-0 min-h-0">
        <div className="navbar-center hidden lg:flex  gap-5  ">
          <ul className="menu menu-horizontal p-0 text-lg font-medium gap-8">
            <NavLinks />
          </ul>
        </div>
        <div className="navbar-end">
          <div className="navbar-center hidden lg:flex ">
            <ul className="menu menu-horizontal px-1 text-lg font-medium text-[#6C6C6C]">
              <li tabIndex={0}>
                <details>
                  <summary>Bangalore</summary>
                  <ul className="p-2 w-max">
                    {Locations.map((loct) => (
                      <li key={loct}>
                        <a>{loct}</a>
                      </li>
                    ))}
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

import React from "react";
import { Link } from "react-router-dom";

const Tab = ({carName}) => {
  return (
    <div className='mt-5 bg-base-300 border border-[#BFC2C8] z-50'>
      {/* <div className='flex gap-5 text-xl font-medium'>
                <Link to="">NEW CAR <FaChevronDown></FaChevronDown></Link>
                <Link to="/usedCar">USED CAR</Link>
                <Link to="/sell_car">SELL CAR</Link>
                <Link to="/compareCar">COMPARE CAR</Link>
                <Link to="/newsAndReview">NEWS AND CAR</Link>
                <Link to="/more">MORE CAR</Link>
            </div> */}

      <div className='navbar bg-base-100 p-0 min-h-0'>
        <div className='w-full overflow-x-auto border border-base-300 flex gap-6 lg:hidden'>
          <p className='btn btn-ghost'>{carName}</p>
          <p className='btn btn-ghost'>price</p>
          <p className='btn btn-ghost'>compare</p>
          <p className='btn btn-ghost'>specs</p>
          <p className='btn btn-ghost'>user review</p>
          <p className='btn btn-ghost'>images</p>
          <p className='btn btn-ghost'>variants</p>
          <p className='btn btn-ghost'>videos</p>
          <p className='btn btn-ghost'>mileage</p>
          <p className='btn btn-ghost'>more</p>
        </div>
        <div className='navbar-center hidden lg:flex  gap-5  '>
          <ul className='menu menu-horizontal p-0 text-sm font-medium gap-8'>
            <li>
              <Link to=''>{carName}</Link>
            </li>
            <li>
              <Link to=''>Price</Link>
            </li>
            <li tabIndex={0}>
              <details>
                <summary>
                  <Link to='/used_car'>Compare</Link>
                </summary>
                <ul className='p-2'>
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
              <Link to=''>Specs</Link>
            </li>
            <li>
              <Link to=''>User Reviews</Link>
            </li>
            <li>
              <Link to=''>Images</Link>
            </li>
            <li>
              <Link to=''>Variants</Link>
            </li>
            <li>
              <Link to=''>Videos</Link>
            </li>
            <li>
              <Link to=''>Mileage</Link>
            </li>
            <li tabIndex={0}>
              <details>
                <summary>
                  <Link to=''>More</Link>
                </summary>
                <ul className='p-2'>
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

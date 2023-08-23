import React from 'react';
import { Link } from 'react-router-dom';
import { BiSearch } from 'react-icons/bi';
import './../css/custom.css'

const Navbar = () => {
    return (
        <div className='mt-5'>
            <div className='flex justify-between items-center mb-2'>
                <div className=''>
                    <img src="https://cdn.discordapp.com/attachments/1094651413235253289/1143774205796692061/Group_560.png" alt="" />
                </div>
                <div className=''>

                    <form className='cWidth'>
                        <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                {/* <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                </svg> */}
                            </div>
                            <input type="search" id="default-search" className=" block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50  dark:text-white " placeholder="Search Mockups, Logos..." required />
                            <button type="submit" className="text-gray absolute right-2.5 bottom-2.5 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg  px-4 py-1 text-2xl  "><BiSearch></BiSearch></button>
                        </div>
                    </form>

                </div>
                <div className='flex gap-3 items-center'>
                    <img src="https://cdn.discordapp.com/attachments/1094651413235253289/1143777982188630077/Resting.png" alt="" />
                    <div className='flex'>
                        <Link to="/newCar">Login</Link>
                        <p>/</p>
                        <Link to="/newCar">Register</Link>
                    </div>
                </div>
            </div>
            <hr />
    
            <div className='flex gap-5 text-xl font-medium'>
                <Link to="/newCar">NEW CAR</Link>
                <Link to="/usedCar">USED CAR</Link>
                <Link to="/sellCar">SELL CAR</Link>
                <Link to="/compareCar">COMPARE CAR</Link>
                <Link to="/newsAndReview">NEWS AND CAR</Link>
                <Link to="/more">MORE CAR</Link>
            </div>
        </div>
    );
};

export default Navbar;
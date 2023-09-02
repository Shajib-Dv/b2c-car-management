import React from 'react';
import Navbar from '../../../Shared/Navbar/Navbar';
import Footer from '../../../Shared/Footer/Footer';
import { Link, Outlet } from 'react-router-dom';

const Profile = () => {
    return (
        <div className='bg-[#E5E5E5]'>
            <Navbar></Navbar>


            <div className='flex gap-10 mx-20 bg py-10'>
                <div className='flex flex-col gap-5 m-5 bg-white px-5 pt-5 pb-96  w-56 rounded-md shadow-md h-full '>
                    <div>
                        <h1 className='text-lg font-semibold'>Hello User</h1>
                        <p className='text-xs'>My account</p>
                    </div>
                    <Link to="myOrder">My Order</Link>
                    <Link to="ShortlistedVehicles">Shortlisted Vehicles</Link>
                    <Link to="MyVehicles">My Vehicles</Link>
                    <Link to="ProfileSettings">Profile Settings</Link>
                </div>
                <div className='m-5'>
                    <Outlet></Outlet>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Profile;
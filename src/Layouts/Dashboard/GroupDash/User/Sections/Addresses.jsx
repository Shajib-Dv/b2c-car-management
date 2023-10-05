import React from 'react';
import useCurrentUser from '../../../../../hooks/useCurrentUser';
import { CiEdit } from 'react-icons/ci';
import { MdDeleteOutline } from 'react-icons/md';
import { BiSolidBookAdd } from 'react-icons/bi';
import { FaAddressBook } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Addresses = () => {
    const user = useCurrentUser()
    console.log(user)
    return (
        <div className='mt-10 md:mt-[200px] w-full'>
            <h1 className='text-2xl font-bold mb-5 flex gap-2 justify-center items-center'> <span className='text-green-600'><FaAddressBook/></span> My Address Book </h1>
            <div className='flex flex-col gap-5'>
                <div className='border border-green-400 p-5 rounded-md hover:shadow-green-200 hover:shadow-md flex flex-col md:flex-row justify-between'>
                    <div className='flex gap-2 flex-col md:flex-row'>
                        <div className='flex gap-1 font-semibold flex-col md:flex-row'><h1>{user?.currentUser?.name},</h1> <h1>{user?.currentUser?.city},</h1> <h1>{user?.currentUser?.country},</h1> <h1>Mobile:{user?.currentUser?.phone}</h1></div>
                        <div className='bg-green-500 px-2 rounded-md text-white font-semibold text-center'>
                            <h1>Default</h1>
                        </div>
                    </div>
                    <div className='flex gap-3 text-lg justify-center '>
                        <button className='hover:text-green-700'><CiEdit /></button> <button className='hover:text-red-700'><MdDeleteOutline /></button>
                    </div>
                </div>
                <Link>
                    <div className='flex justify-center p-5 border border-green-400 rounded-md hover:shadow-green-200 hover:shadow-md text-lg'>
                        <BiSolidBookAdd />
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default Addresses;
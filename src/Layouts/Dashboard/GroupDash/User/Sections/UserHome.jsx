import React from 'react';
import { Link } from 'react-router-dom';
import { AiFillDollarCircle, AiFillEye } from 'react-icons/ai';
import { RiCopperCoinFill } from 'react-icons/ri';
import { IoIosNotifications } from 'react-icons/io';
import { FaHome} from 'react-icons/fa';

const UserHome = () => {
    return (
        <div className='mt-10 md:mt-[200px] w-full'>
            <h1 className='text-2xl font-bold mb-5 flex justify-center items-center gap-2'><span className='text-green-600 text-3xl'><FaHome /></span>Home</h1>
            <div className='flex justify-between text-center md:px-20 mt-10'>
                <div>
                    <h1 className='font-bold'>Your Total spend</h1>
                    <h1 className='flex gap-1 items-center justify-center'>500.00<AiFillDollarCircle /></h1>
                </div>
                <div>
                    <h1 className='font-bold'>Points</h1>
                    <h1 className='flex gap-1 items-center justify-center'>200 <RiCopperCoinFill /></h1>
                </div>
                <div>
                    <h1 className='font-bold'>Notifications</h1>
                    <div className="dropdown">
                        <label tabIndex={0} className="m-1 flex gap-1 items-center justify-center"><IoIosNotifications /></label>
                        <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                            <li><a>Item 1</a></li>
                            <li><a>Item 2</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='mt-10'>
                <h1 className='text-center text-lg font-bold'>Explore cars popular by category</h1>
                <div className='mt-5'>

                    <div className='flex gap-10'>
                        <Link href="/portfolio/illustrations" className='border-2 rounded-md border-[#bbb] h-96 w-80 relative bg-[url("https://cdni.autocarindia.com/Utils/ImageResizer.ashx?n=https://cdni.autocarindia.com/ExtraImages/20180726101829_ac10.jpg&w=700&q=90&c=1")] bg-cover hover:text-green-400 text-gray-300'><span className='absolute bottom-4 right-4 font-bold text-xl'>Category</span></Link>
                        <Link href="/portfolio/illustrations" className='border-2 rounded-md border-[#bbb] h-96 w-80 relative bg-[url("https://www.drivespark.com/images/2022-01/bmw-m8-competition-gran-coupe-2.jpg")] bg-cover hover:text-green-400 text-gray-300'><span className='absolute bottom-4 right-4 font-bold text-xl'>Regular</span></Link>
                        <Link href="/portfolio/illustrations" className='border-2 rounded-md border-[#bbb] h-96 w-80 relative bg-[url("https://www.mercedes-benz.co.in/content/india/en/passengercars/_jcr_content/root/responsivegrid/simple_teaser_115569/simple_teaser_item_c.component.damq2.3376218495887.jpg/.A-Class-Image.jpg")] bg-cover hover:text-green-400 text-gray-300'><span className='absolute bottom-4 right-4 font-bold text-xl'>Category</span></Link>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default UserHome;
import React from 'react';
import { BsFillArrowRightSquareFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const UpcomingCar = () => {
    return (
        <div>
            <div className="flex gap-7 items-center px-10 mb-8">
                <h1 className="title">Upcoming Car</h1>
                <Link>
                    <div className="flex gap-2">
                        <h1 className="text-sm mt-1 font-bold text-[#00A541]">
                            View All
                        </h1>
                        <span className="text-[#00A541] text-2xl ">
                            <BsFillArrowRightSquareFill></BsFillArrowRightSquareFill>
                        </span>
                    </div>
                </Link>
            </div>
            <div className='flex flex-col gap-5 md:flex-row md:flex justify-between px-10'>
                <div className='shadow border p-3 rounded-lg flex flex-col gap-2'>
                    <img src="https://cdn.discordapp.com/attachments/1149991717647421440/1151027545114935368/Img_3.png" alt="" />
                    <div>
                        <h1 className='font-bold'>Renault KWID</h1>
                        <p>Rs 4.49 - 5.83 Lakh*</p>
                    </div>
                    <button className='btn-details w-48'>Notify Me</button>
                </div>
                <div className='shadow border p-3 rounded-lg flex flex-col gap-2'>
                    <img src="https://cdn.discordapp.com/attachments/1149991717647421440/1151030760527114291/Img_4.png" alt="" />
                    <div>
                        <h1 className='font-bold'>Renault KWID</h1>
                        <p>Rs 4.49 - 5.83 Lakh*</p>
                    </div>
                    <button className='btn-details w-48'>Notify Me</button>
                </div>
                <div className='shadow border p-3 rounded-lg flex flex-col gap-2'>
                    <img src="https://cdn.discordapp.com/attachments/1149991717647421440/1151030760761983026/Img_5.png" alt="" />
                    <div>
                        <h1 className='font-bold'>Renault KWID</h1>
                        <p>Rs 4.49 - 5.83 Lakh*</p>
                    </div>
                    <button className='btn-details w-48'>Notify Me</button>
                </div>
                <div className='shadow border p-3 rounded-lg flex flex-col gap-2'>
                    <img src="https://cdn.discordapp.com/attachments/1149991717647421440/1151030760984301599/Img_6.png" alt="" />
                    <div>
                        <h1 className='font-bold'>Renault KWID</h1>
                        <p>Rs 4.49 - 5.83 Lakh*</p>
                    </div>
                    <button className='btn-details w-48'>Notify Me</button>
                </div>
            </div>
        </div>
    );
};

export default UpcomingCar;
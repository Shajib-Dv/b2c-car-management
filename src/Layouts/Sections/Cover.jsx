import React from 'react';
import './custom.css'
import { BiSearch } from 'react-icons/bi';

const Cover = () => {
    return (
        <div className='shadow-inner bg-[#FAFAFA] lg:px-20 lg:py-10 p-5'>
            <div className='lg:flex justify-between items-center mb-5 lg:mb-0'>
                <div className='mb-5 lg:mb-0'>
                    <h1 className='text-5xl font-bold mb-5'>Say hello to your next <br /> awesome vehicle</h1>
                    <p className='text-lg'>Featuring Used, Wholesale and Salvage <br /> Cars, Trucks & SUVs for Sale</p>
                    <div className='flex gap-5 mt-5'>
                        <button className='border bg-[#00A541] text-white font-medium px-7 py-2 rounded'>Used Car</button>
                        <button className='border font-medium px-7 py-2 rounded'>New Car</button>
                    </div>
                </div>
                <div className=''>
                    <div className='bg-[#FF7D05] rounded-lg '>
                        <img className='' src="https://cdn.discordapp.com/attachments/1094651413235253289/1143837253987209297/image_25.png" alt="" />
                    </div>
                </div>
            </div>
            <div className='border lg:px-10 lg:py-10 rounded-lg lg:flex lg:gap-9 lg:w-6/12 justify-center lg:absolute lg:-mt-20 bg-[#FAFAFA]'>
                <select className="select select-bordered lg:w-44 lg:max-w-xs">

                    <option disabled selected>BMW</option>
                    <option>Han Solo</option>
                    <option>Greedo</option>
                </select>
                <select className="select select-bordered lg:w-44 lg:max-w-xs">

                    <option disabled selected>BMW</option>
                    <option>Han Solo</option>
                    <option>Greedo</option>
                </select>
                <select className="select select-bordered lg:w-44 lg:max-w-xs">

                    <option disabled selected>BMW</option>
                    <option>Han Solo</option>
                    <option>Greedo</option>
                </select>
                <button className='mt-5 lg:mt-0 border bg-[#00A541] text-white font-medium px-7 py-2 rounded flex items-center'> <span className='text-lg'><BiSearch></BiSearch></span> Search Vehicle</button>
            </div>
            <div className='lg:flex lg:mt-40 lg:gap-10 justify-between h-10 visibility: hidden lg:visibility: visible'>
                <img className='' src="https://media.discordapp.net/attachments/1094651413235253289/1143862788163371149/image_10.png" alt="" />
                <img className='' src="https://media.discordapp.net/attachments/1094651413235253289/1143862787261612084/image_7.png" alt="" />
                <img className='' src="https://media.discordapp.net/attachments/1094651413235253289/1143862787743948870/image_8.png" alt="" />
                <img className='' src="https://media.discordapp.net/attachments/1094651413235253289/1143862788566032445/image_11.png" alt="" />
                <img className='' src="https://media.discordapp.net/attachments/1094651413235253289/1143862788922540062/image_12.png" alt="" />
            </div>
            <div className='mt-3'>
                <h1 className='mb-10'>How It Works</h1>
                <div className='flex justify-between'>
                    <div>
                        <img src="https://media.discordapp.net/attachments/1094651413235253289/1143862786888302733/Group_20025.png" alt="" />
                        <h1 className='mb-16 mt-5 font-semibold'>Choose a location</h1>
                        <p>You submit information about your vehicle.</p>
                    </div>
                    <div>
                        <img src="https://media.discordapp.net/attachments/1094651413235253289/1143862786888302733/Group_20025.png" alt="" />
                        <h1 className='mb-16 mt-5 font-semibold'>Choose a location</h1>
                        <p>You submit information about your vehicle.</p>
                    </div>
                    <div>
                        <img src="https://media.discordapp.net/attachments/1094651413235253289/1143862786888302733/Group_20025.png" alt="" />
                        <h1 className='mb-16 mt-5 font-semibold'>Choose a location</h1>
                        <p>You submit information about your vehicle.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cover;
import React from 'react';

const Cover = () => {
    return (
        <div className=' shadow-inner bg-[#FAFAFA] px-20'>
            <div className='flex justify-between items-center py-8'>
                <div className=''>
                    <h1 className='text-5xl font-bold mb-5'>Say hello to your next <br /> awesome vehicle</h1>
                    <p className='text-lg'>Featuring Used, Wholesale and Salvage <br /> Cars, Trucks & SUVs for Sale</p>
                    <div className='flex gap-5 mt-5'>
                        <button className='border bg-[#00A541] text-white font-medium px-7 py-2 rounded'>Used Car</button>
                        <button className='border font-medium px-7 py-2 rounded'>New Car</button>
                    </div>
                </div>
                <div className=''>
                    <div className='bg-[#FF7D05] rounded-lg relative'>
                        <img className='' src="https://cdn.discordapp.com/attachments/1094651413235253289/1143837253987209297/image_25.png" alt="" />
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Cover;
import React from 'react';
import { AiOutlineLike, AiOutlineDislike } from 'react-icons/ai';
import { BsDot } from 'react-icons/bs';

const ProsCons = ({carName}) => {
    return (
        <div className='px-5 py-10 md:px-10 rounded-lg shadow border'>
            <h1 className='title'>Pros & Cons of {carName}</h1>
            <div className='flex flex-col md:flex md:flex-row mt-10 gap-8'>
                <div className='bg-[#ECF9F1] p-4 rounded-md md:w-6/12 h-96'>
                    <h1 className='font-bold '>Things We Like</h1>
                    <h1 className='text-3xl my-2 text-green-600'><AiOutlineLike/></h1>
                    <div className=' flex flex-col gap-3'>
                        <div className='flex items-center'>
                            <span className='text-green-600 text-3xl'><BsDot/></span>
                            <h1>Spacious interior</h1>
                        </div>
                        <div className='flex '>
                            <span className='text-green-600 text-3xl'><BsDot/></span>
                            <h1>Well built on the inside and out. Fitment quality <br /> feels premium now</h1>
                        </div>
                        <div className='flex items-center'>
                            <span className='text-green-600 text-3xl'><BsDot/></span>
                            <h1>Well-loaded features list</h1>
                        </div>
                        <div className='flex items-center'>
                            <span className='text-green-600 text-3xl'><BsDot/></span>
                            <h1>Well-loaded features list</h1>
                        </div>
                        <div className='flex items-center'>
                            <span className='text-green-600 text-3xl'><BsDot/></span>
                            <h1>Comfortable ride quality even over bad roads</h1>
                        </div>
                    </div>
                </div>
                <div className='bg-[#F8E6E6] p-4 rounded-md md:w-6/12 h-96'>
                    <h1 className='font-bold '>Things We Like</h1>
                    <h1 className='text-3xl my-2 text-[#FF0000]'><AiOutlineDislike/></h1>
                    <div className=' flex flex-col gap-3'>
                        <div className='flex items-center'>
                            <span className='text-[#FF0000] text-3xl'><BsDot/></span>
                            <h1>AMT is good but not as sophisticated as CVT/DCT</h1>
                        </div>
                        <div className='flex '>
                            <span className='text-[#FF0000] text-3xl'><BsDot/></span>
                            <h1>Seat cushioning is very soft which may cause <br /> problems for long drives.</h1>
                        </div>
                        <div className='flex items-center'>
                            <span className='text-[#FF0000] text-3xl'><BsDot/></span>
                            <h1>Boot loading lip is very high</h1>
                        </div>
                        <div className='flex items-center'>
                            <span className='text-[#FF0000] text-3xl'><BsDot/></span>
                            <h1>Not a sporty car to drive</h1>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProsCons;
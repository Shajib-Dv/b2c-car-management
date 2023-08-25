import React from 'react';
import { AiFillStar } from 'react-icons/ai';

const Reviews = () => {
    return (
        <div>
            <div className='lg:px-32 mb-16 font-bold text-3xl'>
                <h1 >Recent reviews</h1>
            </div>
            <div className='flex justify-center gap-10'>
                <div>
                    <img src="https://cdn.discordapp.com/attachments/1094651413235253289/1144634047151222924/Img.png" alt="" />
                    <div className='px-3 mt-2'>
                        <h1 className='mb-2 text-lg font-bold'>2021 Cadillac Escalade</h1>
                        <p className='text-sm text-[#9A9EA7] mb-3'>The 2021 Escalade is a technological showcase <br />and a worthy claimant of the flagship American <br /> luxury vehicle title.</p>
                        <div className='flex justify-between'>
                            <div className='flex gap-3 items-center'>
                                <img className='w-9 h-9' src="https://cdn.discordapp.com/attachments/1094651413235253289/1144634411661406288/Oval.png" alt="" />
                                <div>
                                    <h1>Hironaka Hiroe</h1>
                                    <p>Chief Editor</p>
                                </div>
                            </div>
                            <div className='flex items-center gap-1'>
                                <span className='text-[#EF8354]'><AiFillStar></AiFillStar></span>
                                <h1 className='font-bold'>4.91</h1>
                                <p className='text-[#9A9EA7]'>(98)</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <img src="https://cdn.discordapp.com/attachments/1094651413235253289/1144634046597574726/Img_1.png" alt="" />
                    <div className='px-3 mt-2'>
                        <h1 className='mb-2 text-lg font-bold'>2021 Cadillac Escala</h1>
                        <p className='text-sm text-[#9A9EA7] mb-3'>The 2021 Escalade is a technological showcase <br />and a worthy claimant of the flagship American <br /> luxury vehicle title.</p>
                        <div className='flex justify-between'>
                            <div className='flex gap-3 items-center'>
                                <img className='w-9 h-9' src="https://cdn.discordapp.com/attachments/1094651413235253289/1144636886434988183/Oval_Copy.png" alt="" />
                                <div>
                                    <h1>Hironaka Hiroe</h1>
                                    <p>Chief Editor</p>
                                </div>
                            </div>
                            <div className='flex items-center gap-1'>
                                <span className='text-[#EF8354]'><AiFillStar></AiFillStar></span>
                                <h1 className='font-bold'>4.91</h1>
                                <p className='text-[#9A9EA7]'>(98)</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <img src="https://cdn.discordapp.com/attachments/1094651413235253289/1144634046878597201/Img_2.png" alt="" />
                    <div className='px-3 mt-2'>
                        <h1 className='mb-2 text-lg font-bold'>2021 Hyundai Elantra</h1>
                        <p className='text-sm text-[#9A9EA7] mb-3'>The 2021 Escalade is a technological showcase <br />and a worthy claimant of the flagship American <br /> luxury vehicle title.</p>
                        <div className='flex justify-between'>
                            <div className='flex gap-3 items-center'>
                                <img className='w-9 h-9' src="https://cdn.discordapp.com/attachments/1094651413235253289/1144636886153973780/Oval_Copy_2.png" alt="" />
                                <div>
                                    <h1>Hironaka Hiroe</h1>
                                    <p>Chief Editor</p>
                                </div>
                            </div>
                            <div className='flex items-center gap-1'>
                                <span className='text-[#EF8354]'><AiFillStar></AiFillStar></span>
                                <h1 className='font-bold'>4.91</h1>
                                <p className='text-[#9A9EA7]'>(98)</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Reviews;
import React from 'react';

const FooterCoaver = () => {
    return (
        <div className='bg-[url("https://cdn.discordapp.com/attachments/1094651413235253289/1144638693357932764/Group_618.png")] bg-cover rounded-3xl '>
            <div className='px-36 py-16 flex'>
                <div className='text-white'>
                    <h1 className='text-2xl font-bold mb-5'>Bid on any vehicle, each time, everywhere</h1>
                    <p className='mb-5 font-light'>J&J Auctions offers a wide range of high-quality used <br />
                        cars available to bid via our online platform or via app</p>
                    <div>
                        <div className='flex gap-5'>
                            <img className='w-32' src="https://cdn.discordapp.com/attachments/1094651413235253289/1144639559381028864/Group_14.png" alt="" />
                            <img className='w-32' src="https://cdn.discordapp.com/attachments/1094651413235253289/1144639677261955072/Group_13.png" alt="" />
                        </div>
                    </div>
                </div>
                <div className='lg:absolute lg:-mt-32 lg:pl-96 lg:ml-96 '>
                    <img src="https://cdn.discordapp.com/attachments/1094651413235253289/1144640793471094994/Frame.png" alt="" />
                </div>
            </div>
        </div>
    );
};

export default FooterCoaver;
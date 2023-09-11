import React from 'react';

const UsedCardByCity = () => {
    return (
        <div className='py-16 md:px-10 '>
            <div className='flex justify-between items-center'>
                <div>
                    <h1 className='title'>Used cars in India by city</h1>
                </div>
                <div><select className="select select-bordered w-full max-w-xs md:w-80">
                    <option disabled selected>Enter your city</option>
                    <option>Han Solo</option>
                    <option>Greedo</option>
                </select></div>
            </div>
            <div className='grid grid-cols-6 gap-10 justify-items-center mt-10'>
                <div className=' w-full py-4 flex flex-col gap-2 items-center border border-[#FF7D05] rounded-lg'>
                    <img src="https://media.discordapp.net/attachments/1149991717647421440/1150673684273582171/Vector.png" alt="" />
                    <p>Used cars in</p>
                    <h1 className='font-bold'>Ahmedabad</h1>
                </div>
                <div className=' w-full py-4 flex flex-col gap-2 items-center border border-[#FF7D05] rounded-lg'>
                    <img src="https://media.discordapp.net/attachments/1149991717647421440/1150673581022392330/Vector_1.png" alt="" />
                    <p>Used cars in</p>
                    <h1 className='font-bold'>Bangalore</h1>
                </div>
                <div className=' w-full py-4 flex flex-col gap-2 items-center border border-[#FF7D05] rounded-lg'>
                    <img src="https://media.discordapp.net/attachments/1149991717647421440/1150673606511181855/Vector_2.png" alt="" />
                    <p>Used cars in</p>
                    <h1 className='font-bold'>Chennai</h1>
                </div>
                <div className=' w-full py-4 flex flex-col gap-2 items-center border border-[#FF7D05] rounded-lg'>
                    <img src="https://media.discordapp.net/attachments/1149991717647421440/1150673614107054190/Vector_3.png" alt="" />
                    <p>Used cars in</p>
                    <h1 className='font-bold'>Delhi NCR</h1>
                </div>
                <div className=' w-full py-4 flex flex-col gap-2 items-center border border-[#FF7D05] rounded-lg'>
                    <img src="https://media.discordapp.net/attachments/1149991717647421440/1150673619140214785/Vector_4.png" alt="" />
                    <p>Used cars in</p>
                    <h1 className='font-bold'>Hyderabad</h1>
                </div>
                <div className=' w-full py-4 flex flex-col gap-2 items-center border border-[#FF7D05] rounded-lg'>
                    <img src="https://cdn.discordapp.com/attachments/1149991717647421440/1150680949617606747/Group_19591.png" alt="" />
                    <p>Used cars in</p>
                    <h1 className='font-bold'>Jaipur</h1>
                </div>
                <div className=' w-full py-4 flex flex-col gap-2 items-center border border-[#FF7D05] rounded-lg'>
                    <img src="https://media.discordapp.net/attachments/1149991717647421440/1150673631312089179/Vector_6.png" alt="" />
                    <p>Used cars in</p>
                    <h1 className='font-bold'>Agra</h1>
                </div>
                <div className=' w-full py-4 flex flex-col gap-2 items-center border border-[#FF7D05] rounded-lg'>
                    <img src="https://media.discordapp.net/attachments/1149991717647421440/1150673639876857856/Vector_7.png" alt="" />
                    <p>Used cars in</p>
                    <h1 className='font-bold'>Kolkata</h1>
                </div>
                <div className=' w-full py-4 flex flex-col gap-2 items-center border border-[#FF7D05] rounded-lg'>
                    <img src="https://media.discordapp.net/attachments/1149991717647421440/1150673651625115719/Vector_10.png" alt="" />
                    <p>Used cars in</p>
                    <h1 className='font-bold'>Mumbai</h1>
                </div>
                <div className=' w-full py-4 flex flex-col gap-2 items-center border border-[#FF7D05] rounded-lg'>
                    <img src="https://media.discordapp.net/attachments/1149991717647421440/1150673651625115719/Vector_10.png" alt="" />
                    <p>Used cars in</p>
                    <h1 className='font-bold'>Mumbai</h1>
                </div>
                <div className=' w-full py-4 flex flex-col gap-2 items-center border border-[#FF7D05] rounded-lg'>
                    <img src="https://media.discordapp.net/attachments/1149991717647421440/1150673666376486922/Vector_11.png" alt="" />
                    <p>Used cars in</p>
                    <h1 className='font-bold'>Noida</h1>
                </div>
                <div className=' w-full py-4 flex flex-col gap-2 items-center border border-[#FF7D05] rounded-lg'>
                    <img src="https://media.discordapp.net/attachments/1149991717647421440/1150673684273582171/Vector.png" alt="" />
                    <p>Used cars in</p>
                    <h1 className='font-bold'>Jaipur</h1>
                </div>
            </div>
        </div>
    );
};

export default UsedCardByCity;
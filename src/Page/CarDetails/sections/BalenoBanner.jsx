import React from "react";
import { GrLocation } from "react-icons/gr";

const BalenoBanner = () => {
  return (
    <div className='shadow-md rounded-lg px-3 py-5'>
      <h1 className='text-2xl font-bold'>
        Baleno price in <br />
        nearby cities
      </h1>
      <div className='overflow-x-auto w-full'>
        <table className='table min-w-max'>
          {/* head */}
          <thead>
            <tr>
              <th>City</th>
              <th>Ex-Showroom Price</th>
            </tr>
          </thead>
          <tbody>
            <tr className='font-semibold'>
              <td className='text-[#00A541]'>Gandhinagar</td>
              <td> ₹ 6.35 - 9.49 Lakh</td>
            </tr>
            <tr className='font-semibold'>
              <td className='text-[#00A541]'>Anand</td>
              <td> ₹ 6.35 - 9.49 Lakh</td>
            </tr>
            <tr className='font-semibold'>
              <td className='text-[#00A541]'>Mehsana</td>
              <td> ₹ 6.35 - 9.49 Lakh</td>
            </tr>
            <tr className='font-semibold'>
              <td className='text-[#00A541]'>Himatnagar</td>
              <td> ₹ 6.35 - 9.49 Lakh</td>
            </tr>
            <tr className='font-semibold'>
              <td className='text-[#00A541]'>Surendranagar</td>
              <td> ₹ 6.35 - 9.49 Lakh</td>
            </tr>
            <tr className='font-semibold'>
              <td className='text-[#00A541]'>Vadodara</td>
              <td> ₹ 6.35 - 9.49 Lakh</td>
            </tr>
            <tr className='font-semibold'>
              <td className='text-[#00A541]'>Patan</td>
              <td> ₹ 6.35 - 9.49 Lakh</td>
            </tr>
            <tr className='font-semibold'>
              <td className='text-[#00A541]'>Godhra</td>
              <td> ₹ 6.35 - 9.49 Lakh</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className='px-4 '>
        <h1 className='text-[#9A9EA7] mt-4'>Choose your city</h1>
        <div className='flex gap-5 items-center border px-5 py-4 rounded-lg mt-3'>
          <p className=' text-3xl'>
            <GrLocation />
          </p>
          <p>Ahmedabad</p>
        </div>
      </div>
    </div>
  );
};

export default BalenoBanner;

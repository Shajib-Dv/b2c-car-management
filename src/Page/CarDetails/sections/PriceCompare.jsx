import React, { useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";

const PriceCompare = ({carName}) => {
  const [option, setOption] = useState("A");
  const handleOptionSelect = (option) => {
    setOption(option);
  };

  return (
    <div className='rounded-lg shadow border '>
      <div className='px-10 py-10'>
        <h1 className='text-xl font-bold mb-3'>{carName} Price</h1>
        <p>
          The price of {carName} starts at Rs. 6.35 Lakh and goes upto Rs.
          9.49 Lakh. {carName} is offered in 7 variants - the base model of
          Baleno is Sigma and the top variant {carName} Alpha AMT which
          comes at a price tag of Rs. 9.49 Lakh
        </p>
      </div>
      <div className='center-itm justify-between mt-8 min-w-max md:px-10'>
        <button
          onClick={() => handleOptionSelect("A")}
          className={`flex-1 pb-3 ${option === "A" && "btn-under"}`}
        >
          Petrol Version
        </button>
        <button
          onClick={() => handleOptionSelect("B")}
          className={`flex-1 pb-3 ${option === "B" && "btn-under"}`}
        >
          Automatic Version
        </button>
      </div>
      <hr />
      <div className='overflow-x-auto lg:px-10 hidden-scroll'>
        <table className='table min-w-max'>
          {/* head */}
          <thead>
            <tr>
              <th>Variant</th>
              <th>Ex-Showroom Price</th>
              <th></th>
              <th>Compare</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr>
              <td>
                <div>
                  <h1 className='font-bold'>Baleno Sigma</h1>
                  <p className='text-[#9A9EA7]'>
                    1197 cc, Manual, Petrol, 22.35 kmpl
                  </p>
                  <p>2 months waiting</p>
                </div>
              </td>
              <td>
                <div>
                  <h1 className='font-bold'>₹ 6.35 Lakh*</h1>
                  <p className='text-[#9A9EA7]'>Get On Road Price</p>
                </div>
              </td>
              <td>
                <button className='btn-act'>Check April Offers</button>
              </td>
              <td>
                <label>
                  <input type='checkbox' className='checkbox' />
                </label>
              </td>
            </tr>
            {/* row 2 */}
            <tr className='hover'>
              <td>
                <div>
                  <h1 className='font-bold'>Baleno Sigma</h1>
                  <p className='text-[#9A9EA7]'>
                    1197 cc, Manual, Petrol, 22.35 kmpl
                  </p>
                  <p>2 months waiting</p>
                </div>
              </td>
              <td>
                <div>
                  <h1 className='font-bold'>₹ 6.35 Lakh*</h1>
                  <p className='text-[#9A9EA7]'>Get On Road Price</p>
                </div>
              </td>
              <td>
                <button className='btn-act'>Check April Offers</button>
              </td>
              <td>
                <label>
                  <input type='checkbox' className='checkbox' />
                </label>
              </td>
            </tr>
            {/* row 3 */}
            <tr>
              <td>
                <div>
                  <h1 className='font-bold'>Baleno Sigma</h1>
                  <p className='text-[#9A9EA7]'>
                    1197 cc, Manual, Petrol, 22.35 kmpl
                  </p>
                  <p>2 months waiting</p>
                </div>
              </td>
              <td>
                <div>
                  <h1 className='font-bold'>₹ 6.35 Lakh*</h1>
                  <p className='text-[#9A9EA7]'>Get On Road Price</p>
                </div>
              </td>
              <td>
                <button className='btn-act'>Check April Offers</button>
              </td>
              <td>
                <label>
                  <input type='checkbox' className='checkbox' />
                </label>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <hr />
      <div className='px-10 py-4'>
        <button className='text-green-500 font-semibold flex items-center gap-5'>
          Show Less Variants{" "}
          <span>
            <IoMdArrowDropdown />
          </span>
        </button>
      </div>
    </div>
  );
};

export default PriceCompare;

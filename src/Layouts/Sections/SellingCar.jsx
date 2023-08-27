/** @format */

import React from "react";

const SellingCar = () => {
  return (
    <div className="lg:py-20">
      <div className="lg:flex justify-center items-center gap-16 p-5 lg:p-0">
        <div className="flex flex-col gap-5 items-start">
          <h1 className="text-2xl font-bold">Selling a car? We’re buying!</h1>
          <p>
            Book an appointment for free car inspection and <br /> sell it
            instantly on the same day.
          </p>
          <button className="border border-[#00A541] px-5 py-1 font-medium rounded-md">
            SELL MY CAR
          </button>
        </div>
        <div>
          <img
            src="https://cdn.discordapp.com/attachments/1094651413235253289/1144547473738711080/image_29.png"
            alt=""
          />
        </div>
      </div>
      {/* <div className="bg-[url('https://cdn.discordapp.com/attachments/1094651413235253289/1144549296734212116/image_30.png')] bg-cover flex flex-col items-center py-16 text-white gap-2 ">
                
            </div> */}
      <div className="relative bg-cover bg-center h-64 bg-[url('https://cdn.discordapp.com/attachments/1094651413235253289/1144549296734212116/image_30.png')] ">
        <div className="absolute inset-0 bg-[url('https://cdn.discordapp.com/attachments/1094651413235253289/1144552335901728838/Rectangle_126.png')] flex flex-col items-center py-10 text-white gap-2 bg-cover">
          <h1 className="text-4xl font-bold">
            Selling a car? <br />
            We’re buying!
          </h1>
          <p>
            Book an appointment for free car inspection <br /> and sell it
            instantly on the same day.
          </p>
          <button className="text-black border bg-white px-5 py-1 font-medium rounded-md">
            SELL MY CAR
          </button>
        </div>
      </div>
    </div>
  );
};

export default SellingCar;

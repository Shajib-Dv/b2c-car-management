/** @format */

import { useState } from "react";

const CarsLayout = () => {
  return (
    <div className="center-itm gap-4 mt-8">
      <img
        src="https://i.ibb.co/PQXG7TY/Rectangle-178.png"
        alt="car"
        className="w-24"
      />
      <div className="flex-1">
        <h2 className="text-2xl text-gray-400 font-semibold">Maruti Ertiga</h2>
        <p className="text-xl font-bold">₹ 8.12 - 10.85 Lakh*</p>
      </div>
    </div>
  );
};

const TrendingCarBanner = () => {
  const [showMore, setShowMore] = useState([1, 2, 3, 4, 5]);
  const [option, setOption] = useState("A");
  const handleOptionSelect = (op) => {
    setOption(op);
  };

  return (
    <div className="border-x-2 shadow-md p-4 mt-5 rounded-md">
      <h2 className="title">Trending Maruti Cars</h2>
      <div className="center-itm justify-between mt-8">
        <button
          onClick={() => handleOptionSelect("A")}
          className={`pb-3 btn-under-b ${option === "A" && "btn-under"}`}
        >
          Popular
        </button>
        <button
          onClick={() => handleOptionSelect("B")}
          className={`pb-3 btn-under-b ${option === "B" && "btn-under"}`}
        >
          Upcoming
        </button>
        <button
          onClick={() => handleOptionSelect("C")}
          className={`pb-3 btn-under-b ${option === "C" && "btn-under"}`}
        >
          All cars
        </button>
      </div>
      <hr className="border-1 md:border-2" />
      <div>
        {showMore.map((itm) => (
          <CarsLayout key={itm} />
        ))}
      </div>
      <hr className="border-2 my-4" />
      <div>
        {showMore.length > 5 ? (
          <button
            onClick={() => setShowMore([1, 2, 3, 4, 5])}
            className="font-bold text-green-600 "
          >
            Viwe less
          </button>
        ) : (
          <button
            onClick={() => setShowMore((prev) => [...prev, prev++, prev++])}
            className="font-bold text-green-600 "
          >
            Viwe All Maruti Cars
          </button>
        )}
      </div>
    </div>
  );
};

export default TrendingCarBanner;

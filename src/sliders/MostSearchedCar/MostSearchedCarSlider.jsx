/** @format */

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";
import { Link } from "react-router-dom";

const carsInfo = [
  {
    id: 1,
    img: "https://i.ibb.co/qrm9dTZ/recar1.png",
    name: "Toyota Land Cruiser",
    price: 12,
  },
  {
    id: 2,
    img: "https://i.ibb.co/jM7FFdC/recar2.png",
    name: "Hyundai Nexo",
    price: 127,
  },
  {
    id: 3,
    img: "https://i.ibb.co/wLWDpFL/recar3.png",
    name: "Volkswagen Virtus",
    price: 17,
  },
  {
    id: 4,
    img: "https://i.ibb.co/qrm9dTZ/recar1.png",
    name: "Toyota Land Cruiser",
    price: 12,
  },
  {
    id: 6,
    img: "https://i.ibb.co/wLWDpFL/recar3.png",
    name: "Volkswagen Virtus",
    price: 17,
  },
  {
    id: 5,
    img: "https://i.ibb.co/jM7FFdC/recar2.png",
    name: "Hyundai Nexo",
    price: 127,
  },
];

const MostSearchedCarSlider = () => {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={0}
        loop={true}
        autoplay={true}
        navigation={true}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 20,
          },
        }}
        modules={[Navigation, Autoplay]}
        className="mySwiper h-fit"
      >
        {carsInfo.map((car) => (
          <SwiperSlide
            key={car.id}
            className="ml-2 bg-base-100 border rounded-md p-4"
          >
            <img src={car.img} alt="" />
            <div className="text-black">
              <h1 className="font-bold text-xl">{car.name}</h1>
              <p className="text-xl font-light">
                Rs {car.price} - {Math.round(Math.random() * 500)} Lakh*
              </p>
              <div className="my-4">
                <Link to={"/"} className="btn-details">
                  View All Offers
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default MostSearchedCarSlider;

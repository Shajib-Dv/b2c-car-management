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
    img: "https://i.ibb.co/rvQbGPW/dubblecar.png",
    name1: "Toyota Land Cruiser",
    name2: "Toyota Land Cruiser",
    model1: "MTV1",
    model2: "MTV2",
    price1: 12,
    price2: 32,
  },
  {
    id: 2,
    img: "https://i.ibb.co/rvQbGPW/dubblecar.png",
    name1: "Hyundai",
    name2: "Hyundai Nxt",
    model1: "MTV1",
    model2: "MTV2",
    price1: 127,
    price2: 327,
  },
  {
    id: 3,
    img: "https://i.ibb.co/rvQbGPW/dubblecar.png",
    name1: "Virtus",
    name2: "Volkswagen Virtus",
    model1: "MTV1",
    model2: "MTV2",
    price1: 17,
    price2: 37,
  },
  {
    id: 4,
    img: "https://i.ibb.co/rvQbGPW/dubblecar.png",
    name1: "Toyota Cruiser",
    name2: "Toyota Land",
    model1: "MTV1",
    model2: "MTV2",
    price1: 12,
    price2: 32,
  },
  {
    id: 6,
    img: "https://i.ibb.co/rvQbGPW/dubblecar.png",
    name1: "Volkswagen",
    name2: "Volkswagen Virtus",
    model1: "MTV1",
    model2: "MTV2",
    price1: 17,
    price2: 37,
  },
  {
    id: 5,
    img: "https://i.ibb.co/rvQbGPW/dubblecar.png",
    name1: "Nexo",
    name2: "Hyundai Nexo",
    model1: "MTV1",
    model2: "MTV2",
    price1: 127,
    price2: 327,
  },
];
const CompareCarsSlider = () => {
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={0}
        loop={true}
        autoplay={true}
        navigation={true}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          390: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
        }}
        modules={[Navigation, Autoplay]}
        className="mySwiper h-fit"
      >
        {carsInfo.map((car) => (
          <SwiperSlide
            key={car.id}
            className="md:ml-2 bg-base-100 border rounded-md p-4"
          >
            <img
              src={car.img}
              alt="car"
              className="w-full md:h-64 object-cover"
            />
            <div className="text-black flex items-center justify-between mt-2">
              <div className="flex-1">
                <p>{car.model1}</p>
                <h1 className="font-bold text-xl">{car.name1}</h1>
                <p className="text-xl font-light">
                  Rs {car.price1} - {Math.round(Math.random() * 500)} Lakh*
                </p>
              </div>
              <div className="flex-1">
                <p>{car.model2}</p>
                <h1 className="font-bold text-xl">{car.name2}</h1>
                <p className="text-xl font-light">
                  Rs {car.price2} - {Math.round(Math.random() * 500)} Lakh*
                </p>
              </div>
            </div>
            <div className="mt-4 flex items-center justify-center w-full">
              <Link to="/" className="btn-details">
                Kia Carens vs Maruti XL6
              </Link>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default CompareCarsSlider;

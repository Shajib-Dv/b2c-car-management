/** @format */

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

const carsInfo = [
  {
    id: 1,
    img: "https://cdn.discordapp.com/attachments/1094651413235253289/1144134548549013534/image_13.png",
    name: "SUV",
    price: 12627,
  },
  {
    id: 2,
    img: "https://cdn.discordapp.com/attachments/1094651413235253289/1144134548783906986/image_14.png",
    name: "Seden",
    price: 12627,
  },
  {
    id: 3,
    img: "https://cdn.discordapp.com/attachments/1094651413235253289/1144134549035569202/image_15.png",
    name: "Pickup",
    price: 12627,
  },
  {
    id: 4,
    img: "https://cdn.discordapp.com/attachments/1094651413235253289/1144134549580812388/image_16.png",
    name: "Hatchback",
    price: 12627,
  },
  {
    id: 5,
    img: "https://cdn.discordapp.com/attachments/1094651413235253289/1144134719127162990/image_17.png",
    name: "Miniven",
    price: 12627,
  },
];

const BodyStyleSlider = () => {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
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
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
        modules={[Navigation, Autoplay]}
        className="mySwiper"
      >
        {carsInfo.map((car) => (
          <SwiperSlide key={car.id}>
            <div>
              <img src={car.img} alt="" />
              <div>
                <h1 className="font-bold">{car.name}</h1>
                <p className="text-xs">{car.price}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default BodyStyleSlider;

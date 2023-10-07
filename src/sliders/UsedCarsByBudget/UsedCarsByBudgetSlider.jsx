import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";
import { Link } from "react-router-dom";

import round from "../../assets/round.png";
import flash from "../../assets/flash.png";
import modem from "../../assets/modem.png";
import ranger from "../../assets/ranger.png";
import seat from "../../assets/seat.png";
import { FaInfoCircle } from "react-icons/fa";

const carsInfo = [
  {
    id: 1,
    img: "https://i.ibb.co/qrm9dTZ/recar1.png",
    name: "Toyota Land Cruiser",
    price: 12,
    icon: [round, flash, modem, ranger, seat],
    features: [
      "Lorem Ipsum is simply dummy",
      "Lorem Ipsum is simply dummy",
      "Lorem Ipsum is simply dummy",
      "Lorem Ipsum is simply dummy",
    ],
  },
  {
    id: 2,
    img: "https://i.ibb.co/jM7FFdC/recar2.png",
    name: "Hyundai Nexo",
    price: 127,
    icon: [round, flash, modem, ranger, seat],
    features: [
      "Lorem Ipsum is simply dummy",
      "Lorem Ipsum is simply dummy",
      "Lorem Ipsum is simply dummy",
      "Lorem Ipsum is simply dummy",
    ],
  },
  {
    id: 3,
    img: "https://i.ibb.co/wLWDpFL/recar3.png",
    name: "Volkswagen Virtus",
    price: 17,
    icon: [round, flash, modem, ranger, seat],
    features: [
      "Lorem Ipsum is simply dummy",
      "Lorem Ipsum is simply dummy",
      "Lorem Ipsum is simply dummy",
      "Lorem Ipsum is simply dummy",
    ],
  },
  {
    id: 4,
    img: "https://i.ibb.co/qrm9dTZ/recar1.png",
    name: "Toyota Land Cruiser",
    price: 12,
    icon: [round, flash, modem, ranger, seat],
    features: [
      "Lorem Ipsum is simply dummy",
      "Lorem Ipsum is simply dummy",
      "Lorem Ipsum is simply dummy",
      "Lorem Ipsum is simply dummy",
    ],
  },
  {
    id: 6,
    img: "https://i.ibb.co/wLWDpFL/recar3.png",
    name: "Volkswagen Virtus",
    price: 17,
    icon: [round, flash, modem, ranger, seat],
    features: [
      "Lorem Ipsum is simply dummy",
      "Lorem Ipsum is simply dummy",
      "Lorem Ipsum is simply dummy",
      "Lorem Ipsum is simply dummy",
    ],
  },
  {
    id: 5,
    img: "https://i.ibb.co/jM7FFdC/recar2.png",
    name: "Hyundai Nexo",
    price: 127,
    icon: [round, flash, modem, ranger, seat],
    features: [
      "Lorem Ipsum is simply dummy",
      "Lorem Ipsum is simply dummy",
      "Lorem Ipsum is simply dummy",
      "Lorem Ipsum is simply dummy",
    ],
  },
];
const UsedCarsByBudgetSlider = () => {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={4}
        loop={true}
        autoplay={true}
        navigation={true}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
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
            className="md:ml-2 bg-base-100 border rounded-md p-4"
          >
            <img src={car.img} alt="car" className="w-full md:h-64 bg-cover" />
            <div className="text-black">
              <div className="flex items-center justify-between my-4">
                {car?.icon?.map((icon, idx) => (
                  <img key={idx} src={icon} alt="icon" />
                ))}
              </div>
              <h1 className="font-bold text-xl">{car.name}</h1>
              <p className="text-xl font-light">
                Lorem ipsum dolor sit amet, consectetur adipisicing
              </p>

              <ul className="used-ul text-xs list-none flex flex-wrap">
                {car?.features?.map((li, idx) => (
                  <li key={idx}>{li}</li>
                ))}
              </ul>
              <div className="flex mt-2 items-center justify-between">
                <Link to={"/"} className="btn-details font-bold">
                  Rs {car.price} Lakh
                </Link>
                <FaInfoCircle />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default UsedCarsByBudgetSlider;

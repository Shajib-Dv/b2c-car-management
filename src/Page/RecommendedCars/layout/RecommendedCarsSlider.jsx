/** @format */
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

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
const RecommendedCarsSlider = () => {
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
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 20,
          },
        }}
        modules={[Navigation, Autoplay]}
        className="mySwiper"
      >
        {carsInfo.map((car) => (
          <SwiperSlide key={car.id} className="ml-20">
            <img src={car.img} alt="" />
            <div>
              <h1 className="font-bold">{car.name}</h1>
              <p className="text-xs">{car.price}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default RecommendedCarsSlider;

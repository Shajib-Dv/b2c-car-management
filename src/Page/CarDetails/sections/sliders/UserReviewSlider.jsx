/** @format */

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";
import { Rating, Star } from "@smastrom/react-rating";
import { AiOutlineLike, AiOutlineDislike } from "react-icons/ai";

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
const UserReviewSlider = () => {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={0}
        loop={true}
        autoplay={true}
        navigation={true}
        modules={[Navigation, Autoplay]}
        className="mySwiper h-fit"
      >
        {carsInfo.map((car) => (
          <SwiperSlide
            key={car.id}
            className="ml-2 bg-base-100 border rounded-md p-4"
          >
            <h2 className="title pb-10">Overall A Very Good Car</h2>
            <div className="w-24">
              <Rating
                value={Math.random() * 5}
                readOnly
                itemStyles={{
                  itemShapes: Star,
                  activeFillColor: "#ffb700",
                  inactiveFillColor: "#fbf1a9",
                }}
              />
            </div>
            <p className="text-xl font-semibold text-gray-500 py-2">
              Overall A Very Good Car
            </p>
            <p className="py-6">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam
              nesciunt blanditiis mollitia laudantium dolorem et inventore.
              Exercitationem dignissimos vero voluptate laborum nemo! Error
              beatae enim ad odit, ab inventore libero consectetur repudiandae
              culpa, ea veritatis alias nesciunt sequi at, quos nam. Minima
              facilis delectus tenetur est? Vel reprehenderit asperiores velit?
            </p>
            <div>
              <p className="text-xl font-bold">By Shajib Hossain</p>
              <p className="text-gray-500">
                09 Aug 2023 | viewed by {Math.round(Math.random() * 200)}
              </p>
            </div>
            <hr className="my-4" />
            <div className="center-itm md:gap-20 gap-4 text-gray-400">
              <div className="center-itm gap-3">
                <AiOutlineLike />
                <p> 0 likes</p>
              </div>
              <div className="center-itm gap-3">
                <AiOutlineDislike />
                <p> 0 dislikes</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default UserReviewSlider;

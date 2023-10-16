import { FaPen, FaShareAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Rating, Star } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import CarCoverSlider from "./sliders/CarCoverSlider";

const CarCover = ({carInfo,images}) => {
  const {carName,price,location} = carInfo;
  return (
    <div className="rounded-lg shadow-md border-r-2 md:flex gap-10 items-start p-6">
      <div className="flex-1 w-full md:w-1/2">
        <CarCoverSlider images={images}/>
      </div>
      <div className="flex-1 space-y-5">
        <div className="center-itm justify-between">
          <h2 className="title">{carName || 'unknown'}</h2>
          <div className="center-itm gap-4">
            <Link to="/new_car">
              <p className="text-green-600">Change Car</p>
            </Link>
            <FaShareAlt className="text-gray-400 cursor-pointer" />
          </div>
        </div>
        <div className="center-itm md:gap-10 gap-3">
          <div className="w-24">
            <Rating
              value={Math.random() * 5}
              readOnly
              itemStyles={{
                itemShapes: Star,
                activeFillColor: "#ffb700",
                inactiveFillColor: "#f8f3cc",
              }}
            />
          </div>
          <p>{Math.round(Math.random() * 100)} Reviews</p>
          <p>Rate this car {">"}</p>
        </div>
        <div className="center-itm justify-between">
          <h2 className="title">₹  { price || 'unknown' }  Lakh*</h2>
          <p className="text-green-600 cursor-pointer">Get On Road Price</p>
        </div>
        <div className="center-itm gap-5">
          <p>*Ex-showroom Price in</p>
          <p className="center-itm gap-2 text-green-600">
            {location || 'unknown'} <FaPen className="cursor-pointer" />
          </p>
        </div>
        <button className="btn-act">Check April Offers</button>
        <p className="py-4">Don't miss out on the best offers for this month</p>
        <button className="btn-second">Free Test Drive</button>
      </div>
    </div>
  );
};

export default CarCover;

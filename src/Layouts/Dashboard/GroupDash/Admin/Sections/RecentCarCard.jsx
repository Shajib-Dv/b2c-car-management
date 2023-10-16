import { Link } from "react-router-dom";

const RecentCarCard = ({ car, handleModalOpen}) => {
  const { images, basicInfo } = car;
  return (
    <button onClick={()=> handleModalOpen(car)}>
      <div className="w-full bg-transparent shadow-md rounded-md relative group">
        <div className="md:h-64 h-40 overflow-hidden rounded-md relative">
          <img
            src={images[Math.round(Math.random() * (images.length - 1))]}
            alt="car"
            className="h-full w-full object-cover object-center group-hover:scale-105 transition-all duration-1000"
          />
          <div className="absolute top-0 w-full h-full transition-all duration-1000  group-hover:bg-black group-hover:bg-opacity-50"></div>
        </div>
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2">
          <h2 className="title text-white group-hover:text-green-600">
            {basicInfo?.carName}
          </h2>
        </div>
      </div>
    </button>
  );
};

export default RecentCarCard;

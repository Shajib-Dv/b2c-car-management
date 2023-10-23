import { Link } from "react-router-dom";
import getAllSellCar from "../../utils/getAllSellCar";
import EmptyData from "../../Shared/components/EmptyData";
import Loader from "../../Shared/components/Loader";

const SellCar = () => {
  const { sellCarData, loading, refetch } = getAllSellCar();

  const randomImg = (images) =>
    images[Math.floor(Math.random() * (images.length - 1))];

  return (
    <>
      {loading && <Loader />}
      {sellCarData && Array.isArray(sellCarData) && sellCarData.length > 0 ? (
        <div className='grid grid-cols-1 md:grid-cols-4 gap-6 px-10'>
          {sellCarData.filter((car => car?.status === 'approved'))?.map((car) => (
            <div
              className='shadow border p-3 rounded-lg flex flex-col justify-between group'
              key={car?._id}
            >
              <div className='h-40 w-full overflow-hidden rounded-md'>
                <img
                  src={randomImg(car?.images)}
                  alt='car'
                  className='w-full h-full object-cover group-hover:scale-105 transition-all duration-700'
                />
              </div>
              <div>
                <h1 className='font-bold'>
                  {car?.basicInfo?.carName || "unknown"}
                </h1>
                <p className=' mb-4'>Rs {car?.basicInfo?.price} Lakh*</p>
                <button className="btn-details w-48">
                  Add to favorite
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        !loading && (
          <EmptyData
            message={"No cars found"}
            go={"back to home"}
            to={"/home"}
          />
        )
      )}
    </>
  );
};

export default SellCar;

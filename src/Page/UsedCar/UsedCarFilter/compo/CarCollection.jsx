/** @format */

const CarCollection = ({ car }) => {
  const { basicInfo, keySpecifications, images } = car;

  const Features = Object.keys(keySpecifications).slice(0, 3);
  return (
    <div className="card justify-between w-full bg-base-100 border p-2 overflow-hidden">
      <figure className="h-40 rounded-lg object-cover">
        <img src={images[0]} alt="car" />
      </figure>
      <div className="space-y-2">
        <h2 className="title">{basicInfo.carName}</h2>
        <p className="text-gray-400">{basicInfo.locations}</p>
        <div className="center-itm flex-wrap gap-4">
          {Features.map((fc, idx) => (
            <p
              key={idx}
              className="text-xs bg-base-200 rounded-md p-1 text-gray-400"
            >
              {fc} : {keySpecifications[fc]}
            </p>
          ))}
        </div>
        <h2 className="title">Rs {basicInfo.price} Lakh*</h2>
      </div>
      <button className="btn-details">View All Offers</button>
    </div>
  );
};

export default CarCollection;

/** @format */

const CarsImg = [
  "https://i.ibb.co/PQXG7TY/Rectangle-178.png",
  "https://i.ibb.co/wLWDpFL/recar3.png",
];

const CarName = [
  "Renault KWID",
  "Maruti Baleno",
  "Maruti Swift",
  "Tata Altroz",
];

const Features = ["67,000 km", "Diesel", "1st owner"];
const CarCollection = () => {
  const price = (Math.random() * 5).toFixed(2);
  return (
    <div className="card w-full bg-base-100 border p-2 overflow-hidden">
      <figure>
        <img
          src={CarsImg[Math.round(Math.random() * 1)]}
          alt="car"
          className="h-40 rounded-lg"
        />
      </figure>
      <div className="space-y-2">
        <h2 className="title">{CarName[Math.round(Math.random() * 3)]}</h2>
        <p className="text-gray-400">1.2 Revotron XZ Plus</p>
        <div className="center-itm flex-wrap gap-4">
          {Features.map((fc, idx) => (
            <p
              key={idx}
              className="text-xs bg-base-200 rounded-md p-1 text-gray-400"
            >
              {fc}
            </p>
          ))}
        </div>
        <h2 className="title">Rs {price < 1 ? `1.00` : price} Lakh*</h2>
        <button className="btn-details">View All Offers</button>
      </div>
    </div>
  );
};

export default CarCollection;

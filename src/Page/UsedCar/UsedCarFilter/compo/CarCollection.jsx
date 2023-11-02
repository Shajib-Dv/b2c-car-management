/** @format */

import { Link } from "react-router-dom";
import useAuth from "../../../../hooks/useAuth";
import getMyCart from "../../../../utils/getMyCart";
import Swal from "sweetalert2";

const CarCollection = ({ car }) => {
  const { user } = useAuth();
  const { refetch } = getMyCart();
  const { basicInfo, keySpecifications, images } = car;

  const handleAddToCart = (id, price, carName, images, locations) => {
    if (user && user.email) {
      const orderItem = {
        carId: id,
        email: user.email,
        price: price,
        carName: carName,
        images: images,
        locations: locations,
      };
      fetch("http://localhost:3000/carts", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(orderItem),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedId) {
            refetch();
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Car added on the cart.",
              showConfirmButton: false,
              timer: 1500,
            });
          }
        });
    } else {
      Swal.fire({
        title: "Please login to order the car",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Login now!",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: { from: location } });
        }
      });
    }
  };

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
      <div className="flex justify-between items-center flex-wrap gap-2">
        <Link to={`/new_car/details/${car?._id}`} className="btn-details">
          show details
        </Link>
        <button
          className="btn-details"
          onClick={() =>
            handleAddToCart(
              car?._id,
              car?.basicInfo?.price,
              car?.basicInfo?.carName,
              car?.images,
              car?.basicInfo?.locations
            )
          }
        >
          add to cart
        </button>
      </div>
    </div>
  );
};

export default CarCollection;

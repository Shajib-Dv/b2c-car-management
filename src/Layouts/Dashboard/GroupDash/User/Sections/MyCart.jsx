import { GiConfirmed } from "react-icons/gi";
import { FaClipboardList } from "react-icons/fa";
import { FaCartFlatbedSuitcase } from "react-icons/fa6";
import getMyCart from "../../../../../utils/getMyCart";
import Loader from "../../../../../Shared/components/Loader";
import EmptyData from "../../../../../Shared/components/EmptyData";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../../../../hooks/useAuth";
import Swal from "sweetalert2";
import { MdDeleteOutline, MdDeleteSweep } from "react-icons/md";
import { useState } from "react";
import useCurrentUser from "../../../../../hooks/useCurrentUser";

const MyCart = () => {
    const { myCart, loading, refetch } = getMyCart()
    const { user} = useAuth()
    const {currentUser} = useCurrentUser()
    const navigate = useNavigate();
    const UID = user?.uid.slice(-3)
    console.log(currentUser)
    const generateRandomOrderId = () => {
        const randomOrderId = UID + (Math.floor(Math.random() * 900000) + 100000);
        const orderId = randomOrderId.slice(0, -1);
        return orderId;
    }
    const generateOrderDate = () => {
        const currentDate = new Date();
        const options = { day: '2-digit', month: 'short', year: 'numeric' };
        const formattedDate = currentDate.toLocaleDateString(undefined, options);

        return formattedDate;
    }
    const [orderId, setOrderId] = useState(generateRandomOrderId());
    const [formattedDate, setFormattedDate] = useState(generateOrderDate());

    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://b2c-car-management-server-p6jwvedmy-shajib-dv.vercel.app/delete_item/${id}`, {
                    method: "DELETE",
                })
                    .then((res) => res.json())
                    .then((data) => {
                        //console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire("Deleted!", "Your Car has been deleted.", "success");
                            refetch();
                        }
                    });
            }
        });
    };
    const total = myCart.reduce((total, cart) => total + (parseFloat(cart?.price) || 0), 0).toFixed(2)

    const handleConfirm = () => {
        const processing = 'processing'
        const order = myCart
        const orderInfo = {orderId: orderId, date: formattedDate, status: processing, username: user.displayName, name: currentUser.name, email: user.email, city: currentUser.city,location: currentUser.country, phone: currentUser.phone, totalPrice: total}
        const modifyOrder = {orderInfo, order}
        //console.log(modifyOrder)

        fetch("https://b2c-car-management-server-p6jwvedmy-shajib-dv.vercel.app/order", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(modifyOrder),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.insertedId) {
                    const idsToDelete = myCart.map((item) => item._id);
                    deleteDocuments(idsToDelete);
                    refetch();
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Order Successfully Placed",
                        showConfirmButton: false,
                        timer: 1500,
                    });
                    navigate("/dashboard/user/order_summary") 
                }
            });
    }

    const deleteDocuments = (ids) => {
        ids.forEach((id) => {
          fetch(`https://b2c-car-management-server-p6jwvedmy-shajib-dv.vercel.app/delete_item/${id}`, {
            method: "DELETE",
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.deletedCount > 0) {
               
              }
            });
        });
      };

    console.log(myCart)
    return (
        <div className="mt-10 md:mt-[200px] w-full flex flex-col gap-5">
            <h1 className="text-2xl font-bold mb-5 flex justify-center items-center gap-2">
                <span className="text-green-600 text-3xl">
                    <FaCartFlatbedSuitcase />
                </span>
                My Cart
            </h1>
            {loading && <Loader />}
            {myCart && Array.isArray(myCart) && myCart.length > 0 ? (<div className="hover:shadow-lg">
                <div className="flex justify-between bg-slate-100 border-[1px] p-4 items-center rounded-t-md">
                    <div>
                        <h1 className="font-bold">Order# {orderId}</h1>
                        <h1 className="text-sm">Date Added: {formattedDate}</h1>
                    </div>
                    <div>
                        <button className="btn btn-sm bg-green-300 ">
                            <Link to={"/new_car"}>Discover More</Link>
                        </button>
                    </div>
                    {/* <div>
                        <h1 className="flex items-center gap-1">
                            <span className="text-green-600 text-lg">
                                <GiConfirmed />
                            </span>
                            Completed
                        </h1>
                    </div> */}
                </div>
                <div className="bg-[#FAFAFA] p-4 border-[1px] rounded-b-md flex flex-col gap-2">

                    {
                        myCart.map((cart, index) => (
                            <div key={index}>
                                <div className=" flex justify-between items-center mb-2 py-2">
                                    <h1 className="font-semibold w-1/6">
                                        <div className="flex gap-2">
                                            <button className='hover:text-red-700' onClick={() => handleDelete(cart._id)}><MdDeleteSweep /></button>
                                            <Link className=" text-green-600" to={`/new_car/details/${cart.carId}`}>
                                                {cart?.carName}
                                            </Link>
                                        </div>
                                    </h1>
                                    <h1 className="">{cart?.locations}</h1>
                                    <h1 className="font-semibold">{cart?.price} RS.</h1>
                                </div>
                                <hr />
                            </div>
                        ))
                    }
                    <div className="flex justify-end gap-4 font-bold text-green-600">
                        <h1>Total Price: </h1>
                        <h1>{total} RS.</h1>
                    </div>
                    <div className="flex justify-end">
                        <button onClick={() => handleConfirm()} className="btn-act">Confirm Order</button>
                    </div>

                </div>
            </div>) : (
                !loading && (
                    <EmptyData
                        message={"Nothing is your cart"}
                        go={"Add some cars"}
                        to={"/new_car"}
                    />
                )
            )

            }


        </div>
    );
};

export default MyCart;
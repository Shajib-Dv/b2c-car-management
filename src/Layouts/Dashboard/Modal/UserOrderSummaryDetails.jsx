import React from 'react';
import { GiConfirmed, GiPresent } from "react-icons/gi";
import { MdCancelPresentation, MdPendingActions } from "react-icons/md";
import { RxCrossCircled } from "react-icons/rx";
import { Link } from 'react-router-dom';

const UserOrderSummaryDetails = ({ order, close }) => {
    console.log(order)
    const total = order?.order?.reduce((total, cart) => total + (parseFloat(cart?.price) || 0), 0).toFixed(2)
    return (
        <div className='text-black'>
            <div className="hover:shadow-lg">
                <div className="flex justify-between bg-slate-100 border-[1px] p-4 items-center rounded-t-md">
                    <div>
                        <h1 className="font-bold">Order# {order?.orderInfo?.orderId}</h1>
                        <h1 className="text-sm">Date Added: {order?.orderInfo?.date}</h1>
                    </div>
                    <div>
                        {
                            order?.orderInfo?.status === "processing" ? (
                                <h1 className="flex items-center gap-1">
                                    <span className="text-green-600 text-lg">
                                        <MdPendingActions />
                                    </span>
                                    Processing
                                </h1>
                            ) : order?.orderInfo?.status === "something_wrong" ? (
                                <h1 className="flex items-center gap-1">
                                    <span className="text-red-500 text-lg">
                                        <RxCrossCircled />
                                    </span>
                                    Contact <span className="text-red-500 font-bold"><Link>support</Link></span> or submit a <span className="text-red-500 font-bold"><Link>ticket</Link></span>
                                </h1>
                            ) : order?.orderInfo?.status === "canceled" ? (
                                <h1 className="flex items-center gap-1">
                                    <span className="text-yellow-400 text-lg">
                                        <MdCancelPresentation />
                                    </span>
                                    Canceled Order Again
                                </h1>
                            ) : order?.orderInfo?.status === "confirmed" ? (
                                <h1 className="flex items-center gap-1">
                                    <span className="text-green-600 text-lg">
                                        <GiConfirmed />
                                    </span>
                                    Your Order has been Confirmed
                                </h1>
                            ) : order?.orderInfo?.status === "sent" ? (
                                <h1 className="flex items-center gap-1">
                                    <span className="text-green-600 text-lg">
                                        <GiPresent />
                                    </span>
                                    Your Order On the Way
                                </h1>
                            ) : (
                                <h1 className="flex items-center gap-1">
                                    <span className="text-cyan-400 text-lg">
                                        <MdPendingActions />
                                    </span>
                                    Processing
                                </h1>
                            )
                        }
                    </div>

                </div>
                <div className="bg-[#FAFAFA] p-4 border-[1px] flex flex-col gap-2">
                    {
                        order?.order?.map((cart, index) => (
                            <div key={index}>
                                <div className=" flex justify-between items-center mb-2 py-2">
                                    <h1 className="font-semibold w-1/6">
                                        <div className="flex gap-2">

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
                </div>
                <div className="flex justify-between bg-slate-100 border-[1px] p-4 items-center rounded-b-md">
                    <div>
                        <h1 className="font-bold">Shipping Details:</h1>
                        <h1 className="text-sm">{order?.orderInfo?.name}, {order?.orderInfo?.city},{order?.orderInfo?.location},{order?.orderInfo?.phone}</h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserOrderSummaryDetails;
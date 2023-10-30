import React, { useState } from 'react';
import getOrderListAdmin from '../../../../../utils/getOrderListAdmin';
import { GiConfirmed, GiPresent } from "react-icons/gi";
import { FaClipboardList } from "react-icons/fa";
import { Link } from "react-router-dom";
import { MdCancelPresentation, MdPendingActions } from "react-icons/md";
import { RxCrossCircled } from "react-icons/rx";
import EmptyData from '../../../../../Shared/components/EmptyData';
import Swal from 'sweetalert2';

const ManageOrder = () => {
    const { orderList, loading, refetch } = getOrderListAdmin()
    const [openModal, setOpenModal] = useState(null);
    const [order, setOrder] = useState({});
    const [selectedStatus, setSelectedStatus] = useState('');
    console.log(orderList)
    const handleOpenModal = (order) => {
        setOpenModal(true);
        setOrder(order);
    };

    const closeModal = () => {
        setOpenModal(false);
        setOrder({});
    };

    const handleUpdate = (id) => {
        if (!selectedStatus) {
            alert('Please select a status');
            return;
        }

        fetch(`http://localhost:3000/order_list/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ status: selectedStatus }),
        })
            .then((response) => {
                if (response.ok) {
                    refetch()
                    setSelectedStatus('')
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: `Status Updated ${selectedStatus}`,
                        showConfirmButton: false,
                        timer: 1500
                    })
                } else {
                    console.error('Failed to update order status');
                }
            })
            .catch((error) => {
                console.error('Error updating order status:', error);
            });


    }
    return (
        <>
            <div className="my-10 md:mt-[200px] w-full flex flex-col gap-5">
                <h1 className="text-2xl font-bold mb-5 flex justify-center items-center gap-2">
                    <span className="text-green-600 text-3xl">
                        <FaClipboardList />
                    </span>
                    Manage Order
                </h1>


                {orderList && Array.isArray(orderList) && orderList.length > 0 ? (
                    <>
                        {orderList.map((order, index) => (
                            <div className="hover:shadow-lg" key={index}>
                                <div className="flex justify-between bg-slate-100 border-[1px] p-4 items-center rounded-t-md">
                                    <div>
                                        <h1 className="font-bold">Order# {order?.orderInfo?.orderId}</h1>
                                        <h1 className="text-sm">Date Added: {order?.orderInfo?.date}</h1>
                                    </div>
                                    <div className='flex items-center gap-1'>
                                        <div className='flex gap-2'>
                                            <h1>Status:</h1>
                                            {/* <select name="ff" id="">
                                                <option disabled>ss</option>
                                                <option value="dd">dd</option>
                                            </select> */}
                                            <select className="select select-success select-xs w-full max-w-xs " onChange={(e) => setSelectedStatus(e.target.value)}>
                                                <option disabled selected>
                                                    {
                                                        order?.orderInfo?.status === "processing" ? (<>Processing</>) : order?.orderInfo?.status === "something_wrong" ? (<>Something Wrong</>) : order?.orderInfo?.status === "canceled" ? (<>Canceled</>) : order?.orderInfo?.status === "confirmed" ? (<>Confirmed</>) : order?.orderInfo?.status === "sent" ? (<>Sent</>) : (<>Processing</>)
                                                    }
                                                </option>
                                                <option value="processing">Processing</option>
                                                <option value="something_wrong">Something Wrong</option>
                                                <option value="canceled">Canceled</option>
                                                <option value="confirmed">Confirmed</option>
                                                <option value="sent">Sent</option>
                                            </select>
                                        </div>
                                        <div>
                                            <button onClick={() => handleUpdate(order._id)} className='btn btn-xs'>update</button>
                                        </div>
                                    </div>

                                </div>
                                <div className="bg-[#FAFAFA] p-4 border-[1px] flex justify-between items-center rounded-b-md">
                                    <h1 className="font-semibold text-green-600">
                                        Total Ordered Items: {order?.order?.length} <br />
                                        Total Price: {order?.orderInfo?.totalPrice} RS.
                                    </h1>
                                    <button onClick={() => handleOpenModal(order)} className="btn btn-success text-white">View</button>
                                </div>
                            </div>
                        ))}
                    </>
                ) : (
                    !loading && (
                        <EmptyData
                            message={"No order found"}
                            go={"Order Somethings"}
                            to={"/dashboard/user/my_cart"}
                        />
                    )
                )}
            </div>
            {/* <UserOrderSummary
          open={openModal}
          close={closeModal}
          order={order}
        /> */}
        </>
    );
};

export default ManageOrder;
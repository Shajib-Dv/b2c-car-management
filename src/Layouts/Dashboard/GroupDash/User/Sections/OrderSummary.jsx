import { GiConfirmed, GiPresent } from "react-icons/gi";
import { FaClipboardList } from "react-icons/fa";
import getOrderList from "../../../../../utils/getOrderList";
import { Link } from "react-router-dom";
import { MdCancelPresentation, MdPendingActions } from "react-icons/md";
import { RxCrossCircled } from "react-icons/rx";
import UserOrderSummary from "../../../Modal/UserOrderSummary";
import { useState } from "react";
import EmptyData from "../../../../../Shared/components/EmptyData";
import Loader from "../../../../../Shared/components/Loader";

const OrderSummary = () => {
  const { orderList, loading, refetch } = getOrderList()
  const [openModal, setOpenModal] = useState(null);
  const [order, setOrder] = useState({});
  console.log(orderList)
  const handleOpenModal = (order) => {
    setOpenModal(true);
    setOrder(order);
  };

  const closeModal = () => {
    setOpenModal(false);
    setOrder({});
  };
  return (
    <>
      <div className="my-10 md:mt-[200px] w-full flex flex-col gap-5">
        <h1 className="text-2xl font-bold mb-5 flex justify-center items-center gap-2">
          <span className="text-green-600 text-3xl">
            <FaClipboardList />
          </span>
          Order Summary
        </h1>

        {loading && <Loader />}
        {orderList && Array.isArray(orderList) && orderList.length > 0 ? (
          <>
            {orderList.reverse().map((order, index) => (
              <div className="hover:shadow-lg" key={index}>
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
      <UserOrderSummary
        open={openModal}
        close={closeModal}
        order={order}
      />
    </>
  );
};

export default OrderSummary;

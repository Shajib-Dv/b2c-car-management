import { GiConfirmed } from "react-icons/gi";
import { FaClipboardList } from "react-icons/fa";
import { FaCartFlatbedSuitcase } from "react-icons/fa6";
import getMyCart from "../../../../../utils/getMyCart";
import Loader from "../../../../../Shared/components/Loader";
import EmptyData from "../../../../../Shared/components/EmptyData";

const MyCart = () => {
    const { myCart, loading, refetch } = getMyCart()
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
                        <h1 className="font-bold">Order# 274094</h1>
                        <h1 className="text-sm">Date Added: 27 Dec 2024</h1>
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
                        myCart.map((cart) => (
                            <div>
                                <div className=" flex justify-between items-center mb-2 py-2">
                                    <h1 className="font-semibold w-1/6">
                                        {cart?.carName}
                                    </h1>
                                    <h1 className="">{cart?.locations}</h1>
                                    <h1 className="">{cart?.price} RS.</h1>
                                </div>
                                <hr />
                            </div>
                        ))
                    }


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
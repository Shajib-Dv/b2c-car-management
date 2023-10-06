import { GiConfirmed } from "react-icons/gi";
import { FaClipboardList } from "react-icons/fa";

const OrderSummary = () => {
  return (
    <div className="mt-10 md:mt-[200px] w-full flex flex-col gap-5">
      <h1 className="text-2xl font-bold mb-5 flex justify-center items-center gap-2">
        <span className="text-green-600 text-3xl">
          <FaClipboardList />
        </span>
        Order Summary
      </h1>
      <div className="hover:shadow-lg">
        <div className="flex justify-between bg-slate-100 border-[1px] p-4 items-center rounded-t-md">
          <div>
            <h1 className="font-bold">Order# 274094</h1>
            <h1 className="text-sm">Date Added: 27 Dec 2024</h1>
          </div>
          <div>
            <h1 className="flex items-center gap-1">
              <span className="text-green-600 text-lg">
                <GiConfirmed />
              </span>{" "}
              Completed
            </h1>
          </div>
        </div>
        <div className="bg-[#FAFAFA] p-4 border-[1px] flex justify-between items-center rounded-b-md">
          <h1 className="font-semibold">
            Baleno Sigma 1197 cc, Manual, Petrol, 22.35 kmpl
          </h1>
          <button className="btn btn-success text-white">View</button>
        </div>
      </div>
      <div className="hover:shadow-lg">
        <div className="flex justify-between bg-slate-100 border-[1px] p-4 items-center rounded-t-md">
          <div>
            <h1 className="font-bold">Order# 274094</h1>
            <h1 className="text-sm">Date Added: 27 Dec 2024</h1>
          </div>
          <div>
            <h1 className="flex items-center gap-1">
              <span className="text-green-600 text-lg">
                <GiConfirmed />
              </span>{" "}
              Completed
            </h1>
          </div>
        </div>
        <div className="bg-[#FAFAFA] p-4 border-[1px] flex justify-between items-center rounded-b-md">
          <h1 className="font-semibold">
            Baleno Sigma 1197 cc, Manual, Petrol, 22.35 kmpl
          </h1>
          <button className="btn btn-success text-white">View</button>
        </div>
      </div>
      <div className="hover:shadow-lg">
        <div className="flex justify-between bg-slate-100 border-[1px] p-4 items-center rounded-t-md">
          <div>
            <h1 className="font-bold">Order# 274094</h1>
            <h1 className="text-sm">Date Added: 27 Dec 2024</h1>
          </div>
          <div>
            <h1 className="flex items-center gap-1">
              <span className="text-green-600 text-lg">
                <GiConfirmed />
              </span>{" "}
              Completed
            </h1>
          </div>
        </div>
        <div className="bg-[#FAFAFA] p-4 border-[1px] flex justify-between items-center rounded-b-md">
          <h1 className="font-semibold">
            Baleno Sigma 1197 cc, Manual, Petrol, 22.35 kmpl
          </h1>
          <button className="btn btn-success text-white">View</button>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;

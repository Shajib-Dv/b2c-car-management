/** @format */

import { useState } from "react";
import { MdOutlineSupportAgent } from "react-icons/md";

const SendMsgModal = ({ open, close, title, action }) => {
  const [loader, setLoader] = useState(false);
  const [reportMsg, setReportMsg] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (action === "support") {
      alert("Support send");
    } else if (action === "report") {
      alert(reportMsg);
    }

    close(action);
  };
  return (
    <>
      <dialog className={`${open ? "flex" : "hidden"}`} open={open}>
        <div className="modal-box md:w-1/2  border border-green-600">
          <h3 className="font-bold text-lg text-green-600 center-itm justify-between">
            {title} <MdOutlineSupportAgent className="text-3xl" />
          </h3>

          <div>
            <form
              method="dialog"
              onSubmit={handleSubmit}
              className="flex flex-col mt-4 gap-2"
            >
              <div className="placeholder-txt">
                <textarea
                  onChange={(e) => setReportMsg(e.target.value)}
                  id="message"
                  className="data-input min-h-[200px]"
                ></textarea>
                <label htmlFor="message">Write your issue here...</label>
              </div>

              <button
                type="submit"
                disabled={loader}
                className="btn-details font-bold hover:text-green-600 disabled:cursor-not-allowed capitalize"
              >
                {loader ? (
                  <span className="loading loading-bars loading-sm text-green-700"></span>
                ) : (
                  action || "Send"
                )}
              </button>
            </form>
            <button
              onClick={() => close(action)}
              className="btn btn-sm btn-circle btn-ghost absolute right-0 top-0"
            >
              ✕
            </button>
          </div>
        </div>
      </dialog>
    </>
  );
};

export default SendMsgModal;

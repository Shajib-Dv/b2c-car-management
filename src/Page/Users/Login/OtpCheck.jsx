/** @format */

import { useRef } from "react";
import { FaPen, FaTimes } from "react-icons/fa";

const OtpCheck = ({ otp, setOtp }) => {
  const otpRef = useRef(null);
  const handleSendOTP = (e) => {
    e.preventDefault();

    const otp = otpRef?.current?.value;
    console.log(otp);
  };

  const handleEdithPhone = () => {
    setOtp({});
  };

  return (
    <div className="md:w-1/2 mx-auto bg-base-100 rounded-md shadow-inner p-4 h-screen mt-10">
      <div className="flex items-center justify-between ">
        <h1 className="title">Login or Register for best vmall experience</h1>
        <span onClick={handleEdithPhone} className="cursor-pointer">
          <FaTimes />
        </span>
      </div>
      <div className="my-10 flex items-center gap-2 text-green-600 font-bold">
        <p className="text-black">OTP has been send to</p>
        <span>{otp?.phone}</span>
        <span onClick={handleEdithPhone} className="flex cursor-pointer">
          <FaPen />-
        </span>
      </div>
      <form
        onSubmit={handleSendOTP}
        className="flex flex-col md:justify-between h-3/5 mt-10 space-y-6"
      >
        <input
          type="text"
          name="otp"
          ref={otpRef}
          placeholder="Please enter OTP to verify"
          className="input input-bordered mt-20 md:w-4/5"
        />
        <input
          type="submit"
          value="Verify OTP"
          className="md:w-1/2 w-4/5 mx-auto md:mx-0 otp-btn"
        />
      </form>
    </div>
  );
};

export default OtpCheck;

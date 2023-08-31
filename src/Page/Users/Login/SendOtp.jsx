/** @format */

import { useRef } from "react";
import { FaTimes } from "react-icons/fa";
import useAuth from "../../../hooks/useAuth";

const SendOtp = ({ setOtp }) => {
  const { sendOTP, user } = useAuth();
  console.log(user);
  const otpRef = useRef(null);

  const handleSendOTP = async (e) => {
    e.preventDefault();

    const phone = otpRef?.current?.value;

    if (phone === "" || phone === undefined) {
      return alert("Wrong phone");
    }
    try {
      const response = await sendOTP(phone);
      console.log(response);
    } catch (err) {
      console.log(err.message);
    }

    setOtp((prev) => {
      return { ...prev, phone: phone };
    });
  };

  return (
    <div className="md:w-1/2 mx-auto bg-base-100 rounded-md shadow-inner p-4 h-screen mt-10">
      <div className="flex items-center justify-between ">
        <h1 className="title">
          Login or Register for best VhicleMall experience
        </h1>
        <span className="cursor-pointer">
          <FaTimes />
        </span>
      </div>
      <form
        onSubmit={handleSendOTP}
        className="flex flex-col md:justify-between h-4/5 mt-10 space-y-6"
      >
        <div>
          <input
            type="tel"
            name="tel"
            ref={otpRef}
            placeholder="Enter mobile number"
            className="input input-bordered mt-20 md:w-4/5"
          />
          <div id="recaptcha-container"></div>
        </div>

        <input
          type="submit"
          value="Send OTP"
          className="md:w-1/2 w-4/5 mx-auto md:mx-0 otp-btn"
        />
      </form>
    </div>
  );
};

export default SendOtp;

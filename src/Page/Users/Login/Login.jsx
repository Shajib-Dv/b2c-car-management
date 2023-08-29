/** @format */

import { useRef } from "react";
import { FaTimes } from "react-icons/fa";
const Login = () => {
  const otpRef = useRef(null);
  const handleSendOTP = (e) => {
    e.preventDefault();

    const phone = otpRef?.current?.value;
    console.log(phone);
  };

  return (
    <div className="md:w-1/2 mx-auto bg-base-100 rounded-md shadow-inner p-4 h-screen mt-10">
      <div className="flex items-center justify-between ">
        <h1 className="title">
          Login or Register for best VhicleMall experience
        </h1>
        <FaTimes />
      </div>
      <form
        onSubmit={handleSendOTP}
        className="flex flex-col md:justify-between h-4/5 mt-10 space-y-6"
      >
        <input
          type="tel"
          name="tel"
          ref={otpRef}
          placeholder="Enter mobile number"
          className="input input-bordered mt-20 md:w-4/5"
        />
        <input
          type="submit"
          value="Send OTP"
          className="md:w-1/2 w-4/5 mx-auto md:mx-0 otp-btn"
        />
      </form>
    </div>
  );
};

export default Login;

/** @format */

import { useState } from "react";
import SendOtp from "./SendOtp";
import OtpCheck from "./OtpCheck";

const Login = () => {
  const [otp, setOtp] = useState({});
  return (
    <>
      {/* {otp?.phone ? (
        <OtpCheck otp={otp} setOtp={setOtp} />
      ) : (
        <SendOtp setOtp={setOtp} />
      )} */}
      <SendOtp setOtp={setOtp} />
    </>
  );
};

export default Login;

import { useState } from "react";
import { FaTimes } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

const GoogleLogin = () => {
  const [error, setError] = useState({});
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loader, setLoader] = useState(false);
  const navigate = useNavigate();
  const { googleSignUp } = useAuth();

  const handleGoogleLogin = (e) => {
    e.preventDefault();
    setError({});
    setLoader(false);

    if (!email) {
      setError((prev) => {
        return { ...prev, email: "Please provide an email !" };
      });
    }
    if (!password) {
      setError((prev) => {
        return { ...prev, password: "Please set a password !" };
      });
    }

    if (email && password) {
      setLoader(true);
      googleSignUp(email, password)
        .then(() => {
          navigate("/");
        })
        .catch((err) => {
          setLoader(false);
          setError((prev) => {
            return { ...prev, firebase: err.message };
          });
        });
    }
  };

  return (
    <div className="md:w-1/2 mx-auto bg-base-100 rounded-md shadow-inner p-4 min-h-screen mt-10">
      <div className="flex items-center justify-between ">
        <h1 className="title">Welcome Back, Login with your email</h1>
        <span className="cursor-pointer">
          <Link to="/login">
            <FaTimes />
          </Link>
        </span>
      </div>
      <form
        onSubmit={handleGoogleLogin}
        className="flex flex-col md:justify-between h-4/5 mt-10 space-y-6"
      >
        <div>
          <div>
            <input
              type="email"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email"
              className="input input-bordered mt-20 md:w-4/5"
            />
            <div className="h-5">
              {error?.email && !email && (
                <p className="text-red-600 font-semibold">{error?.email}</p>
              )}
            </div>
          </div>

          <div>
            <input
              type="password"
              name="password"
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Your password"
              className="input input-bordered mt-10 md:w-4/5"
            />
            <div className="h-5">
              {error?.password && !password ? (
                <p className="text-red-600 font-semibold">{error?.password}</p>
              ) : (
                error?.firebase && (
                  <p className="text-red-600 font-semibold">
                    {error?.firebase}
                  </p>
                )
              )}
            </div>
          </div>
        </div>

        <div>
          <p className="text-green-600 font-bold">
            New Here, please
            <Link to="/register" className="hover:underline font-bold px-2">
              Register
            </Link>
          </p>
        </div>

        <button
          type="submit"
          disabled={loader}
          className="md:w-1/2 w-4/5 mx-auto md:mx-0 otp-btn disabled:bg-opacity-40"
        >
          {loader ? (
            <span className="loading loading-bars loading-sm text-green-700"></span>
          ) : (
            "Login"
          )}
        </button>
      </form>
    </div>
  );
};

export default GoogleLogin;

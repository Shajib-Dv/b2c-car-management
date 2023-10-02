/** @format */

import { useRef, useState } from "react";
import { FaTimes } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

const Register = () => {
  const [error, setError] = useState({});
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [loader, setLoader] = useState(false);
  const navigate = useNavigate();
  const { googleSignIn, updateUserProfile } = useAuth();

  const userInfo = { name, email };

  const storeUserInGoogle = (email, password) => {
    googleSignIn(email, password)
      .then(() => {
        updateUserProfile(name).then(() => {
          storeUserInDB(userInfo)
            .then((res) => {
              if (res.ok) {
                setLoader(false);
                navigate("/");
              }
            })
            .catch((err) => console.log(err.message));
        });
      })
      .catch((err) => {
        setLoader(false);
        setError((prev) => {
          return { ...prev, firebase: err.message };
        });
      });
  };

  const storeUserInDB = async (userInfo) => {
    const res = await fetch(`http://localhost:3000/user`, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(userInfo),
    });

    return res;
  };

  const handleGoogleSignin = (e) => {
    e.preventDefault();

    setError({});
    setLoader(false);

    if (!name) {
      setError((prev) => {
        return { ...prev, name: "Please enter your name !" };
      });
    }
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

    if (email && password && name) {
      setLoader(true);
      storeUserInGoogle(email, password);
    }
  };

  return (
    <div className="md:w-1/2 mx-auto bg-base-100 rounded-md shadow-inner p-4 min-h-screen mt-10">
      <div className="flex items-center justify-between ">
        <h1 className="title">Welcome register with your email</h1>
        <span className="cursor-pointer">
          <Link to="/login/google">
            <FaTimes />
          </Link>
        </span>
      </div>
      <form
        onSubmit={handleGoogleSignin}
        className="flex flex-col md:justify-between h-4/5 mt-10 space-y-6"
      >
        <div>
          <div>
            <input
              type="text"
              name="name"
              onChange={(e) => setName(e.target.value)}
              placeholder="Your Name"
              className="input input-bordered mt-4 md:w-4/5 w-full"
            />
            <div className="h-5">
              {error?.name && !name && (
                <p className="text-red-600 font-semibold">{error?.name}</p>
              )}
            </div>
          </div>

          <div>
            <input
              type="email"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email"
              className="input input-bordered mt-4 md:w-4/5 w-full"
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
              className="input input-bordered mt-4 md:w-4/5 w-full"
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
            Already have an account, please
            <Link to="/login/google" className="hover:underline font-bold px-2">
              Login
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
            "Register"
          )}
        </button>
      </form>
    </div>
  );
};

export default Register;

/** @format */

import { useRef } from "react";
import { useState } from "react";
import { forwardRef } from "react";
import useAuth from "../../../hooks/useAuth";
import Swal from "sweetalert2";

const UpdateProfileModal = ({ open, close }, ref) => {
  const { user, updateUserProfile } = useAuth();
  const [loader, setLoader] = useState(false);
  const avatarRef = useRef(null);
  const [imgUrl, setImgUrl] = useState(null);
  const [avatar, setAvatar] = useState(null);
  const [userInfo, setUserInfo] = useState({});
  const [photo, setPhoto] = useState("");

  const updatedUser = {
    ...userInfo,
    photo: photo || user?.photoURL || null,
  };

  const img_host_url = `https://api.imgbb.com/1/upload?key=${
    import.meta.env.VITE_IMG_HOST_KEY
  }`;

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      setImgUrl(file);
      const reader = new FileReader();

      reader.onload = (e) => {
        setAvatar(e.target.result);
      };

      reader.readAsDataURL(file);
    } else {
      setImgUrl(null);
      setAvatar(null);
    }
  };

  const uploadImg = (file) => {
    if (imgUrl) {
      const imageData = new FormData();
      imageData.append("image", file);
      fetch(img_host_url, {
        method: "POST",
        body: imageData,
      })
        .then((res) => res.json())
        .then((imageRes) => {
          if (imageRes.success) {
            const imgURL = imageRes.data.display_url;
            setPhoto(imgURL);
            updateUserProfile(user?.displayName, imgURL);
          }
        });
    }
  };

  const updateDbUser = (userInfo) => {
    setLoader(true);
    fetch(`http://localhost:3000/user/${user?.email}`, {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(userInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          Swal.fire("Profile Updated !", "success");
        }
        setLoader(false);
        close();
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(userInfo);

    e.target.reset();
  };

  return (
    <>
      <dialog className={`${open ? "flex" : "hidden"}`} open={open} ref={ref}>
        <div className="modal-box md:w-1/2 text-green-500 border border-green-600">
          <h3 className="font-bold text-lg">
            Welcome <span className="font-serif">{user?.displayName}</span>.
            Update your information here...
          </h3>

          <div>
            <form
              method="dialog"
              onSubmit={handleSubmit}
              className="flex flex-col mt-4 gap-2"
            >
              <div className="flex gap-4 md:flex-row flex-col items-center">
                <div
                  onClick={() => avatarRef.current.click()}
                  className="w-24 h-24 rounded-full border border-green-600 cursor-pointer relative overflow-hidden"
                  title="Choose your avatar"
                >
                  <img
                    src={
                      avatar
                        ? avatar
                        : user?.photoURL
                        ? user?.photoURL
                        : "https://i.ibb.co/kc20dsb/blank-profile-picture-973460-1280.png"
                    }
                    alt="avatar"
                    className="rounded-full w-full h-full bg-cover"
                  />
                  <input
                    ref={avatarRef}
                    type="file"
                    className="hidden"
                    onChange={handleImageChange}
                  />

                  <p className="absolute bottom-0 left-1/2 -translate-x-1/2 text-green-600 font-semibold  w-full text-center bg-black bg-opacity-40">
                    {avatar || user?.photoURL ? "Change" : "Choose"} Avatar
                  </p>
                </div>
                <div className="md:flex-1 w-full space-y-2">
                  <input
                    type="text"
                    placeholder="Your full name"
                    className="data-input"
                    required
                    onChange={(e) =>
                      setUserInfo({ ...userInfo, name: e.target.value })
                    }
                  />
                  <input
                    type="tel"
                    placeholder="Your Phone"
                    className="data-input"
                    required
                    onChange={(e) =>
                      setUserInfo({ ...userInfo, phone: e.target.value })
                    }
                  />
                </div>
              </div>
              <h3 className="title">Address</h3>
              <input
                type="text"
                placeholder="Your city"
                className="data-input"
                required
                onChange={(e) =>
                  setUserInfo({ ...userInfo, city: e.target.value })
                }
              />
              <input
                type="text"
                placeholder="Your country"
                className="data-input"
                required
                onChange={(e) =>
                  setUserInfo({ ...userInfo, country: e.target.value })
                }
              />

              <button
                type="submit"
                disabled={loader}
                className="btn-details font-bold hover:text-green-600 disabled:cursor-not-allowed"
              >
                {loader ? (
                  <span className="loading loading-bars loading-sm text-green-700"></span>
                ) : (
                  "Update"
                )}
              </button>
            </form>
            <button
              onClick={() => close()}
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

export default forwardRef(UpdateProfileModal);

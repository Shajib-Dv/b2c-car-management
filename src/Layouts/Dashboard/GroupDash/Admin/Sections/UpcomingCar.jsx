import CustomInput from "../../../../../Shared/components/CustomInput";
import { BiSolidAddToQueue } from "react-icons/bi";
import { useState } from "react";
import Swal from "sweetalert2";
import getUpComingCarData from "../../../../../utils/getUpComingCarData";
const img_hosting_token = import.meta.env.VITE_Image_Upload_Token;
import { BiSkipNextCircle } from "react-icons/bi";
import { TbPlayerTrackNext } from "react-icons/tb";
import { IoLogoUsd } from "react-icons/io";
import Loader from "../../../../../Shared/components/Loader";
import useAuth from "../../../../../hooks/useAuth";

const UpcomingCar = () => {
  const { user } = useAuth();
  let enable = user?.email ? true : false;
  const { carData, loading, refetch } = getUpComingCarData(
    user?.email || null,
    enable
  );

  const [basicData, setBasicData] = useState({});

  const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`;

  const uploadImage = async (imageFile) => {
    const formData = new FormData();
    formData.append("image", imageFile);

    const res = await fetch(img_hosting_url, {
      method: "POST",
      body: formData,
    });
    const imgResponse = await res.json();

    if (imgResponse.success) {
      return imgResponse.data.display_url;
    }
    return null;
  };

  const handleAddUpcomingCar = async (e) => {
    e.preventDefault();
    Swal.fire({
      title: "Uploading please wait...",
      width: 600,
      padding: "3em",
      color: "#716add",
      background: "#fff url(/images/trees.png)",
      confirmButtonText: "Do not close window",
      backdrop: `
      rgba(0,0,123,0.4)
      url("https://sweetalert2.github.io/images/nyan-cat.gif")
      left top
      no-repeat
    `,
    });

    const form = e.target;
    const imageFiles = [form.querySelector('input[name="image"]').files[0]];

    const imgURLs = await Promise.all(
      imageFiles.map(async (imageFile) => {
        if (imageFile) {
          return await uploadImage(imageFile);
        }
        return null;
      })
    );
    //setBasicData({})

    const upcomingCarData = {
      email: user?.email,
      basicData,
      images: imgURLs,
      date: new Date(),
    };
    console.log(upcomingCarData);

    const response = await fetch("http://localhost:3000/add_upcoming_car", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(upcomingCarData),
    });

    const data = await response.json();

    if (data.insertedId) {
      Swal.fire({
        title: "Success!",
        text: "Car added successfully",
        icon: "success",
        confirmButtonText: "OK!",
      });
      refetch();
    }
  };

  return (
    <div className='w-full my-20'>
      <h1 className='text-2xl font-bold mb-5 flex gap-2 justify-center items-center'>
        {" "}
        <span className='text-green-600'>
          <BiSkipNextCircle />
        </span>{" "}
        Upcoming Car{" "}
      </h1>
      <hr />
      <div className='grid grid-cols-1 md:grid-cols-5 gap-5 mt-10'>
        <div className='col-span-2 '>
          <div>
            <h1 className='text-lg font-bold mb-5 flex gap-2 justify-center items-center'>
              {" "}
              <span className='text-green-600'>
                <BiSolidAddToQueue />
              </span>{" "}
              Add Upcoming Car{" "}
            </h1>
          </div>
          <form
            action=''
            onSubmit={handleAddUpcomingCar}
            className='w-full text-green-700'
          >
            <div className='flex flex-col gap-5 md:gap-0'>
              <CustomInput
                label='Car Name'
                value={basicData?.carName}
                onChange={(value) =>
                  setBasicData({ ...basicData, carName: value })
                }
              />
              <CustomInput
                label='Car Price'
                value={basicData?.price}
                onChange={(value) =>
                  setBasicData({ ...basicData, price: value })
                }
              />
              <div className='flex justify-center'>
                <input
                  type='file'
                  className='file-input file-input-bordered file-input-success w-full max-w-xs'
                  name='image'
                  required={true}
                />
              </div>
            </div>

            <div className='flex justify-center mt-5'>
              <button className='btn text-[#618264] font-bold flex gap-1 disabled:text-red-400 k'>
                <span>
                  <BiSolidAddToQueue />
                </span>
                Add Upcoming Car
              </button>
            </div>
          </form>
        </div>
        <div className='col-span-3'>
          <h1 className='text-lg font-bold mb-5 flex gap-2 justify-center items-center'>
            {" "}
            <span className='text-green-600'>
              <TbPlayerTrackNext />
            </span>
            Upcoming Car List
          </h1>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
            {loading ? (
              <Loader />
            ) : (
              [...carData].reverse().map((data) => (
                <div
                  key={data?._id}
                  className='p-5 border border-green-300 rounded-md hover:shadow-green-400 hover:shadow-md'
                >
                  <div className='flex justify-center'>
                    <img src={data.images[0]} className='rounded ' alt='' />
                  </div>
                  <h2 className='font-bold'>{data.basicData.carName}</h2>
                  <p className='font-semibold flex items-center'>
                    {data.basicData.price}{" "}
                    <span className='text-green-600'>
                      <IoLogoUsd />
                    </span>{" "}
                  </p>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpcomingCar;

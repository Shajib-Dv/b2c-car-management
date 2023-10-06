import React, { useContext } from 'react';
import CustomInput from '../../../../../Shared/components/CustomInput';
import { BiSolidAddToQueue } from "react-icons/bi";
import { AuthContext } from '../../../../../Provider/AuthProvider';
import { useState } from 'react';
import Swal from 'sweetalert2';
const img_hosting_token = import.meta.env.VITE_Image_Upload_Token;

const UpcomingCar = () => {
    const [basicData, setBasicData] = useState({});
    const { user } = useContext(AuthContext);

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
        const imageFiles = [
            form.querySelector('input[name="image"]').files[0]
        ];

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
        }
        console.log(upcomingCarData)

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
            form.reset();
        }
    }
    


    return (
        <div className='w-full mt-10 md:mt-[200px]'>
            <div className='grid grid-cols-5 gap-5'>
                <div className='col-span-2 '>
                    <form action="" onSubmit={handleAddUpcomingCar} className='w-full text-green-700'>
                        <CustomInput
                            label="Car Name"
                            value={basicData?.carName}
                            onChange={(value) =>
                                setBasicData({ ...basicData, carName: value })
                            }

                        />
                        <CustomInput
                            label="Car Price"
                            value={basicData?.price}
                            onChange={(value) =>
                                setBasicData({ ...basicData, price: value })
                            }
                        />
                        <div className='flex justify-center'>
                            <input
                                type="file"
                                className="file-input file-input-bordered file-input-success w-full max-w-xs"
                                name="image"
                            // required={true}
                            />
                        </div>
                        <div className='flex justify-center mt-5'>
                            <button
                                className="btn text-[#618264] font-bold flex gap-1 disabled:text-red-400 k"
                            >
                                <span>
                                    <BiSolidAddToQueue />
                                </span>
                                Add Upcoming Car
                            </button>
                        </div>
                    </form>
                </div>
                <div>
                        
                </div>
            </div>

        </div>
    );
};

export default UpcomingCar;
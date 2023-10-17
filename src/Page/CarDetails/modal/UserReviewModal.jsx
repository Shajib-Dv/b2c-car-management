import { useState } from "react";
import CustomInput from "../../../Shared/components/CustomInput";
import useAuth from "../../../hooks/useAuth";
import { Rating, RoundedStar } from "@smastrom/react-rating";
import Swal from "sweetalert2";

const UserReviewModal = ({ open, close, title, carName = null }) => {
  const [reviewText, setReviewText] = useState({});
  const [rating, setRating] = useState(0);
  const [loading, setLoading] = useState(false);
  const { user } = useAuth();

  const storeReviewInDb = async (data) => {
    try {
      setLoading(true);
      const res = await fetch("http://localhost:3000/reviews", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const resData = await res.json();
      if (resData?.insertedId) {
        setLoading(false);
        close();
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Your review has been updated",
          showConfirmButton: false,
          timer: 1200,
        });
      }
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  };

  const handleReviewSubmit = (e) => {
    e.preventDefault();

    const storedReview = {
      ...reviewText,
      date: new Date(),
      email: user?.email,
      carName,
      rating,
    };

    storeReviewInDb(storedReview);

    e.target.reset();
  };

  const handleReviewText = (element, val) => {
    setReviewText({
      ...reviewText,
      [element]: val,
    });
  };

  const myStyles = {
    itemShapes: RoundedStar,
    activeFillColor: "#ffb700",
    inactiveFillColor: "#a19e82c7",
  };
  return (
    <>
      <dialog className={`${open ? "flex z-50" : "hidden"}`} open={open}>
        <div className='modal-box max-w-3xl  border border-green-600'>
          <h3 className='font-bold text-lg  center-itm justify-between'>
            {title || "unknown"}
          </h3>

          <div className='w-full mt-4 center-itm gap-4'>
            <div>
              <Rating
                style={{ maxWidth: 150 }}
                value={rating}
                onChange={setRating}
                itemStyles={myStyles}
              />
            </div>
            <div>
              <h2 className='text-xl font-semibold'>Rate this car</h2>
            </div>
          </div>

          <form onSubmit={handleReviewSubmit}>
            <div className='my-6'>
              <CustomInput
                label={"How was your experience"}
                onChange={(value) => handleReviewText("title", value)}
                value={reviewText?.title}
              />
              <CustomInput
                label={"Write your review here..."}
                type={"textArea"}
                onChange={(value) => handleReviewText("review", value)}
                value={reviewText?.review}
              />
            </div>

            <button
              className='btn-act mt-4 w-32'
              type='submit'
              disabled={loading}
            >
              {loading ? (
                <span className='loading loading-bars loading-sm text-green-600'></span>
              ) : (
                "Submit"
              )}
            </button>
          </form>

          <div>
            <button
              onClick={() => close()}
              className='btn btn-sm btn-circle btn-ghost text-2xl text-error absolute right-0 top-0'
            >
              ✕
            </button>
          </div>
        </div>
      </dialog>
    </>
  );
};

export default UserReviewModal;

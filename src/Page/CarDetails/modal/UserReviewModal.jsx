import { useEffect, useRef, useState } from "react";
import useAuth from "../../../hooks/useAuth";
import { Rating } from "@smastrom/react-rating";
import Swal from "sweetalert2";
import getReviewByCarId from "../../../utils/getReviewByCarId";

const UserReviewModal = ({
  open,
  close,
  title,
  carName = null,
  carId = null,
}) => {
  const [reviewText, setReviewText] = useState({});
  const [rating, setRating] = useState(0);
  const [loading, setLoading] = useState(false);
  const formRef = useRef(null);
  const { user } = useAuth();

  const { review, isLoading, refetch } = getReviewByCarId(carId);

  console.log(review?.title);

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
        setRating(0);
        setReviewText({});
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

  const handleReviewSubmit = async (e) => {
    e.preventDefault();

    const storedReview = {
      ...reviewText,
      date: new Date(),
      email: user?.email,
      carName,
      rating,
      carId,
    };

    // await storeReviewInDb(storedReview);
    console.log(storedReview);

    formRef?.current?.reset();
  };

  const handleReviewText = (element, val) => {
    setReviewText({
      ...reviewText,
      [element]: val,
    });
  };

  const handleModalClose = () => {
    setRating(0);
    setReviewText({});
    close();
    formRef?.current?.reset();
  };

  useEffect(() => {
    refetch();
  }, [carId]);

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
              />
            </div>
            <div>
              <h2 className='text-xl font-semibold'>Rate this car</h2>
            </div>
          </div>

          <form onSubmit={handleReviewSubmit} ref={formRef}>
            <div className='my-6 flex flex-col gap-4'>
              <input
                type='text'
                className='data-input '
                placeholder={"How was your experience"}
                onChange={(e) => handleReviewText("title", e.target.value)}
                defaultValue={review?.title}
                required
              />
              <textarea
                className='data-input'
                placeholder={"Write your review here..."}
                onChange={(e) => handleReviewText("review", e.target.value)}
                defaultValue={review?.review}
                required
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
              onClick={handleModalClose}
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

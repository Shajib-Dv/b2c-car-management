import { useRef, useState } from "react";
import useAuth from "../../../hooks/useAuth";
import { Rating } from "@smastrom/react-rating";
import Swal from "sweetalert2";
import getReviewByCarId from "../../../utils/getReviewByCarId";
import { CiEdit, CiTrash } from "react-icons/ci";

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
  const [edit, setEdit] = useState(false);
  const formRef = useRef(null);
  const { user } = useAuth();

  const { review, isLoading, refetch } = getReviewByCarId(carId);

  const swalMessage = (message) => {
    setRating(0);
    setReviewText({});
    setLoading(false);
    close();
    Swal.fire({
      position: "center",
      icon: "success",
      title: message,
      showConfirmButton: false,
      timer: 1200,
    });
  };

  const storeReviewInDb = async (data) => {
    try {
      setLoading(true);
      const res = await fetch("https://b2c-car-management-server-p6jwvedmy-shajib-dv.vercel.app/reviews", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const resData = await res.json();
      if (resData?.insertedId) {
        swalMessage("Your review has been updated");
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

    await storeReviewInDb(storedReview);

    formRef?.current?.reset();
    refetch();
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

  const handleEditReview = () => {
    setEdit((prev) => !prev);
    reviewText.title = review.title;
    reviewText.review = review.review;
    reviewText.rating = rating === 0 ? review.rating : rating;
  };

  const handleReviewUpdate = async (id) => {
    setLoading(true);
    const res = await fetch(`https://b2c-car-management-server-p6jwvedmy-shajib-dv.vercel.app/reviews/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(reviewText),
    });

    const resData = await res.json();

    if (resData.modifiedCount > 0) {
      swalMessage("Your review has been updated");
    } else {
      swalMessage("Nothing has changed");
    }

    setEdit(true);
  };

  const deleteReview = async (id) => {
    Swal.fire({
      title: "Your review will be deleted !",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#057d19",
      cancelButtonColor: "#d33",
      confirmButtonText: "Delete",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const res = await fetch(`https://b2c-car-management-server-p6jwvedmy-shajib-dv.vercel.app/reviews/${id}`, {
          method: "DELETE",
        });

        const resData = await res.json();

        if (resData.deletedCount > 0) {
          swalMessage("Your review has been deleted");
        }

        refetch();
      }
    });
  };

  return (
    <>
      <dialog className={`${open ? "flex z-50" : "hidden"}`} open={open}>
        <div className='modal-box max-w-3xl  border border-green-600'>
          <div className='flex gap-4'>
            <h3 className='font-bold text-lg  center-itm justify-between'>
              {title || "unknown"}
            </h3>
            {!review.status && (
              <div>
                <button
                  onClick={handleEditReview}
                  className='btn btn-sm btn-circle btn-ghost'
                >
                  <CiEdit className='text-2xl text-green-600 font-extrabold' />
                </button>
                <button
                  onClick={() => deleteReview(review._id)}
                  className='btn btn-sm btn-circle btn-ghost'
                >
                  <CiTrash className='text-2xl text-error font-extrabold' />
                </button>
              </div>
            )}
          </div>

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
            {!review.status && !edit ? (
              <div className='my-6 flex flex-col gap-4'>
                <p className='data-input overflow-hidden break-words'>
                  {review?.title}
                </p>
                <p className='data-input overflow-hidden break-words'>
                  {review?.review}
                </p>
              </div>
            ) : (
              <div className='my-6 flex flex-col gap-4'>
                <input
                  type='text'
                  className='data-input '
                  placeholder={"How was your experience"}
                  onChange={(e) => handleReviewText("title", e.target.value)}
                  defaultValue={review.title}
                  required
                />
                <textarea
                  className='data-input'
                  placeholder={"Write your review here..."}
                  onChange={(e) => handleReviewText("review", e.target.value)}
                  defaultValue={review.review}
                  required
                />
              </div>
            )}

            {!review.status ? (
              <div
                onClick={() => handleReviewUpdate(review._id)}
                className='btn-act mt-4 w-32'
                type='submit'
                disabled={loading || !edit}
              >
                {loading ? (
                  <span className='loading loading-bars loading-sm text-green-600'></span>
                ) : (
                  "Update"
                )}
              </div>
            ) : (
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
            )}
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

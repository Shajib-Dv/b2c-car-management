import { useQuery } from "@tanstack/react-query";
import useAuth from "../hooks/useAuth";

const getReviewByCarId = (carId) => {
  const { user } = useAuth();
  const {
    data: review = {},
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["review-car-name"],
    enabled: !!carId,
    queryFn: async () => {
      const res = await fetch(`https://b2c-car-management-server-p6jwvedmy-shajib-dv.vercel.app/reviews?carId=${carId}&email=${user?.email}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const resData = await res.json();

      return resData;
    },
  });
  return { review, isLoading, refetch };
};

export default getReviewByCarId;

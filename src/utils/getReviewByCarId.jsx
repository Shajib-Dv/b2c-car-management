import { useQuery } from "@tanstack/react-query";

const getReviewByCarId = (carId) => {
  const {
    data: review = {},
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["review-car-name"],
    enabled: !!carId,
    queryFn: async () => {
      const res = await fetch(`http://localhost:3000/reviews?carId=${carId}`, {
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

import { useQuery } from "@tanstack/react-query";

const getAllNewCars = (limit = null) => {
  const {
    data: allCars = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["all_new_cars"],
    queryFn: async () => {
      const res = await fetch(
        `http://localhost:3000/all_new_cars?limit=${limit}`
      );
      return res.json();
    },
  });

  return { allCars, isLoading, refetch };
};

export default getAllNewCars;

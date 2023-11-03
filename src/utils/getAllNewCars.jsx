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
        `https://b2c-car-management-server-p6jwvedmy-shajib-dv.vercel.app/all_new_cars?limit=${limit}`
      );
      return res.json();
    },
  });

  return { allCars, isLoading, refetch };
};

export default getAllNewCars;

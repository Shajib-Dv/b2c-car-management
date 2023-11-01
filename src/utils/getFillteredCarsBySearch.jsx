/** @format */

import { useQuery } from "@tanstack/react-query";

const getFillteredCarsBySearch = (url) => {
  const {
    data: filteredCars = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["car_src"],
    enabled: !!url,
    queryFn: async () => {
      const res = await fetch(url);

      return res.json();
    },
  });

  return { filteredCars, isLoading, refetch };
};

export default getFillteredCarsBySearch;

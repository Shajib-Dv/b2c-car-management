import { useQuery } from "@tanstack/react-query";

const getUpComingCarData = (email, enable = true) => {
  let url = `http://localhost:3000/add_upcoming_car`;
  if (email) {
    url += `?email=${email}`;
  }

  const {
    data: carData = [],
    isLoading: loading,
    refetch,
  } = useQuery({
    queryKey: ["carData"],
    enabled: enable,
    queryFn: async () => {
      const res = await fetch(url);
      return res.json();
    },
  });
  return { carData, loading, refetch };
};

export default getUpComingCarData;

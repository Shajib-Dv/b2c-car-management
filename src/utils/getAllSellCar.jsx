import { useQuery } from "@tanstack/react-query";

const getAllSellCar = () => {
  let url = `http://localhost:3000/sell_car`;

  const {
    data: sellCarData = [],
    isLoading: loading,
    refetch,
  } = useQuery({
    queryKey: ["sell_car_data"],
    enabled: true,
    queryFn: async () => {
      const res = await fetch(url);
      return res.json();
    },
  });
  return { sellCarData, loading, refetch };
};

export default getAllSellCar;

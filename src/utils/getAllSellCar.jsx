import { useQuery } from "@tanstack/react-query";

const getAllSellCar = () => {
  let url = `https://b2c-car-management-server-p6jwvedmy-shajib-dv.vercel.app/sell_car`;

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

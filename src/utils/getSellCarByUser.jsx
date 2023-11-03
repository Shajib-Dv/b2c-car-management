import { useQuery } from "@tanstack/react-query";
import useAuth from "../hooks/useAuth";

const getSellCarByUser = () => {
  const { user } = useAuth();

  let url = `https://b2c-car-management-server-p6jwvedmy-shajib-dv.vercel.app/sell_car?email=${user.email}`;

  const {
    data: sellCarData = [],
    isLoading: loading,
    refetch,
  } = useQuery({
    queryKey: ["sell_car_data_by_user"],
    enabled: !!user.email,
    queryFn: async () => {
      const res = await fetch(url);
      return res.json();
    },
  });
  return { sellCarData, loading, refetch };
};

export default getSellCarByUser;

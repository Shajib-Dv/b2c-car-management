import { useQuery } from "@tanstack/react-query";
import useAuth from "../hooks/useAuth";

const getUpcomingCarByUser = () => {
  const { user } = useAuth();

  const {
    data: carData = [],
    isLoading: loading,
    refetch,
  } = useQuery({
    queryKey: ["carData"],
    enabled: !!user?.email,
    queryFn: async () => {
      const res = await fetch(
        `https://b2c-car-management-server-p6jwvedmy-shajib-dv.vercel.app/add_upcoming_car?email=${user?.email}`
      );
      return res.json();
    },
  });
  return { carData, loading, refetch };
};

export default getUpcomingCarByUser;

import { useQuery } from "@tanstack/react-query";
import useAuth from "../hooks/useAuth";

const getCarsByUser = () => {
  const { user } = useAuth();

  const {
    data: recentCars = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["recent_car"],
    enabled: !!user?.email,
    queryFn: async () => {
      if (user?.email) {
        const res = await fetch(
          `https://b2c-car-management-server-p6jwvedmy-shajib-dv.vercel.app/new_car?email=${user?.email}`
        );
        return res.json();
      }
    },
  });

  return { recentCars, isLoading, refetch };
};

export default getCarsByUser;

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
        `http://localhost:3000/add_upcoming_car?email=${user?.email}`
      );
      return res.json();
    },
  });
  return { carData, loading, refetch };
};

export default getUpcomingCarByUser;

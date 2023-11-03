import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

const getCarsById = (id) => {
  const navigate = useNavigate();
  const {
    data: car = {},
    isLoading,
    refetch,
  } = useQuery({
    queryKey: [id],
    enabled: !!id,
    queryFn: async () => {
      try {
        if (id) {
          const res = await fetch(`https://b2c-car-management-server-p6jwvedmy-shajib-dv.vercel.app/new_car?id=${id}`);
          return res.json();
        }
      } catch (error) {
        navigate("/dashboard/admin/recently_added_car");
      }
    },
  });

  return { car, isLoading, refetch };
};

export default getCarsById;

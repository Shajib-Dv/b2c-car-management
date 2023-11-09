import { useQuery } from "@tanstack/react-query";
import useAuth from "../hooks/useAuth";

const getOrderList = () => {
    const { user } = useAuth();

    let url = `https://b2c-car-management-server-p6jwvedmy-shajib-dv.vercel.app/order_list?email=${user?.email}`;

    const {
        data: orderList = [],
        isLoading: loading,
        refetch,
    } = useQuery({
        queryKey: ["order_list"],
        enabled: !!user?.email,
        queryFn: async () => {
            const res = await fetch(url);
            return res.json();
        },
    });
    return { orderList, loading, refetch };
};

export default getOrderList;
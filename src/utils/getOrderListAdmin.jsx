import { useQuery } from '@tanstack/react-query';
import React from 'react';

const getOrderListAdmin = () => {
    const url = "https://b2c-car-management-server-p6jwvedmy-shajib-dv.vercel.app/order_list";
    const {
        data: orderList = [],
        isLoading: loading,
        refetch,
    } = useQuery({
        queryKey: ["all_orders"],
        queryFn: async () => {
            const res = await fetch(url);
            return res.json();
        },
    });
    return { orderList, loading, refetch };
};

export default getOrderListAdmin;
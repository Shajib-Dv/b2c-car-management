import { useQuery } from "@tanstack/react-query";
import useAuth from "../hooks/useAuth";

const getMyCart = () => {
    const { user } = useAuth();

    let url = `http://localhost:3000/my_carts?email=${user?.email}`;

    const {
        data: myCart = [],
        isLoading: loading,
        refetch,
    } = useQuery({
        queryKey: ["my_cart"],
        enabled: !!user?.email,
        queryFn: async () => {
            const res = await fetch(url);
            return res.json();
        },
    });
    return { myCart, loading, refetch };
};

export default getMyCart;
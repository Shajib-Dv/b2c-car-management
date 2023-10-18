import { useQuery } from '@tanstack/react-query';

const getUpComingCarData = (email) => {

    const {data: carData = [], isLoading: loading, refetch} = useQuery({
        queryKey: ['carData'],
        queryFn: async() => {
            const res = await fetch(`http://localhost:3000/add_upcoming_car?email=${email}`);
            return res.json();
        }
    })
    return {carData, loading, refetch}
};

export default getUpComingCarData;
import { useQuery } from '@tanstack/react-query';
import useAuth from '../hooks/useAuth';

const getAllNewCars = (limit=null) => {
    const {user} = useAuth()


   const {data: allCars=[], isLoading,refetch} = useQuery({
    queryKey:['all_new_cars'],
    enabled: !!user?.email,
    queryFn: async() => {
       if(user?.email){
        const res = await fetch(`http://localhost:3000/all_new_cars?limit=${limit}`);
        return res.json();
       }
       return [];
    }
   })

   return {allCars, isLoading, refetch}
};

export default getAllNewCars;
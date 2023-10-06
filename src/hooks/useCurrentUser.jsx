import { useEffect, useState } from "react";
import useAuth from "./useAuth";
import { useQuery } from "@tanstack/react-query";

const useCurrentUser = () => {
  // const [currentUser, setCurrentUser] = useState({});
  const { user } = useAuth();

  // useEffect(() => {
  //   if (user?.email) {
  //     fetch(`http://localhost:3000/user/${user?.email}`)
  //       .then((res) => res.json())
  //       .then((data) => {
  //         if (user) {
  //           setCurrentUser(data);
  //         }
  //       });
  //   }
  // }, [user]);
  // return currentUser;

  const {
    data: currentUser = {},
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["user"],
    enabled: !!user?.email,
    queryFn: async () => {
      if (user?.email) {
        const res = await fetch(`http://localhost:3000/user/${user?.email}`);
        return res.json();
      }
    },
  });

  return { currentUser, refetch, isLoading };
};
export default useCurrentUser;

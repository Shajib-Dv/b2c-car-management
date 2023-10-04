/** @format */

import { useEffect, useState } from "react";
import useAuth from "./useAuth";

const useCurrentUser = () => {
  const [currentUser, setCurrentUser] = useState({});
  const { user } = useAuth();

  useEffect(() => {
    if (user?.email) {
      fetch(`http://localhost:3000/user/${user?.email}`)
        .then((res) => res.json())
        .then((data) => {
          if (user) {
            setCurrentUser(data);
          }
        });
    }
  }, [user]);
  return currentUser;
};
export default useCurrentUser;

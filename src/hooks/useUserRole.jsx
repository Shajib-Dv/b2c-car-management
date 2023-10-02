/** @format */

import { useState } from "react";
import useAuth from "./useAuth";

const useUserRole = () => {
  const [role, setRole] = useState("");
  const { user } = useAuth();
  if (user) {
    fetch(`http://localhost:3000/user_role/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        if (user) {
          setRole(data.role);
        }
      });
  }

  return role;
};
export default useUserRole;

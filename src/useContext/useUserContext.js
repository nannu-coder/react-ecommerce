import { useContext } from "react";
import { UserContext } from "../Context/UserProvider";

const useUserContext = () => {
  return useContext(UserContext);
};

export default useUserContext;

import { useContext } from "react";
import { filterProductContext } from "../Context/FilterProduct";

const useFilterContext = () => {
  return useContext(filterProductContext);
};

export default useFilterContext;

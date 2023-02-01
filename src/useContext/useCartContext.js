import { useContext } from "react";
import { CartContext } from "../Context/CartProvider";

const useCartContext = () => {
  return useContext(CartContext);
};

export default useCartContext;

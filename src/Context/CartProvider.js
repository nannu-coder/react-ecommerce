import { createContext, useReducer } from "react";
import { ADD_TO_CART } from "../Actions/Actions";
import Reducer from "../Reducers/CartReducer";

export const CartContext = createContext();

const initialState = {
  cart: [],
  total_items: 0,
  total_amount: 0,
  shipping_fee: 534,
};

const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, initialState);

  const addToCart = (id, color, amount, product) => {
    dispatch({ type: ADD_TO_CART, payload: { id, color, amount, product } });
  };

  return (
    <CartContext.Provider value={{ ...state, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;

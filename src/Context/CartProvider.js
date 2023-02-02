import { createContext, useEffect, useReducer } from "react";
import {
  ADD_TO_CART,
  CLEAR_CART,
  COUNT_CART_TOTALS,
  REMOVE_CART,
  TOGGLE_AMOUNT,
} from "../Actions/Actions";
import Reducer from "../Reducers/CartReducer";

export const CartContext = createContext();

const getLocalStorageItem = () => {
  let cart = localStorage.getItem("cart");
  if (cart) {
    return JSON.parse(localStorage.getItem("cart"));
  } else {
    return [];
  }
};

const initialState = {
  cart: getLocalStorageItem(),
  total_items: 0,
  total_amount: 0,
  shipping_fee: 534,
};

const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, initialState);

  const addToCart = (id, color, amount, product) => {
    dispatch({ type: ADD_TO_CART, payload: { id, color, amount, product } });
  };

  const removeItem = (id) => {
    dispatch({ type: REMOVE_CART, payload: id });
  };

  const toggleAmount = (id, value) => {
    dispatch({ type: TOGGLE_AMOUNT, payload: { id, value } });
  };

  const clearCart = () => {
    dispatch({ type: CLEAR_CART });
  };

  useEffect(() => {
    dispatch({ type: COUNT_CART_TOTALS });
    localStorage.setItem("cart", JSON.stringify(state.cart));
  }, [state.cart]);

  return (
    <CartContext.Provider
      value={{ ...state, addToCart, removeItem, toggleAmount, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;

import axios from "axios";
import { createContext, useEffect, useReducer } from "react";
import {
  PRODUCT_FETCH_BEGIN,
  PRODUCT_FETCH_ERROR,
  PRODUCT_FETCH_SUCCESS,
  SIDEBAR_CLOSE,
  SIDEBAR_OPEN,
  SINGLE_PRODUCT_BEGIN,
  SINGLE_PRODUCT_ERROR,
  SINGLE_PRODUCT_SUCCESS,
} from "../Actions/Actions";
import Reducer from "../Reducers/ProductReducer";
import { products_url as url } from "../utils/navLinks";

const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  const initialState = {
    isSidebarOpen: false,
    productLoading: false,
    products: [],
    featuredProducts: [],
    productsError: false,
    singleProductLoading: false,
    singleProductError: false,
    singleProducts: {},
  };

  const [state, dispatch] = useReducer(Reducer, initialState);

  const sidebarOpen = () => {
    dispatch({ type: SIDEBAR_OPEN });
  };

  const sidebarClose = () => {
    dispatch({ type: SIDEBAR_CLOSE });
  };

  const fetchProduct = async () => {
    try {
      dispatch({ type: PRODUCT_FETCH_BEGIN });
      const response = await axios.get(url);
      const products = response.data;
      dispatch({ type: PRODUCT_FETCH_SUCCESS, payload: products });
    } catch (error) {
      dispatch({ type: PRODUCT_FETCH_ERROR });
    }
  };

  const fetchSingleProduct = async (url) => {
    try {
      dispatch({ type: SINGLE_PRODUCT_BEGIN });
      const response = await axios.get(url);
      const singleProduct = response.data;
      dispatch({ type: SINGLE_PRODUCT_SUCCESS, payload: singleProduct });
    } catch (error) {
      dispatch({ type: SINGLE_PRODUCT_ERROR });
    }
  };

  useEffect(() => {
    fetchProduct();
  }, []);

  return (
    <ProductContext.Provider
      value={{ ...state, sidebarOpen, sidebarClose, fetchSingleProduct }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export { ProductContext, ProductProvider };

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

const ProductReducer = (state, action) => {
  if (action.type === SIDEBAR_OPEN) {
    return { ...state, isSidebarOpen: true };
  }
  if (action.type === SIDEBAR_CLOSE) {
    return { ...state, isSidebarOpen: false };
  }

  if (action.type === PRODUCT_FETCH_BEGIN) {
    return { ...state, productLoading: true };
  }

  if (action.type === PRODUCT_FETCH_SUCCESS) {
    const featuredProduct = action.payload.filter(
      (product) => product.featured === true
    );

    return {
      ...state,
      products: action.payload,
      featuredProducts: featuredProduct,
      productLoading: false,
    };
  }

  if (action.type === PRODUCT_FETCH_ERROR) {
    return { ...state, productsError: true, productLoading: false };
  }

  if (action.type === SINGLE_PRODUCT_BEGIN) {
    return { ...state, singleProductLoading: true, singleProductError: false };
  }

  if (action.type === SINGLE_PRODUCT_SUCCESS) {
    return {
      ...state,
      singleProductLoading: false,
      singleProductError: false,
      singleProducts: action.payload,
    };
  }

  if (action.type === SINGLE_PRODUCT_ERROR) {
    return { ...state, singleProductError: true, singleProductLoading: false };
  }

  return state;
};

export default ProductReducer;

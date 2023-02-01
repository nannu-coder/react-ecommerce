import React from "react";
import useFilterContext from "../useContext/useFilterContext";
import useProductContext from "../useContext/useProductContext";
import GridView from "./GridView";
import ListView from "./ListView";
import Loading from "./Loading";

const ProductList = () => {
  const { filtered_products: products, grid_view } = useFilterContext();
  const { productLoading: loading } = useProductContext();

  if (loading) {
    return <Loading />;
  }

  if (products.length < 1) {
    return (
      <h5 style={{ textTransform: "none" }}>
        Sorry, no products matched your search.
      </h5>
    );
  }

  if (grid_view === false) {
    return <ListView products={products} />;
  }

  return <GridView products={products} />;
};

export default ProductList;

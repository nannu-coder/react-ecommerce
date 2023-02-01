import React from "react";
import styled from "styled-components";
import Filters from "../Components/Filters";
import PageHero from "../Components/PageHero";
import ProductList from "../Components/ProductList";
import Sort from "../Components/Sort";

const Products = () => {
  return (
    <main>
      <PageHero title="Products" />
      <Wrapper>
        <div className="section-center products">
          <Filters />
          <div>
            <Sort />
            <ProductList />
          </div>
        </div>
      </Wrapper>
    </main>
  );
};

const Wrapper = styled.div`
  .products {
    display: grid;
    gap: 3rem 1.5rem;
    margin: 4rem auto;
  }
  @media (min-width: 768px) {
    .products {
      grid-template-columns: 200px 1fr;
    }
  }
`;

export default Products;

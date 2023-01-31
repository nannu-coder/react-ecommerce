import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import PageHero from "../Components/PageHero";

const CheckOut = () => {
  return (
    <main>
      <PageHero title="checkout" />
      <Wrapper className="page">
        <div className="empty">
          <h2>Your cart is empty</h2>
          <Link to="/products" className="btn">
            fill it
          </Link>
        </div>
      </Wrapper>
    </main>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  .empty {
    text-align: center;
  }
`;

export default CheckOut;

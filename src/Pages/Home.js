import React from "react";
import {
  Hero,
  Services,
  FeaturedProducts,
  Contact,
} from "../Components/Components";

const Home = () => {
  return (
    <main>
      <Hero />
      <FeaturedProducts />
      <Services />
      <Contact />
    </main>
  );
};

export default Home;

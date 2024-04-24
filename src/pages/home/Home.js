import React from "react";
import Hero from "../../components/hero/Hero";
import Cards from "../../components/homeCards/Cards";
import Category from "../../components/categories/Category";

function Home() {
  return (
    <div className="home">
      <Hero />
      <Cards />
      <Category />
    </div>
  );
}

export default Home;

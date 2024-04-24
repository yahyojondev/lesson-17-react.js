import React from "react";
import Hero from "../../components/hero/Hero";
import Cards from "../../components/homeCards/Cards";

function Home() {
  return (
    <div className="home">
      <Hero />
      <Cards />
    </div>
  );
}

export default Home;

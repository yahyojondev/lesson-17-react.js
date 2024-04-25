import React, { useState, useEffect } from "react";
import axios from "../../api";
import Hero from "../../components/hero/Hero";
// import Cards from "../../components/homeCards/Cards";?
import Category from "../../components/categories/Category";
import Products from "../../components/products/Products";
// import Footer from "../../components/footer/footer";
function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("products")
      .then((res) => setData(res.data.products))
      .catch((res) => console.log(res));
  }, []);

  return (
    <div className="home">
      <Hero />
      <Products title="Best Selling Products" data={data?.slice(0, 4)} />
      <Category />
      <Products title="Explore Our Products" data={data} />
      {/* <Footer /> */}
    </div>
  );
}

export default Home;

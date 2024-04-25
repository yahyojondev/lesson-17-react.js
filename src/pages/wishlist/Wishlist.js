import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Products from "../../components/products/Products";
import axios from "../../api";

function Wishlist() {
  const wishes = useSelector((state) => state.wishlist.value);
  // console.log(wishes);
  const [data, setData] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);
    axios
      .get("products")
      .then((res) => setData(res.data.products))
      .catch((res) => console.log(res));
  }, []);
  return (
    <div>
      <>
        {wishes.length ? (
          <Products title={`Wishlist (${wishes.length})`} data={wishes} />
        ) : (
          <h2 className="wishlist__title">Empty</h2>
        )}
        <Products data={data?.slice(5, 9)} />
      </>
    </div>
  );
}

export default Wishlist;

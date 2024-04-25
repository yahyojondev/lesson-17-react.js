import axios from "../../api";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { starproduct } from "../../static/Router";
import { FaRegHeart } from "react-icons/fa";
import { TbTruckDelivery } from "react-icons/tb";
import { GiReturnArrow } from "react-icons/gi";
import Products from "../products/Products";
import { useSelector } from "react-redux";

function SingleRoute() {
  const [product, setProduct] = useState([]);
  const { id } = useParams();

  const [count, setCount] = useState(1);

  const wishes = useSelector((state) => state.wishlist.value);
  const [data, setData] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);
    axios
      .get("products")
      .then((res) => setData(res.data.products))
      .catch((res) => console.log(res));
  }, []);

  console.log(product);

  useEffect(() => {
    axios
      .get(`/products/${id}`)
      .then((res) => setProduct(res.data))
      .catch((res) => console.log(res));
  }, []);

  return (
    <div className="singleRoute">
      <div className="container">
        <div className="singleRoute__wrapper">
          <div className="singleRoute__wrapper__left">
            <div className="img__wrapper">
              {product.images &&
                product.images.map((image, index) => (
                  <img key={index} src={image} alt="" />
                ))}
            </div>
            <div className="singleRoute__left__img">
              <img src={product?.thumbnail} alt="" />
            </div>
          </div>
          <div className="singleRoute__right">
            <h2>{product?.title}</h2>
            <div className="stars__limits__wrapper">
              <div>
                {starproduct?.map((el) => (
                  <img src={el.star} alt="" />
                ))}
              </div>
              <p>({product?.stock}Reviews)</p>|<span>In Stock</span>
            </div>
            <div className="price__wrapper">
              <p>${product?.price * count}</p>
              <del>${product?.price * 1.5 * count}</del>
            </div>
            <p className="single__discription">{product?.description}</p>
            <p className="line">
              <hr />
            </p>
            <div className="colors__wrapper">
              <p>Colours:</p>
              <div className="checkbox__wrapper">
                <span className="span1"></span>
                <span></span>
              </div>
            </div>
            <div className="size__wrapper">
              <p>Size:</p>
              <div className="sizes">
                <span>XS</span>
                <span>s</span>
                <span>M</span>
                <span>L</span>
                <span>XL</span>
              </div>
            </div>
            <div className="buy__wrapper">
              <div className="inc__dec">
                <button
                  disabled={count < 1}
                  onClick={() => setCount((p) => p - 1)}
                >
                  -
                </button>
                <span>{count}</span>
                <button onClick={() => setCount((p) => p + 1)}>+</button>
              </div>
              <button className="but__btn">Buy Now</button>
              <FaRegHeart className="like__svg" />
            </div>
            <div className="delivery__wrapper">
              <div className="delivery__top">
                <TbTruckDelivery />
                <div>
                  <h5>Return Delivery</h5>
                  <p>Free 30 Days Delivery Returns. Details</p>
                </div>
              </div>
              <hr />
              <div className="delivery__top">
                <GiReturnArrow />
                <div>
                  <h5>Return Delivery</h5>
                  <p>Free 30 Days Delivery Returns. Details</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Products title="Related Item" data={data?.slice(1, 5)} />
      </div>
    </div>
  );
}

export default SingleRoute;

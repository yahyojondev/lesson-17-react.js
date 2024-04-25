import React from "react";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa6";
import { starproduct } from "../../static/Router";
import { FaRegHeart, FaRegEye, FaHeart } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toggleToWishes } from "../../context/wishlistSlice";

function Products({ data, title }) {
  const wishes = useSelector((state) => state.wishlist.value);
  const dispatch = useDispatch();

  let productsitem = data?.map((el) => (
    <div key={el.id} className="card">
      <div className="img__wrapper">
        <NavLink to={`/singleRoute/${el.id}`}>
          <img src={el.images[0]} alt="" />
        </NavLink>
        <div className="svg__wishilist">
          <button onClick={() => dispatch(toggleToWishes(el))}>
            {wishes.some((w) => w.id === el.id) ? <FaHeart /> : <FaRegHeart />}
          </button>
          <FaRegEye />
        </div>
        <div className="add__card">
          <p>Add To Cart</p>
        </div>
      </div>
      <div className="card__content">
        <h3>{el.title}</h3>
        <div className="price__wrapper">
          <p>${el.price}</p>
          <del>${el.price * 1.5}</del>
        </div>
        <div className="stock__limits__wrapper">
          <div>
            {starproduct?.map((el) => (
              <img key={el.id} src={el.star} alt="" />
            ))}
          </div>
          <p>({el.stock})</p>
        </div>
      </div>
    </div>
  ));

  return (
    <div className="products">
      <div className="container">
        <div className="products__wrapper">
          <div className="cards__top">
            <div className="cards__top__wrapper">
              <span className="cards__top__wrapper__span"></span>
              <h3>Our Products</h3>
            </div>
            <div className="cards__top__wrapper__two">
              <h2>{title}</h2>
              <div className="btn__wrapper">
                <button className="cards__top__btn">
                  <FaArrowLeft />
                </button>
                <button className="cards__top__btn">
                  <FaArrowRight />
                </button>
              </div>
            </div>
          </div>
          <div className="product__cards__bottom">{productsitem}</div>
          {/* <NavLink className="view__allProducts">View All Products</NavLink> */}
        </div>
      </div>
    </div>
  );
}

export default Products;

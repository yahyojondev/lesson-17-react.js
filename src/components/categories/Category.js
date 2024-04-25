import React from "react";
import { NavLink } from "react-router-dom";
import categoryimg from "../../assets/images/categoryimg.png";

function Category() {
  return (
    <div className="category">
      <div className="container">
        <div className="category__wrapper">
          <div className="category__left">
            <p>Categories</p>
            <h2>Enhance Your Music Experience</h2>
            <ul className="category__list">
              <li className="category__item">
                <p>23</p>
                <span>Hours</span>
              </li>
              <li className="category__item">
                <p>05</p>
                <span>Days</span>
              </li>
              <li className="category__item">
                <p>59</p>
                <span>Minutes</span>
              </li>
              <li className="category__item">
                <p>35</p>
                <span>Seconds</span>
              </li>
            </ul>
            <NavLink className="category__link__btn">Buy Now</NavLink>
          </div>
          <img src={categoryimg} alt="" className="category__right__img" />
        </div>
      </div>
    </div>
  );
}

export default Category;
